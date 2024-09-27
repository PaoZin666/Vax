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

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('.submit-button');
    const editButton = document.querySelector('.edit-button');
    let isEditable = true;

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();

        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.disabled = true;
        });

        addNewForm();

        isEditable = false;
    });

    editButton.addEventListener('click', function(event) {
        event.preventDefault();

        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.disabled = !isEditable;
        });

        isEditable = !isEditable;
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const addFormButton = document.getElementById('add-form-button');
    const formsContainer = document.querySelector('.forms');
    let isEditable = true;

    addFormButton.addEventListener('click', function(event) {
        event.preventDefault();

        addNewForm();
    });

    function addNewForm() {
        const newForm = form.cloneNode(true);

        const inputs = newForm.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.disabled = false;
            input.value = '';
        });

        formsContainer.appendChild(newForm);
    }
});
