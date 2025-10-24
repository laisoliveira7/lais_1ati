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
/*
// Copilot, crie uma função que lê o array 'musicas' e insere o HTML de cada música na div com id 'lista-de-musicas'.
// R: Esta função usa o método forEach para iterar sobre o array de músicas e
// createElement para criar elementos HTML de forma dinâmica, que é uma abordagem
// mais estruturada que usar innerHTML.
*/
function carregarMusicas() {
    const container = document.getElementById('lista-de-musicas');
    // Limpa o conteúdo anterior
    container.innerHTML = '';
    
    // Para cada música no array, cria os elementos necessários
    musicas.forEach(musica => {
        // Cria o card
        const card = document.createElement('div');
        card.className = 'musica-card';
        
        // Cria a imagem
        const img = document.createElement('img');
        img.src = musica.capaUrl;
        img.alt = `Capa do álbum ${musica.titulo}`;
        
        // Cria o título
        const titulo = document.createElement('h3');
        titulo.textContent = musica.titulo;
        
        // Cria o nome do artista
        const artista = document.createElement('p');
        artista.textContent = musica.artista;
        
        // Cria o botão de play
        const playBtn = document.createElement('button');
        playBtn.className = 'play-btn';
        playBtn.textContent = 'Play';
        playBtn.onclick = () => tocarMusica(musica.titulo);
        
        // Adiciona todos os elementos ao card
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(artista);
        card.appendChild(playBtn);
        
        // Adiciona o card ao container
        container.appendChild(card);
    });
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