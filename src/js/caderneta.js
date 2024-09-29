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

////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const addFormButton = document.getElementById('add-form-button');
    const formsContainer = document.querySelector('.forms');
    let isEditable = true;

    // Eventos para o formulário inicial
    initializeFormEvents(form);

    // Adicionar novo formulário ao clicar no botão "Adicionar"
    addFormButton.addEventListener('click', function (event) {
        event.preventDefault();
        addNewForm();
    });

    // Função para inicializar eventos de botões de edição e submissão de cada formulário
    function initializeFormEvents(formElement) {
        const submitButton = formElement.querySelector('.submit-button');
        const editButton = formElement.querySelector('.edit-button');
        const deleteButton = formElement.querySelector('.delete-button');

        submitButton.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do botão
            toggleInputs(formElement, false);
            isEditable = false;
        });

        editButton.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do botão
            toggleInputs(formElement, !isEditable);
            isEditable = !isEditable;
        });

        deleteButton.addEventListener('click', function (event) {
            event.preventDefault(); // Previne o comportamento padrão do botão
            if (formElement !== form) {
                formElement.remove(); // Remove o formulário atual, exceto o original
            }
        });
    }

    // Função para adicionar um novo formulário
    function addNewForm() {
        const newForm = form.cloneNode(true); // Clona o formulário original
        toggleInputs(newForm, true); // Habilita os inputs do novo formulário
        formsContainer.appendChild(newForm); // Adiciona o novo formulário ao contêiner

        initializeFormEvents(newForm); // Inicializa os eventos para o novo formulário
    }

    // Função para habilitar ou desabilitar campos de entrada
    function toggleInputs(formElement, enable) {
        const inputs = formElement.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.disabled = !enable; // Desabilita ou habilita conforme o valor de enable
            if (enable) input.value = ''; // Limpa os valores dos campos ao habilitar
        });
    }
});
