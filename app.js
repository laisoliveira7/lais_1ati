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
        capaUrl: "https://example.com/queen-bohemian.jpg"
    },
    {
        titulo: "Imagine",
        artista: "John Lennon",
        capaUrl: "https://example.com/lennon-imagine.jpg"
    },
    {
        titulo: "Garota de Ipanema",
        artista: "Tom Jobim",
        capaUrl: "https://example.com/jobim-garota.jpg"
    },
    {
        titulo: "Billie Jean",
        artista: "Michael Jackson",
        capaUrl: "https://example.com/jackson-billiejean.jpg"
    },
    {
        titulo: "Aquarela",
        artista: "Toquinho",
        capaUrl: "https://example.com/toquinho-aquarela.jpg"
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
function carregarMusicas() {
    const container = document.querySelector('.musicas-container');
    
    const musicasHTML = musicas.map(musica => `
        <div class="musica-card">
            <img src="${musica.capaUrl}" alt="Capa do álbum ${musica.titulo}">
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
            <button class="play-btn" onclick="tocarMusica('${musica.titulo}')">Play</button>
        </div>
    `).join('');

    container.innerHTML = musicasHTML;
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