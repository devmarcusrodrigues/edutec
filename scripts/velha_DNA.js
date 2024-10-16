const palavras = ['adenina', 'citosina', 'guanina', 'timina', 'helice', 'ribossomo', 'replicacao', 'transcricao'];
let palavraEscolhida = '';
let letrasAdivinhadas = [];
let letrasErradas = [];
let erros = 0;
const maxErros = 5;

const containerPalavra = document.getElementById('container-palavra');
const containerLetras = document.getElementById('container-letras');
const mensagem = document.getElementById('mensagem');
const botaoReiniciar = document.getElementById('botao-reiniciar');
const contadorErros = document.getElementById('contador-erros');

// Pop-up quando perder
const popup = document.getElementById('popup');
const mensagemPopup = document.getElementById('mensagem-popup');
const fecharPopup = document.querySelector('.fechar');

// Pop-up de regras
const popupRegras = document.getElementById('popup-regras');
const botaoRegras = document.getElementById('botao-regras');
const fecharRegras = document.querySelector('#popup-regras .fechar');

// Dicas
const dicas = {
    adenina: "Uma das quatro bases nitrogenadas do DNA, representada pela letra A.",
    citosina: "Base nitrogenada do DNA, representada pela letra C.",
    guanina: "Base nitrogenada do DNA, representada pela letra G.",
    timina: "Base nitrogenada do DNA, representada pela letra T.",
    helice: "Estrutura em espiral do DNA.",
    ribossomo: "Ciência dos genesEstrutura celular onde ocorre a síntese de proteínas, usando informações do RNA mensageiro.",
    replicacao: "Cópia do DNA.",
    transcricao: "Processo de copiar informação do DNA para RNA."
};


// iniciar o jogo
function iniciarJogo() {
    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    letrasAdivinhadas = [];
    letrasErradas = [];
    erros = 0;
    contadorErros.textContent = erros;
    mensagem.textContent = '';
    atualizarPalavra();
    criarBotoesLetras();
}

// atualizar a palavra quando necessário
function atualizarPalavra() {
    const palavraDisplay = palavraEscolhida
        .split('')
        .map(letra => (letrasAdivinhadas.includes(letra) ? letra : '_'))
        .join(' ');
    containerPalavra.textContent = palavraDisplay;

    if (!palavraDisplay.includes('_')) {
        exibirPopup('Você venceu!');
        desabilitarBotoesLetras();
    }
}

// botoes
function criarBotoesLetras() {
    containerLetras.innerHTML = '';
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');

    alfabeto.forEach(letra => {
        const botao = document.createElement('button');
        botao.textContent = letra;
        botao.addEventListener('click', () => verificarLetra(letra, botao));
        containerLetras.appendChild(botao);
    });
}

// verificar letras
function verificarLetra(letra, botao) {
    botao.disabled = true; // não permitir a letra se errada
    if (palavraEscolhida.includes(letra)) {
        letrasAdivinhadas.push(letra);
        atualizarPalavra();
    } else {
        erros++;
        contadorErros.textContent = erros;
        letrasErradas.push(letra);
        if (erros === maxErros) {
            exibirPopup(`Você perdeu! A palavra era: "${palavraEscolhida}"`);
            desabilitarBotoesLetras();
        }
    }
}

// aparição do popup
function exibirPopup(mensagem) {
    mensagemPopup.textContent = mensagem;
    popup.style.display = 'block';
}

fecharPopup.onclick = function() {
    popup.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
}

// mostrar a dica
function mostrarDica() {
    const dica = dicas[palavraEscolhida];
    if (dica) {
        exibirPopup(`Dica: ${dica}`);
    } else {
        exibirPopup("Dica não disponível.");
    }
}

// exibir o popup de regras
function mostrarRegras() {
    popupRegras.style.display = 'block';
}

// fechar o popup de regras
fecharRegras.onclick = function() {
    popupRegras.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === popupRegras) {
        popupRegras.style.display = 'none';
    }
}

function desabilitarBotoesLetras() {
    const botoes = containerLetras.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.disabled = true;
    });
}

function confirmarVoltarInicio() {
    if (confirm("Tem certeza de que deseja voltar ao início? Todos os dados serão perdidos.")) {
        window.location.href = "../../pages/quiz.html"; // Mude este link para o URL da página inicial
    }
}

// Atualização para prevenir o comportamento padrão do link "Voltar ao Início"
document.getElementById('botao-voltar').addEventListener('click', function(event) {
    event.preventDefault(); // Impede a navegação padrão do link
    confirmarVoltarInicio(); // Executa a função de confirmação
});

// Atualização para adicionar a mesma função de confirmação à logo
document.querySelector('.assunto_icone a').addEventListener('click', function(event) {
    event.preventDefault(); // Impede a navegação padrão do link
    if (confirm("Tem certeza de que deseja voltar ao início? Todos os dados serão perdidos.")) {
        window.location.href = "../../pages/quiz.html"; // Mude este link para o URL da página inicial
    }
});

botaoReiniciar.addEventListener('click', iniciarJogo);
document.getElementById('botao-dica').addEventListener('click', mostrarDica);
botaoRegras.addEventListener('click', mostrarRegras);

iniciarJogo();
