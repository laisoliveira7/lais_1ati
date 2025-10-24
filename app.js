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
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273365b3fb800c19f7ff72602da"
    },
    {
        titulo: "Shape of You",
        artista: "Ed Sheeran",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
    },
    {
        titulo: "Garota de Ipanema",
        artista: "Tom Jobim",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f"
    },
    {
        titulo: "Evidências",
        artista: "Chitãozinho & Xororó",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273e11b94d2bda6c6f3068b873c"
    },
    {
        titulo: "Smooth Criminal",
        artista: "Michael Jackson",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97"
    },
    {
        titulo: "Anunciação",
        artista: "Alceu Valença",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273f9e8956b0df218e6785fe856"
    },
    {
        titulo: "Cheia de Manias",
        artista: "Raça Negra",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273a8dee4eec15ad4b7aa3cd742"
    },
    {
        titulo: "Malvadão 3",
        artista: "Xamã",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273f579764510b47d9e4e12db99"
    },
    {
        titulo: "Love of My Life",
        artista: "Queen",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0"
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