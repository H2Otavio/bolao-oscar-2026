const oscarData = [
    {
        id: "melhor-filme",
        title: "Melhor Filme",
        nominees: [
            { id: "filme1", name: "Bugonia", description: "Yorgos Lanthimos", image: "https://images.justwatch.com/poster/340317141/s718/bugonia.jpg" },
            { id: "filme2", name: "F1", description: "Joseph Kosinski", image: "https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_.jpg" },
            { id: "filme3", name: "Frankenstein", description: "Guillermo del Toro", image: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg" },
            { id: "filme4", name: "Hamnet", description: "Chloé Zhao", image: "https://upload.wikimedia.org/wikipedia/pt/e/ee/Hamnet_filme.webp" },
            { id: "filme5", name: "Marty Supreme", description: "Josh Safdie", image: "https://ingresso-a.akamaihd.net/prd/img/movie/marty-supreme/152a01c7-8475-40c0-a56e-c2ca16382e65.webp" },
            { id: "filme6", name: "One Battle After Another", description: "Paul Thomas Anderson", image: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "filme7", name: "The Secret Agent", description: "Kleber Mendonça Filho", image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/216/2025/12/09090829/ovn2eHUXwEaYwB9owrg8gY4awpj.jpg" },
            { id: "filme8", name: "Sentimental Value", description: "Joachim Trier", image: "https://m.media-amazon.com/images/M/MV5BNTMwMTk0Y2QtY2VhNy00OGYwLThkMjMtZjkwMGI3MTJiMjAyXkEyXkFqcGc@._V1_.jpg" },
            { id: "filme9", name: "Sinners", description: "Ryan Coogler", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" },
            { id: "filme10", name: "Train Dreams", description: "Clint Bentley, Greg Kwedar", image: "https://m.media-amazon.com/images/M/MV5BZDkzNzkyNTktYzNhMi00YjhiLWI5YmUtZjliMTY0ZDc5NmMyXkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-diretor",
        title: "Melhor Diretor",
        nominees: [
            { id: "dir1", name: "Chloé Zhao", description: "Hamnet", image: "https://citacoes.in/media/authors/chloe-zhao.jpeg" },
            { id: "dir2", name: "Josh Safdie", description: "Marty Supreme", image: "https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/591026/JoshSafdie2017.jpg" },
            { id: "dir3", name: "Paul Thomas Anderson", description: "One Battle After Another", image: "https://media.gq.com/photos/65fdeacbc7ec45b8c45ad4a6/2:3/w_1770,h_2655,c_limit/GettyImages-1385593633.jpg" },
            { id: "dir4", name: "Joachim Trier", description: "Sentimental Value", image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Joachim_Trier-9987.jpg" },
            { id: "dir5", name: "Ryan Coogler", description: "Sinners", image: "https://i0.wp.com/www.parkrecord.com/wp-content/uploads/2022/11/Ryan-Coogler-Approved-Portrait-PC-Ricky-Middlesworth-scaled-1.jpg?fit=1978%2C2560&ssl=1" }
        ]
    },
    {
        id: "melhor-ator",
        title: "Melhor Ator",
        nominees: [
            { id: "ator1", name: "Timothée Chalamet", description: "Marty Supreme", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnYUPHeq353aE3C_rd6gpgxLiocIZUJ3ySQ&s" },
            { id: "ator2", name: "Leonardo DiCaprio", description: "One Battle After Another", image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg" },
            { id: "ator3", name: "Ethan Hawke", description: "Blue Moon", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/BlueMoonBFILFF161025-53_%2854875551295%29_%28cropped_2%29.jpg" },
            { id: "ator4", name: "Michael B. Jordan", description: "Sinners", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RxAv5CsOaJJU0eX5-cp43PXQ4hd3cVrnpA&s" },
            { id: "ator5", name: "Wagner Moura", description: "The Secret Agent", image: "https://br.web.img3.acsta.net/img/a2/a7/a2a78bdd4d8f989ba982b8a0292690ca.png" }
        ]
    },
    {
        id: "melhor-atriz",
        title: "Melhor Atriz",
        nominees: [
            { id: "atriz1", name: "Jessie Buckley", description: "Hamnet", image: "https://image.tmdb.org/t/p/w500/jKhDQOMVQ1JP4gaUXCQg75gvsrm.jpg" },
            { id: "atriz2", name: "Rose Byrne", description: "If I Had Legs I'd Kick You", image: "https://image.tmdb.org/t/p/w500/6YauDiiTBwRGC1xnwspPmNvPWUu.jpg" },
            { id: "atriz3", name: "Kate Hudson", description: "Song Sung Blue", image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Kate_Hudson_at_the_2024_Toronto_International_Film_Festival_%28cropped_2%29.jpg" },
            { id: "atriz4", name: "Renate Reinsve", description: "Sentimental Value", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAaP4PnvBtxKkoB4Oxne30sYslI7pxt2CCw&s" },
            { id: "atriz5", name: "Emma Stone", description: "Bugonia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHW7Dv3iOBwwHOmhLxtSmgaHGEyYjQIcMug&s" }
        ]
    },
    {
        id: "melhor-ator-coadjuvante",
        title: "Melhor Ator Coadjuvante",
        nominees: [
            { id: "atorc1", name: "Benicio del Toro", description: "One Battle After Another", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Benicio_Del_Toro_-_Guardians_of_the_Galaxy_premiere_-_July_2014_%28cropped%29.jpg/960px-Benicio_Del_Toro_-_Guardians_of_the_Galaxy_premiere_-_July_2014_%28cropped%29.jpg" },
            { id: "atorc2", name: "Jacob Elordi", description: "Frankenstein", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx6rSefyk1sYRCuQ7enzlR2w8Xm89RxfIemA&s" },
            { id: "atorc3", name: "Delroy Lindo", description: "Sinners", image: "https://ntvb.tmsimg.com/assets/assets/71122_v9_bc.jpg" },
            { id: "atorc4", name: "Sean Penn", description: "One Battle After Another", image: "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/sean_penn.png" },
            { id: "atorc5", name: "Stellan Skarsgård", description: "Sentimental Value", image: "https://resizing.flixster.com/12soLONgbTkJCzuovHzIeHDsaU4=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/238828_v9_bb.jpg" }
        ]
    },
    {
        id: "melhor-atriz-coadjuvante",
        title: "Melhor Atriz Coadjuvante",
        nominees: [
            { id: "atrizc1", name: "Elle Fanning", description: "Sentimental Value", image: "https://br.web.img3.acsta.net/c_310_420/pictures/19/10/17/03/08/2153588.jpg" },
            { id: "atrizc2", name: "Inga Ibsdotter Lilleaas", description: "Sentimental Value", image: "https://image.tmdb.org/t/p/w500/wlZPIgnXMpK3Nvvhg0bZzmWxZDH.jpg" },
            { id: "atrizc3", name: "Amy Madigan", description: "Weapons", image: "https://br.web.img2.acsta.net/c_310_420/img/85/6b/856b1b20da1b818951aee7e8d05b03cf.webp" },
            { id: "atrizc4", name: "Wunmi Mosaku", description: "Sinners", image: "https://m.media-amazon.com/images/M/MV5BZTViMjhmNzYtZjNlYi00ZDk3LTlkODEtNGEyYjc4NjEyYWVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "atrizc5", name: "Teyana Taylor", description: "One Battle After Another", image: "https://br.web.img3.acsta.net/c_310_420/pictures/18/07/30/21/45/5820966.jpg" }
        ]
    },
    {
        id: "roteiro-original",
        title: "Melhor Roteiro Original",
        nominees: [
            { id: "roto1", name: "Blue Moon", description: "Robert Kaplow", image: "https://m.media-amazon.com/images/S/pv-target-images/164bb79469d2e6a5af0ac7bd4f8a2a164392526a7e16e201eea3566f466c334f.jpg" },
            { id: "roto2", name: "It Was Just an Accident", description: "Jafar Panahi", image: "https://m.media-amazon.com/images/M/MV5BMWJkZmZlNjUtM2Q1OC00MmNjLWFkOWEtNjRhN2FkM2ZlMjI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "roto3", name: "Marty Supreme", description: "Ronald Bronstein e Josh Safdie", image: "https://ingresso-a.akamaihd.net/prd/img/movie/marty-supreme/152a01c7-8475-40c0-a56e-c2ca16382e65.webp" },
            { id: "roto4", name: "Sentimental Value", description: "Eskil Vogt e Joachim Trier", image: "https://m.media-amazon.com/images/M/MV5BNTMwMTk0Y2QtY2VhNy00OGYwLThkMjMtZjkwMGI3MTJiMjAyXkEyXkFqcGc@._V1_.jpg" },
            { id: "roto5", name: "Sinners", description: "Ryan Coogler", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "roteiro-adaptado",
        title: "Melhor Roteiro Adaptado",
        nominees: [
            { id: "rota1", name: "Bugonia", description: "Will Tracy", image: "https://images.justwatch.com/poster/340317141/s718/bugonia.jpg" },
            { id: "rota2", name: "Frankenstein", description: "Guillermo del Toro", image: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg" },
            { id: "rota3", name: "Hamnet", description: "Chloé Zhao e Maggie O'Farrell", image: "https://upload.wikimedia.org/wikipedia/pt/e/ee/Hamnet_filme.webp" },
            { id: "rota4", name: "One Battle After Another", description: "Paul Thomas Anderson", image: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "rota5", name: "Train Dreams", description: "Clint Bentley e Greg Kwedar", image: "https://m.media-amazon.com/images/M/MV5BZDkzNzkyNTktYzNhMi00YjhiLWI5YmUtZjliMTY0ZDc5NmMyXkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-animacao",
        title: "Melhor Animação",
        nominees: [
            { id: "ani1", name: "Arco", description: "Ugo Bienvenu, Félix de Givry...", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCgb0eiBSEpYAyEShv2KbT2m37wl4nf89uYw&s" },
            { id: "ani2", name: "Elio", description: "Madeline Sharafian, Domee Shi...", image: "https://ingresso-a.akamaihd.net/prd/img/movie/elio/12fe7bf7-334c-450b-b0d2-b61515bf7547.webp" },
            { id: "ani3", name: "KPop Demon Hunters", description: "Maggie Kang, Chris Appelhans...", image: "https://www.animationmagazine.net/wordpress/wp-content/uploads/KPop-Demon-Hunters-Sing-Along-kv.jpg" },
            { id: "ani4", name: "Little Amélie", description: "Maïlys Vallade, Liane-Cho Han...", image: "https://m.media-amazon.com/images/S/pv-target-images/2fad23a7f5e63b9d6ef36357f1393c46ccc6c313bcc35624fa94650df9c19585.jpg" },
            { id: "ani5", name: "Zootopia 2", description: "Jared Bush, Byron Howard...", image: "https://ingresso-a.akamaihd.net/prd/img/movie/zootopia-2/3d1848cc-3a3f-4a9d-bfea-62568e4d40f9.webp" }
        ]
    },
    {
        id: "melhor-fotografia",
        title: "Melhor Fotografia",
        nominees: [
            { id: "foto1", name: "Frankenstein", description: "Dan Laustsen", image: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg" },
            { id: "foto2", name: "Marty Supreme", description: "Darius Khondji", image: "https://ingresso-a.akamaihd.net/prd/img/movie/marty-supreme/152a01c7-8475-40c0-a56e-c2ca16382e65.webp" },
            { id: "foto3", name: "One Battle After Another", description: "Michael Bauman", image: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "foto4", name: "Sinners", description: "Autumn Durald Arkapaw", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" },
            { id: "foto5", name: "Train Dreams", description: "Adolpho Veloso", image: "https://m.media-amazon.com/images/M/MV5BZDkzNzkyNTktYzNhMi00YjhiLWI5YmUtZjliMTY0ZDc5NmMyXkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-edicao",
        title: "Melhor Edição",
        nominees: [
            { id: "edt1", name: "F1", description: "Stephen Mirrione", image: "https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_.jpg" },
            { id: "edt2", name: "Marty Supreme", description: "Ronald Bronstein e Josh Safdie", image: "https://ingresso-a.akamaihd.net/prd/img/movie/marty-supreme/152a01c7-8475-40c0-a56e-c2ca16382e65.webp" },
            { id: "edt3", name: "One Battle After Another", description: "Andy Jurgensen", image: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "edt4", name: "Sentimental Value", description: "Olivier Bugge Coutté", image: "https://m.media-amazon.com/images/M/MV5BNTMwMTk0Y2QtY2VhNy00OGYwLThkMjMtZjkwMGI3MTJiMjAyXkEyXkFqcGc@._V1_.jpg" },
            { id: "edt5", name: "Sinners", description: "Michael P. Shawver", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-design-producao",
        title: "Melhor Design de Produção",
        nominees: [
            { id: "dsp1", name: "Frankenstein", description: "Tamara Deverell e Shane Vieau", image: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg" },
            { id: "dsp2", name: "Hamnet", description: "Fiona Crombie e Alice Felton", image: "https://upload.wikimedia.org/wikipedia/pt/e/ee/Hamnet_filme.webp" },
            { id: "dsp3", name: "Marty Supreme", description: "Jack Fisk e Adam Willis", image: "https://ingresso-a.akamaihd.net/prd/img/movie/marty-supreme/152a01c7-8475-40c0-a56e-c2ca16382e65.webp" },
            { id: "dsp4", name: "One Battle After Another", description: "Florencia Martin e Anthony Carlino", image: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "dsp5", name: "Sinners", description: "Hannah Beachler e Monique Champagne", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-figurino",
        title: "Melhor Figurino",
        nominees: [
            { id: "fig1", name: "Avatar: Fire and Ash", description: "Deborah L. Scott", image: "https://lumiere-a.akamaihd.net/v1/images/image_f9fd690c.jpeg?region=0,0,540,810" },
            { id: "fig2", name: "Frankenstein", description: "Kate Hawley", image: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg" },
            { id: "fig3", name: "Hamnet", description: "Malgosia Turzanska", image: "https://upload.wikimedia.org/wikipedia/pt/e/ee/Hamnet_filme.webp" },
            { id: "fig4", name: "Marty Supreme", description: "Miyako Bellizzi", image: "https://ingresso-a.akamaihd.net/prd/img/movie/marty-supreme/152a01c7-8475-40c0-a56e-c2ca16382e65.webp" },
            { id: "fig5", name: "Sinners", description: "Ruth E. Carter", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-maquiagem",
        title: "Melhor Maquiagem",
        nominees: [
            { id: "maq1", name: "Frankenstein", description: "Mike Hill, Jordan Samuel e Cliona Furey", image: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg" },
            { id: "maq2", name: "Kokuho", description: "Kyoko Toyokawa, Naomi Hibino...", image: "https://br.web.img3.acsta.net/c_310_420/img/5b/cf/5bcf1fd0d4a2e335630fcbd17f9b5199.jpg" },
            { id: "maq3", name: "Sinners", description: "Ken Diaz, Mike Fontaine e Shunika Terry", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" },
            { id: "maq4", name: "The Smashing Machine", description: "Kazu Hiro, Glen Griffen...", image: "https://m.media-amazon.com/images/M/MV5BOWYxZTM1ZGMtMjg5MC00NzcyLTk0ZTEtZWI0ZThkNDJiYjZmXkEyXkFqcGc@._V1_.jpg" },
            { id: "maq5", name: "The Ugly Stepsister", description: "Thomas Foldberg e Anna Cathrine Saurberg", image: "https://images.justwatch.com/poster/330798000/s718/the-ugly-stepsister.jpg" }
        ]
    },
    {
        id: "melhor-trilha-sonora",
        title: "Melhor Trilha Sonora",
        nominees: [
            { id: "tri1", name: "Bugonia", description: "Jerskin Fendrix", image: "https://images.justwatch.com/poster/340317141/s718/bugonia.jpg" },
            { id: "tri2", name: "Frankenstein", description: "Alexandre Desplat", image: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg" },
            { id: "tri3", name: "Hamnet", description: "Max Richter", image: "https://upload.wikimedia.org/wikipedia/pt/e/ee/Hamnet_filme.webp" },
            { id: "tri4", name: "One Battle After Another", description: "Jonny Greenwood", image: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "tri5", name: "Sinners", description: "Ludwig Göransson", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-cancao-original",
        title: "Melhor Canção Original",
        nominees: [
            { id: "can1", name: "Dear Me", description: "Diane Warren: Relentless", image: "https://greenwichentertainment.com/wp-content/uploads/dianne_warren_1sht_72dpi-scaled.jpg" },
            { id: "can2", name: "Golden", description: "Kpop Demon Hunters", image: "https://www.animationmagazine.net/wordpress/wp-content/uploads/KPop-Demon-Hunters-Sing-Along-kv.jpg" },
            { id: "can3", name: "I Lied To You", description: "Sinners", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" },
            { id: "can4", name: "Sweet Dreams Of Joy", description: "Viva Verdi!", image: "https://media.fstatic.com/gxiKBTynv-glmB_aYXOl5gRekBU=/350x525/smart/filters:format(webp)/media/movies/covers/2025/12/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzIzZTYyM2JmLWI5ODgtNGI3Yy1hYTQxLT_iVuQIMZ.jpg" },
            { id: "can5", name: "Train Dreams", description: "Train Dreams", image: "https://m.media-amazon.com/images/M/MV5BZDkzNzkyNTktYzNhMi00YjhiLWI5YmUtZjliMTY0ZDc5NmMyXkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-som",
        title: "Melhor Som",
        nominees: [
            { id: "som1", name: "F1", description: "", image: "https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_.jpg" },
            { id: "som2", name: "Frankenstein", description: "", image: "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg" },
            { id: "som3", name: "One Battle After Another", description: "", image: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "som4", name: "Sinners", description: "", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" },
            { id: "som5", name: "Sirāt", description: "", image: "https://ingresso-a.akamaihd.net/prd/img/movie/sirat/f8c251f0-4eba-4bca-b639-0e7dd219d51a.webp" }
        ]
    },
    {
        id: "melhores-efeitos-visuais",
        title: "Efeitos Visuais",
        nominees: [
            { id: "efv1", name: "Avatar: Fire and Ash", description: "", image: "https://lumiere-a.akamaihd.net/v1/images/image_f9fd690c.jpeg?region=0,0,540,810" },
            { id: "efv2", name: "F1", description: "", image: "https://m.media-amazon.com/images/M/MV5BNGI0MDI4NjEtOWU3ZS00ODQyLWFhYTgtNGYxM2ZkM2Q2YjE3XkEyXkFqcGc@._V1_.jpg" },
            { id: "efv3", name: "Jurassic World Rebirth", description: "", image: "https://m.media-amazon.com/images/M/MV5BNjg2NTcwYWQtYzk4NS00MTJhLWEzZjItMzIxNjk3YzlkYzU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "efv4", name: "The Lost Bus", description: "", image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/The_Lost_Bus_poster.jpg/250px-The_Lost_Bus_poster.jpg" },
            { id: "efv5", name: "Sinners", description: "", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-elenco",
        title: "Melhor Elenco",
        nominees: [
            { id: "cas1", name: "Hamnet", description: "Nina Gold", image: "https://upload.wikimedia.org/wikipedia/pt/e/ee/Hamnet_filme.webp" },
            { id: "cas2", name: "Marty Supreme", description: "Jennifer Venditti", image: "https://ingresso-a.akamaihd.net/prd/img/movie/marty-supreme/152a01c7-8475-40c0-a56e-c2ca16382e65.webp" },
            { id: "cas3", name: "One Battle After Another", description: "Cassandra Kulukundis", image: "https://m.media-amazon.com/images/M/MV5BMzBkZmQ0NjMtNTZlMy00ZjdlLTg5ODUtYWFlNGM0YzE3MTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "cas4", name: "The Secret Agent", description: "Gabriel Domingues", image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/216/2025/12/09090829/ovn2eHUXwEaYwB9owrg8gY4awpj.jpg" },
            { id: "cas5", name: "Sinners", description: "Francine Maisler", image: "https://m.media-amazon.com/images/M/MV5BNjIwZWY4ZDEtMmIxZS00NDA4LTg4ZGMtMzUwZTYyNzgxMzk5XkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-filme-internacional",
        title: "Filme Internacional",
        nominees: [
            { id: "ifi1", name: "It Was Just an Accident", description: "França", image: "https://m.media-amazon.com/images/M/MV5BMWJkZmZlNjUtM2Q1OC00MmNjLWFkOWEtNjRhN2FkM2ZlMjI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "ifi2", name: "The Secret Agent", description: "Brasil", image: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/216/2025/12/09090829/ovn2eHUXwEaYwB9owrg8gY4awpj.jpg" },
            { id: "ifi3", name: "Sentimental Value", description: "Noruega", image: "https://m.media-amazon.com/images/M/MV5BNTMwMTk0Y2QtY2VhNy00OGYwLThkMjMtZjkwMGI3MTJiMjAyXkEyXkFqcGc@._V1_.jpg" },
            { id: "ifi4", name: "Sirāt", description: "Espanha", image: "https://ingresso-a.akamaihd.net/prd/img/movie/sirat/f8c251f0-4eba-4bca-b639-0e7dd219d51a.webp" },
            { id: "ifi5", name: "The Voice of Hind Rajab", description: "Tunísia", image: "https://www.thepartysales.com/wp-content/uploads/2025/07/A4-THE-VOICE-OF-HIND-RAJAB_UK-HD-scaled.jpg" }
        ]
    },
    {
        id: "melhor-documentario",
        title: "Documentário (Longa)",
        nominees: [
            { id: "doc1", name: "The Alabama Solution", description: "", image: "https://m.media-amazon.com/images/S/pv-target-images/a223f15a6a315f59079bdf13361768f50b5102331f037a6dcecf6e03f8e51c0d.jpg" },
            { id: "doc2", name: "Come See Me in the Good Light", description: "", image: "https://m.media-amazon.com/images/M/MV5BZTEwNjRiMzUtMmU1OC00OWE5LTkwYjItMGE1NTQwMTFiM2NmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "doc3", name: "Cutting Through Rocks", description: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVHXpgn5sKdeLldjVWkjRPuIicwdaXo9bww&s" },
            { id: "doc4", name: "Mr. Nobody Against Putin", description: "", image: "https://m.media-amazon.com/images/M/MV5BYWVjNGQ5NjYtZDk2My00NzgxLWE1NDMtOGEzYTQzMjAxODIxXkEyXkFqcGc@._V1_.jpg" },
            { id: "doc5", name: "The Perfect Neighbor", description: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROYpwFXiucdH8_euxWr4Zp0qQhATizPyFgA&s" }
        ]
    },
    {
        id: "melhor-documentario-curta",
        title: "Documentário (Curta)",
        nominees: [
            { id: "docc1", name: "All the Empty Rooms", description: "", image: "https://resizing.flixster.com/o99GS4HQyuI5XVMAaFo_ix8xtO8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzE2OTk3ZWJjLWZjYTgtNDUzYy05NWI3LTI4ZTA2NTQ4NTlhYy5qcGc=" },
            { id: "docc2", name: "Armed Only With a Camera", description: "", image: "https://m.media-amazon.com/images/M/MV5BZTc2YmQzZmMtYjQxYS00ZTYzLThhMDEtNzhlMjVhMTNiYmQ1XkEyXkFqcGc@._V1_.jpg" },
            { id: "docc3", name: "Children No More", description: "", image: "https://m.media-amazon.com/images/M/MV5BOGMwMDJlMzAtNThhMS00MTYxLWE2MGItOTE2OGNmM2UxOWFhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "docc4", name: "The Devil Is Busy", description: "", image: "https://m.media-amazon.com/images/M/MV5BNGM4ZGEzMTQtN2YzMC00NjAzLWJmNjUtY2Y5OTkyM2ZmNDBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "docc5", name: "Perfectly a Strangeness", description: "", image: "https://resizing.flixster.com/UgjXwhsMYCZPhsoj1Jox8IyvE4g=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27545392_v_v8_aa.jpg" }
        ]
    },
    {
        id: "melhor-curta-animacao",
        title: "Curta de Animação",
        nominees: [
            { id: "can1", name: "Butterfly", description: "", image: "https://m.media-amazon.com/images/M/MV5BYTAyZDNkNDEtZTE4YS00YTM5LWI5YmUtYzNiNTQwZDEwMzY4XkEyXkFqcGc@._V1_.jpg" },
            { id: "can2", name: "Forevergreen", description: "", image: "https://static.wixstatic.com/media/aead62_c232b06a04f042f3b875c22437cf2a3b~mv2.jpg" },
            { id: "can3", name: "The Girl Who Cried Pearls", description: "", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREyUkaYCz5SU2RxrrU5yzXBGvbxctHcpIAmA&s" },
            { id: "can4", name: "Retirement Plan", description: "", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Retirement_Plan_Film_Poster.jpg/250px-Retirement_Plan_Film_Poster.jpg" },
            { id: "can5", name: "The Three Sisters", description: "", image: "https://m.media-amazon.com/images/M/MV5BMzM3MjZlYjUtMTU3Ni00MWVjLWEzNjItODNiNDQ2NzFjYTdkXkEyXkFqcGc@._V1_.jpg" }
        ]
    },
    {
        id: "melhor-curta-live-action",
        title: "Curta Live Action",
        nominees: [
            { id: "cla1", name: "Butcher's Stain", description: "", image: "https://br.web.img3.acsta.net/c_310_420/img/20/b9/20b93ac69c2057742b90b11fb38bae5f.jpg" },
            { id: "cla2", name: "A Friend of Dorothy", description: "", image: "https://upload.wikimedia.org/wikipedia/en/f/fc/A_Friend_of_Dorothy_film_poster.jpg" },
            { id: "cla3", name: "Jane Austen's Period Drama", description: "", image: "https://m.media-amazon.com/images/M/MV5BMDE1MTc4Y2ItZDRkMi00YzllLTlmNTUtZjA3MzQ5ODcxY2UyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: "cla4", name: "The Singers", description: "", image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABY8nW_UVXLxYdYqN2i1OdlPwbmwLQFtZU45WLA3QTDjfj4L4CGHMh28wSnFtIgHYmD7wGj3T3VdLsQrfrxutonoOk9yVuHXXJIwt.jpg?r=94f" },
            { id: "cla5", name: "Two People Exchanging Saliva", description: "", image: "https://upload.wikimedia.org/wikipedia/en/c/cb/Two_People_Exchanging_Saliva_film_poster.jpg" }
        ]
    }
];
