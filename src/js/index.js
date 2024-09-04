document.addEventListener('scroll', function() {
    const image = document.getElementById('zoom-image');
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const zoomLevel = 1 - scrollPercentage * 0.03;
    image.style.transform = `scale(${zoomLevel})`;
});

document.addEventListener("DOMContentLoaded", function() {
    const botaoList = document.getElementById("list");
    const menuNav = document.querySelector(".cabecalho nav");

    botaoList.addEventListener("click", function() {
        if (menuNav.style.display === "flex") {
            menuNav.style.display = "none";
        } else {
            menuNav.style.display = "flex";
        }
    });
});

const toggleButton = document.getElementById('dark-mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const logo = document.querySelector('.logo');

toggleButton.addEventListener('click', () => {
    const root = document.documentElement;

    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        root.style.setProperty('--back-color-light', '#ffff');
        root.style.setProperty('--primary-color-light', '#191c53');
        root.style.setProperty('--secondary-color-light', '#002cb1');
        root.style.setProperty('--border-color-light', '#00238d');
        root.style.setProperty('--bg-color-light', '#ffffff00');
        logo.src = './src/img/vax.png';
    } else {
        root.style.setProperty('--back-color-light', '#121212');
        root.style.setProperty('--primary-color-light', '#2d2d2d');
        root.style.setProperty('--secondary-color-light', '#717171');
        root.style.setProperty('--border-color-light', '#4e4e4e');
        root.style.setProperty('--bg-color-light', '#a9a9a936');
        logo.src = './src/img/vax2.png';
    }

    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('dark-mode')) {
        modeIcon.src = './src/icone/sol.png';
        modeIcon.alt = 'Modo Escuro';
    } else {
        modeIcon.src = './src/icone/lua.png';
        modeIcon.alt = 'Modo Claro';
    }
});

document.body.classList.add('light-mode');
