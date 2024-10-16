const videosGenetica = [
    {
        titulo: "Introdução à Genética",
        duracao: "7:15",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/ipSpg8IjfaM?si=xsJERTG-JCECOD-z"
    },
    {
        titulo: "O que é o GENE?",
        duracao: "4:40",
        descricao: "Entenda o que é o DNA, sua estrutura e função no organismo.",
        src: "https://www.youtube.com/embed/E6DPIgLqdCo?si=h5t9BB8oYT2wPShP"
    },
    {
        titulo: "Conceitos da Genética",
        duracao: "16:11",
        descricao: "Explore as mutações genéticas e como elas podem afetar os seres vivos.",
        src: "https://www.youtube.com/embed/Mh8jpGeEDLw?si=z3Vft1jMsTXEwW1i"
    },
    {
        titulo: "1° Lei de Mendel de um jeito fácil e bem objetivo",
        duracao: "6:41",
        descricao: "Entenda a 1ª Lei de Mendel: alelos se separam na formação dos gametas.",
        src: "https://www.youtube.com/embed/bxTsEeQ2amE?si=adloyKKq-A0xsiwx"
    },
    {
        titulo: "Mutações Gênicas",
        duracao: "15:41",
        descricao: "Aula sobre mutações gênicas, explorando tipos, causas e efeitos nas características genéticas.",
        src: "https://www.youtube.com/embed/m-9ONfsBSYE?si=qiMn2G-i7CJiSYro"
    },
    {
        titulo: "2° Lei de Mendel",
        duracao: "49:54",
        descricao: "Explicação da 2ª Lei de Mendel: a segregação independente dos alelos.",
        src: "https://www.youtube.com/embed/CVqfMN0ypoQ?si=hO38gTRr76ydMNVE"
    },
    {
        titulo: "Hereditariedade",
        duracao: "10:20",
        descricao: "Explique o conceito de hereditariedade e como características são transmitidas de pais para filhos.",
        src: "https://www.youtube.com/embed/22cQBJv0Cas?si=BDMgPKbTNHoavM9k"
    },
    {
        titulo: "Mapas Genéticos",
        duracao: "10:32",
        descricao: "Introdução aos mapas genéticos e como eles mostram a localização dos genes nos cromossomos.",
        src: "https://www.youtube.com/embed/F6XXUuUYyow?si=PYIIAr-L4A6SoK7R"
    },
    {
        titulo: "Resumão de Genética: Principais Conceitos",
        duracao: "9:44",
        descricao: "Resumo dos principais conceitos de genética.",
        src: "https://www.youtube.com/embed/YjwYJHqxwFY?si=hjA6Df8GvGirdpb4"
    },
];

const videosDNA = [
    {
        titulo: "Oque é DNA?",
        duracao: "4:21",
        descricao: "Entenda o que é DNA e seu papel na herança genética.",
        src: "https://www.youtube.com/embed/yUPy5yh-2jI?si=eK9USp7KtuwFyk47"
    },
    {
        titulo: "Diferenças entre o DNA e RNA",
        duracao: "2:02",
        descricao: "Explore as principais diferenças entre DNA e RNA, incluindo estrutura e funções.",
        src: "https://www.youtube.com/embed/b0cZLgTA7hs?si=Ra35Gi8RLO4CSnhz"
    },
    {
        titulo: "Replicação (Duplicação) do DNA",
        duracao: "21:25",
        descricao: "Descubra o processo de replicação do DNA e como o material genético é duplicado.",
        src: "https://www.youtube.com/embed/Mz63cYySbc4?si=XRgL6Y-NdWMpt7P6"
    },
    {
        titulo: "DNA: Estrutura",
        duracao: "20:34",
        descricao: "Entenda a estrutura do DNA e como suas partes se organizam para formar a molécula genética.",
        src: "https://www.youtube.com/embed/U1AthDBSMBk?si=5TKS9ClcZGc6VKra"
    },
    {
        titulo: "DNA - Estrutura e Função",
        duracao: "16:44",
        descricao: "Explore a estrutura do DNA e descubra suas funções essenciais na genética.",
        src: "https://www.youtube.com/embed/yxm1X__yDRE?si=ikFseWybG8vP0Aiw"
    },
    {
        titulo: "DNA Recombinante - Conceito, Mecanismo e Função",
        duracao: "12:08",
        descricao: "Aprenda sobre DNA recombinante: conceito, mecanismo e funções na biotecnologia.",
        src: "https://www.youtube.com/embed/9w9PYPMB9Fo?si=AJ7TeehhpGCqpzz_"
    },
    {
        titulo: "Detalhes essenciais sobre a estrutura do DNA.",
        duracao: "11:39",
        descricao: "Descubra tudo sobre a estrutura do DNA, incluindo sua organização e composição.",
        src: "https://www.youtube.com/embed/lGG1fJCN-Gg?si=wg_Sg8gDyj8yDi9O"
    },
];

// Atualiza o vídeo com base no índice e categoria (Genética ou DNA)
function atualizarVideo(video, categoria) {
    const iframe = document.querySelector("iframe");
    const tituloVideo = document.querySelector(".titulovideo");
    const duracao = document.querySelector(".duracao");
    const desc = document.querySelector(".desc p");

    iframe.src = categoria[video].src;
    tituloVideo.textContent = categoria[video].titulo;
    duracao.textContent = `Duração: ${categoria[video].duracao}`;
    desc.textContent = categoria[video].descricao;
}

// Adiciona eventos aos botões de Genética
const buttonsGenetica = document.querySelectorAll('details:nth-child(1) button');
buttonsGenetica.forEach(button => {
    button.addEventListener('click', () => {
        const videoIndex = button.getAttribute('data-video-index');
        atualizarVideo(videoIndex, videosGenetica);
    });
});

// Adiciona eventos aos botões de DNA
const buttonsDNA = document.querySelectorAll('details:nth-child(2) button');
buttonsDNA.forEach(button => {
    button.addEventListener('click', () => {
        const videoIndex = button.getAttribute('data-video-index');
        atualizarVideo(videoIndex, videosDNA);
    });
});