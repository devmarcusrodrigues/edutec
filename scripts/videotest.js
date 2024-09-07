
const videos = [
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/ipSpg8IjfaM?si=xsJERTG-JCECOD-z"
    },
    {
        titulo: "O que é o DNA?",
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
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/bxTsEeQ2amE?si=adloyKKq-A0xsiwx"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/m-9ONfsBSYE?si=qiMn2G-i7CJiSYro"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/CVqfMN0ypoQ?si=hO38gTRr76ydMNVE"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/22cQBJv0Cas?si=BDMgPKbTNHoavM9k"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/F6XXUuUYyow?si=PYIIAr-L4A6SoK7R"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/YjwYJHqxwFY?si=hjA6Df8GvGirdpb4"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/yUPy5yh-2jI?si=eK9USp7KtuwFyk47"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/b0cZLgTA7hs?si=Ra35Gi8RLO4CSnhz"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/Mz63cYySbc4?si=XRgL6Y-NdWMpt7P6"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/U1AthDBSMBk?si=5TKS9ClcZGc6VKra"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/yxm1X__yDRE?si=ikFseWybG8vP0Aiw"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/9w9PYPMB9Fo?si=AJ7TeehhpGCqpzz_"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/lGG1fJCN-Gg?si=wg_Sg8gDyj8yDi9O"
    },
    {
        titulo: "Introdução à Genética",
        duracao: "10:05",
        descricao: "Este vídeo apresenta os conceitos básicos de genética, incluindo genes e hereditariedade.",
        src: "https://www.youtube.com/embed/lGG1fJCN-Gg?si=P3KbcFLXq6lCqv_A"
    }
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