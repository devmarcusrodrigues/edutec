const backToTopButton = document.getElementById('backToTop');

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Seleciona os elementos necessários
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

// Quando o botão for clicado, exibe o pop-up
openPopupBtn.addEventListener('click', function(event) {
    popup.style.display = 'block'; // Exibe o pop-up
    event.stopPropagation(); // Impede que o clique feche o pop-up
});

// Quando o "X" for clicado, esconde o pop-up
closePopupBtn.addEventListener('click', function() {
    popup.style.display = 'none'; // Esconde o pop-up
});

// Quando clicar fora do pop-up, ele fecha
window.addEventListener('click', function(event) {
    if (event.target !== openPopupBtn && !popup.contains(event.target)) {
        popup.style.display = 'none';
    }
});
