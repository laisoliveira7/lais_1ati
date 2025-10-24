// Copilot, crie um array de objetos chamado 'musicas'. Cada objeto deve ter 'titulo', 'artista' e 'capaUrl'.

/*
// Copilot, por que usamos const aqui em vez de let ou var?
// R: Usamos 'const' porque não pretendemos reatribuir o array 'musicas'.
// Mesmo sendo const, ainda podemos modificar o conteúdo do array (adicionar/remover itens),
// mas não podemos reatribuir uma nova referência à variável 'musicas'.
*/

const musicas = [
    {
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        capaUrl: "https://picsum.photos/200/200?random=1"
    },
    {
        titulo: "Imagine",
        artista: "John Lennon",
        capaUrl: "https://picsum.photos/200/200?random=2"
    },
    {
        titulo: "Garota de Ipanema",
        artista: "Tom Jobim",
        capaUrl: "https://picsum.photos/200/200?random=3"
    },
    {
        titulo: "Billie Jean",
        artista: "Michael Jackson",
        capaUrl: "https://picsum.photos/200/200?random=4"
    },
    {
        titulo: "Aquarela",
        artista: "Toquinho",
        capaUrl: "https://picsum.photos/200/200?random=5"
    }
];

/*
// Copilot, por que organizamos os dados dessa forma?
// R: Organizar os dados em um array de objetos é uma prática comum porque:
// 1. Facilita a manipulação dos dados usando métodos de array como map, filter, find
// 2. Mantém as informações relacionadas agrupadas em um único objeto
// 3. Torna o código mais escalável - podemos adicionar novas propriedades facilmente
*/

/*
// Copilot, explique o que o método map faz nesta função:
// R: O método map percorre cada item do array 'musicas' e cria um novo elemento HTML para cada música.
// É uma forma mais elegante e funcional de fazer um loop, onde cada item é transformado em HTML
// e retornado como um novo array que depois juntamos com join('').
*/
let musicaAtual = null;

function carregarMusicas() {
    const container = document.getElementById('lista-de-musicas');
    container.innerHTML = '';
    
    musicas.forEach(musica => {
        const card = document.createElement('div');
        card.className = 'musica-card';
        
        const img = document.createElement('img');
        img.src = musica.capaUrl;
        img.alt = `Capa do álbum ${musica.titulo}`;
        
        const titulo = document.createElement('h3');
        titulo.textContent = musica.titulo;
        
        const artista = document.createElement('p');
        artista.textContent = musica.artista;
        
        const playBtn = document.createElement('button');
        playBtn.className = 'play-btn';
        playBtn.innerHTML = '<i class="fas fa-play"></i> Play';
        
        // Atualiza o player quando clicar no card ou no botão
        const atualizarPlayer = () => {
            musicaAtual = musica;
            atualizarPlayerUI();
        };
        
        card.onclick = atualizarPlayer;
        playBtn.onclick = (e) => {
            e.stopPropagation(); // Evita que o clique do botão dispare o evento do card
            atualizarPlayer();
        };
        
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(artista);
        card.appendChild(playBtn);
        container.appendChild(card);
    });
}

function atualizarPlayerUI() {
    const songInfo = document.querySelector('.song-info');
    const currentThumb = document.querySelector('.current-thumb');
    const playPauseBtn = document.querySelector('.play-pause');
    
    if (musicaAtual) {
        songInfo.innerHTML = `
            <h3>${musicaAtual.titulo}</h3>
            <p>${musicaAtual.artista}</p>
        `;
        currentThumb.src = musicaAtual.capaUrl;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        songInfo.innerHTML = `
            <h3>Selecione uma música</h3>
            <p>Clique em uma música para começar</p>
        `;
        currentThumb.src = "https://picsum.photos/50/50?random=1";
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

/*
// Copilot, por que adicionamos um event listener para 'DOMContentLoaded'?
// R: O event listener 'DOMContentLoaded' garante que nosso código só será executado
// após o DOM (estrutura HTML) estar completamente carregado. Isso evita erros de
// tentar manipular elementos que ainda não existem na página.
*/
document.addEventListener('DOMContentLoaded', carregarMusicas);

function tocarMusica(titulo) {
    // Por enquanto só mostra um alerta
    alert(`Tocando: ${titulo}`);
}