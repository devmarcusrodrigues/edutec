const palavras = ['genesync', 'genomica', 'mendel', 'dna', 'genes', 'genetica', 'replicacao', 'transcricao'];
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

// dps do fim do jogo, desabilitar todos os botões
function desabilitarBotoesLetras() {
    const botoes = containerLetras.querySelectorAll('button');
    botoes.forEach(botao => {
        botao.disabled = true;
    });
}

botaoReiniciar.addEventListener('click', iniciarJogo);

iniciarJogo();
