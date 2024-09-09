const chaveApi = 'SUA_CHAVE_API'; // Insira aqui a sua chave da API

function consultarCPF(cpf, dataNascimento) {
    const url = `https://api.infosimples.com.br/v2/consulta-cpf?cpf=${cpf}&birthdate=${dataNascimento}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${chaveApi}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            let nomeCompleto = data.nome;
            let primeiroNome = nomeCompleto.split(" ")[0];
            document.getElementById('nome-usuario').textContent = `Bem-vindo, ${primeiroNome}`;
        } else {
            console.log('Erro na consulta: ', data.message);
        }
    })
    .catch(error => {
        console.log('Erro na requisição: ', error);
    });
}
consultarCPF('12345678900', '01/01/1980');


////////////////////////////////

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length > 11) cpf = cpf.substring(0, 11);
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    return resto === parseInt(cpf.substring(10, 11));
}

document.getElementById('cpf').addEventListener('input', function(event) {
    event.target.value = formatarCPF(event.target.value);
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cpfInput = document.getElementById('cpf');
    const cpf = cpfInput.value;
    const spanMessage = document.getElementById('cpf-error-message');

    if (!validarCPF(cpf)) {
        if (!spanMessage) {
            const errorSpan = document.createElement('span');
            errorSpan.id = 'cpf-error-message';
            errorSpan.style.color = 'red';
            errorSpan.textContent = 'CPF inválido. Por favor, tente novamente.';
            cpfInput.parentNode.appendChild(errorSpan);
        }
    } else {
        if (spanMessage) {
            spanMessage.remove();
        }

        this.submit();
    }
});


////////////////////////////////

const toggleButton = document.getElementById('dark-mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    const logo = document.querySelector('.logo');

    toggleButton.addEventListener('click', () => {
      const root = document.documentElement;

      const isDarkMode = document.body.classList.contains('dark-mode');

      if (isDarkMode) {
        root.style.setProperty('--back-color-light', 'white');
        root.style.setProperty('--text-color-light','#333');
        root.style.setProperty('--button-color-light','#0056b3');
        root.style.setProperty('--hover-color-light','#004494');
        root.style.setProperty('--light-mode-bg','#66666640');
        logo.src = './src/img/vax.png';
      } else {
        root.style.setProperty('--back-color-light', '#252a2f');
        root.style.setProperty('--text-color-light','#e7e7e7');
        root.style.setProperty('--button-color-light','#7b7b7b');
        root.style.setProperty('--hover-color-light','#494949');
        root.style.setProperty('--light-mode-bg','#00000066');
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