const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('.navbar');
const root = document.querySelector(':root');
        
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    navbar.classList.add('dark-mode');
    root.classList.add('dark-mode');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        root.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');  // Salva o tema escuro
        } else {
        body.classList.remove('dark-mode');
        navbar.classList.remove('dark-mode');
        root.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');  // Salva o tema claro
        }
    });