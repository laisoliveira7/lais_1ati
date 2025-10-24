/*
// Copilot, o que é um array de objetos e como posso acessar cada item?
// R: Um array de objetos é uma estrutura de dados que armazena múltiplos objetos
// em uma lista. Cada objeto pode ter várias propriedades. Por exemplo:
// musicas[0].titulo acessa o título da primeira música
// musicas[1].artista acessa o artista da segunda música
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
    }
];

/*
// Copilot, o que o método forEach faz e como o innerHTML está sendo usado?
// R: O método forEach percorre cada item do array 'musicas' e executa uma função
// para cada música. O innerHTML está sendo usado para inserir o HTML gerado
// dentro do elemento 'lista-de-musicas'. Esta é uma forma eficiente de adicionar
// vários elementos de uma vez, mas requer cuidado com a sanitização dos dados.
*/

function carregarMusicas() {
    const container = document.getElementById('lista-de-musicas');
    
    const musicasHTML = musicas.map(musica => `
        <div class="musica-card">
            <img src="${musica.capaUrl}" alt="Capa de ${musica.titulo}">
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
            <button onclick="alert('Tocando: ${musica.titulo}')">Play</button>
        </div>
    `).join('');
    
    container.innerHTML = musicasHTML;
}

// Carrega as músicas quando a página terminar de carregar
/*
// Copilot, por que adicionamos um event listener para 'DOMContentLoaded'?
// R: O event listener 'DOMContentLoaded' garante que nosso código só será executado
// após o DOM (estrutura HTML) estar completamente carregado. Isso evita erros de
// tentar manipular elementos que ainda não existem na página.
*/
document.addEventListener('DOMContentLoaded', carregarMusicas);