
const videos = [
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/ipSpg8IjfaM?si=xsJERTG-JCECOD-z"
    },
    {
        titulo: "O que é o GENE?",
        duracao: "12:30",
        descricao: "Entenda o que é o DNA, sua estrutura e função no organismo.",
        src: "https://www.youtube.com/embed/E6DPIgLqdCo?si=h5t9BB8oYT2wPShP"
    },
    {
        titulo: "Mutação Genética",
        duracao: "8:45",
        descricao: "Explore as mutações genéticas e como elas podem afetar os seres vivos.",
        src: "https://www.youtube.com/embed/Mh8jpGeEDLw?si=z3Vft1jMsTXEwW1i"
    },
    {
        titulo: "1° Lei de Mendel de um jeito fácil e bem objetivo.",
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

let videoIndex = 0;

// func p atualizar os vid - NAO MEXER PELO AMOR
function atualizarVideo() {
    const iframe = document.querySelector("iframe");
    const tituloVideo = document.querySelector(".titulovideo");
    const duracao = document.querySelector(".duracao");
    const desc = document.querySelector(".desc p");

    iframe.src = videos[videoIndex].src;
    tituloVideo.textContent = videos[videoIndex].titulo;
    duracao.textContent = `Duração: ${videos[videoIndex].duracao}`;
    desc.textContent = videos[videoIndex].descricao;
}

// inicia o site com o primeiro vid
document.addEventListener("DOMContentLoaded", atualizarVideo);

// prox vid
document.querySelector(".proximo").addEventListener("click", () => {
    if (videoIndex < videos.length - 1) {
        videoIndex++;
        atualizarVideo();
    }
});

// vid anterior
document.querySelector(".anterior").addEventListener("click", () => {
    if (videoIndex > 0) {
        videoIndex--;
        atualizarVideo();
    }
});

// botões 

const buttons = document.querySelectorAll('.btn');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Itera sobre todos os botões e remove a classe 'active'
        buttons.forEach(btn => btn.classList.remove('active'));

        // Adiciona a classe 'active' ao botão que foi clicado
        button.classList.add('active');
    });
});


