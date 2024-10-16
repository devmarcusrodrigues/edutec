const videos = [
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


