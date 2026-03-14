// Código para Google Apps Script DInâmico e Inteligente

// 1. Substitua pelo NOME DA ABA da sua planilha (ex: "Página1" ou "Sheet1")
const SHEET_NAME = "Página1";

// 2. Não altere daqui pra baixo a menos que saiba o que está fazendo =================

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME);
    
    // Recebendo os dados enviados pelo site
    const data = JSON.parse(e.postData.contents);
    
    // Obter cabeçalhos atuais da planilha (assumindo que estão na linha 1)
    let headers = [];
    if (sheet.getLastRow() > 0) {
      // Pega os cabeçalhos existentes
      headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].filter(String);
    }
    
    // Garantir que "Data / Hora" e "Nome do Participante" sejam as duas primeiras colunas
    if (!headers.includes("Data / Hora")) { headers.push("Data / Hora"); }
    if (!headers.includes("Nome / Usuário")) { headers.push("Nome / Usuário"); }
    
    // Adicionar novas categorias ao cabeçalho SEMPRE que o site enviar uma nova
    for (let key in data) {
      // Pula chaves base do sistema
      if (key !== "data" && key !== "nome") {
        // Ex: De 'melhor-filme' para 'Melhor Filme'
        const headerName = key.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()); 
        
        if (!headers.includes(headerName)) {
            headers.push(headerName);
        }
      }
    }
    
    // Atualiza a primeira linha inteira apenas com os cabeçalhos que não existiam ou reordena
    if (headers.length > 0) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    }
    
    // Monta a nova linha baseada na DEMANDA dos cabeçalhos, preenchendo o que encontrou no 'data'
    const newRow = new Array(headers.length).fill("-");
    
    // Preenche as colunas base
    const dateIndex = headers.indexOf("Data / Hora");
    if (dateIndex !== -1) newRow[dateIndex] = data.data || new Date().toLocaleString("pt-BR");
    
    const nameIndex = headers.indexOf("Nome / Usuário");
    if (nameIndex !== -1) newRow[nameIndex] = data.nome || "Anônimo";
    
    // Preenche as colunas de categorias
    for (let key in data) {
      if (key !== "data" && key !== "nome") {
        const headerName = key.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
        const index = headers.indexOf(headerName);
        if (index !== -1) {
          newRow[index] = data[key];
        }
      }
    }
    
    // Insere a nova linha sempre na próxima disponível
    const nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
