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