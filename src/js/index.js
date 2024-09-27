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
        root.style.setProperty('--back-color-light', '#dbdbdb');
        root.style.setProperty('--border-color-light', '#00238d');
        root.style.setProperty('--text-color-light','#333');
        root.style.setProperty('--container-color-light','#fff');
        root.style.setProperty('--button-color-light','#0056b3');
        root.style.setProperty('--hover-color-light','#004494');
        logo.src = './src/img/vax.png';
    } else {
        root.style.setProperty('--back-color-light', '#121212');
        root.style.setProperty('--border-color-light', '#4e4e4e');
        root.style.setProperty('--text-color-light','#e7e7e7');
        root.style.setProperty('--container-color-light','#252a2f');
        root.style.setProperty('--button-color-light','#7b7b7b');
        root.style.setProperty('--hover-color-light','#494949');
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

/////////////////////////////////////////////

const botaoTrailer = document.querySelector(".loc");
const modal = document.querySelector(".modal");
const botaoFechar = document.querySelector(".fechar-modal");


botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15550.551715386318!2d-38.495503504465134!3d-12.994994538635694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sunidades%20b%C3%A1sicas%20de%20sa%C3%BAde%20em%20salvador!5e0!3m2!1spt-BR!2sbr!4v1726062533436!5m2!1spt-BR!2sbr")
});

botaoFechar.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
});