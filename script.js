document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('categoriesContainer');
    const form = document.getElementById('predictionsForm');
    const userNameInput = document.getElementById('userName');
    const submitBtn = document.getElementById('submitBtn');
    const progressText = document.getElementById('progressText');
    const modal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    // State to hold user selections
    let selections = {};
    const totalCategories = oscarData.length;

    // --- 1. Render Categories ---
    function renderCategories() {
        oscarData.forEach((category, index) => {
            const section = document.createElement('div');
            section.className = 'category-section';
            section.style.animationDelay = `${index * 0.15}s`;

            const title = document.createElement('h2');
            title.className = 'category-title';
            title.textContent = category.title;

            const grid = document.createElement('div');
            grid.className = 'nominees-grid';

            category.nominees.forEach(nominee => {
                const card = document.createElement('div');
                card.className = 'nominee-card glass';
                card.dataset.category = category.id;
                card.dataset.nominee = nominee.id;
                
                // Add Image if exists, else a placeholder gradient
                const imageHtml = nominee.image 
                    ? `<img src="${nominee.image}" alt="${nominee.name}" class="nominee-image">`
                    : `<div class="nominee-image" style="background: linear-gradient(45deg, #1a1a1a, #333);"></div>`;

                card.innerHTML = `
                    ${imageHtml}
                    <div class="nominee-info">
                        <div class="nominee-name">${nominee.name}</div>
                        ${nominee.description ? `<div class="nominee-desc">${nominee.description}</div>` : ''}
                    </div>
                `;

                card.addEventListener('click', () => handleSelection(category.id, nominee, card, grid));
                grid.appendChild(card);
            });

            section.appendChild(title);
            section.appendChild(grid);
            container.appendChild(section);
        });
    }

    // --- 2. Handle Selection ---
    function handleSelection(categoryId, nominee, cardElement, gridElement) {
        // Remove selected class from all cards in this category
        const cards = gridElement.querySelectorAll('.nominee-card');
        cards.forEach(c => c.classList.remove('selected'));

        // Add selected class to chosen card
        cardElement.classList.add('selected');

        // Update state
        selections[categoryId] = nominee.name;

        checkFormValidity();
    }

    // --- 3. Check Form Validity ---
    function checkFormValidity() {
        const answeredCount = Object.keys(selections).length;
        progressText.textContent = `${answeredCount} / ${totalCategories} categorias respondidas`;
        
        const hasName = userNameInput.value.trim().length > 1;
        const hasAllAnswers = answeredCount === totalCategories;

        if (hasName && hasAllAnswers) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    userNameInput.addEventListener('input', checkFormValidity);

    // --- 4. Submit Data ---
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const userName = userNameInput.value.trim();
        if(!userName) return;

        // Disable button and show loader
        const btnText = submitBtn.querySelector('span');
        const loader = submitBtn.querySelector('.loader');
        
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        loader.classList.remove('hidden');

        // Prepare Payload
        const payload = {
            data: new Date().toISOString(),
            nome: userName,
            ...selections
        };

        console.log("Payload a ser enviado para a planilha:", payload);

        // HERE IS THE GOOGLE SHEETS WEBHOOK URL
        // O usuário precisará trocar essa URL por uma gerada pelo Google Apps Script
        const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxGIT4UXJbIJS42FtiPq9EEZL0o72k2MARo62on4x3VaRvgum8I82sdJ-t1N9RwkIrvjA/exec"; 

        try {
            // Simulando um delay mínimo para animação
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
                method: 'POST',
                mode: 'no-cors', // Importante para contornar problemas de CORS no Google Apps Script
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            // Show success modal
            modal.classList.remove('hidden');
            
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert("Ocorreu um erro ao enviar seus palpites. Tente novamente.");
        } finally {
            // Restore button state
            btnText.style.display = 'inline-block';
            loader.classList.add('hidden');
        }
    });

    // --- 5. Modal Logic ---
    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        // Reset form
        selections = {};
        userNameInput.value = '';
        document.querySelectorAll('.nominee-card.selected').forEach(c => c.classList.remove('selected'));
        checkFormValidity();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Init
    renderCategories();
    checkFormValidity();
});
