let currentYear = new Date().getFullYear();
const monthsNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const today = new Date();

const yearDisplay = document.getElementById('yearDisplay');
const prevYearButton = document.getElementById('prevYear');
const nextYearButton = document.getElementById('nextYear');
const calendarGrid = document.getElementById('calendarGrid');

let selectedVaccine = '';
let selectedDayElement = null;

// Objeto para armazenar as datas de cada vacina
const vaccineDates = {
    covid: null,
    h1n1: null,
};

const covidBtn = document.getElementById('covid-btn');
const h1n1Btn = document.getElementById('h1n1-btn');

// Função utilitária para aplicar temas
function applyTheme(colors) {
    const root = document.documentElement;
    Object.keys(colors).forEach(key => {
        root.style.setProperty(`--${key}`, colors[key]);
    });
}

// Função para atualizar o calendário
function updateYearDisplay() {
    yearDisplay.textContent = currentYear;
    generateCalendar();
}

// Limitar a seleção de anos anteriores
prevYearButton.addEventListener('click', () => {
    if (currentYear > today.getFullYear()) {
        currentYear--;
        updateYearDisplay();
    }
});

nextYearButton.addEventListener('click', () => {
    currentYear++;
    updateYearDisplay();
});

// Função para gerar o calendário
function generateCalendar() {
    calendarGrid.innerHTML = '';
    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.classList.add('month');

        const monthTitle = document.createElement('div');
        monthTitle.classList.add('month-title');
        monthTitle.textContent = monthsNames[month];
        monthDiv.appendChild(monthTitle);

        const weekdaysDiv = document.createElement('div');
        weekdaysDiv.classList.add('weekdays');
        daysOfWeek.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            weekdaysDiv.appendChild(dayDiv);
        });
        monthDiv.appendChild(weekdaysDiv);

        const daysDiv = document.createElement('div');
        daysDiv.classList.add('days');

        const firstDay = new Date(currentYear, month, 1).getDay();
        const daysInMonth = new Date(currentYear, month + 1, 0).getDate();

        // Adicionar botões vazios para os dias antes do início do mês
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('button');
            emptyDiv.classList.add('day', 'disabled');
            daysDiv.appendChild(emptyDiv);
        }

        // Adicionar botões para os dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            const dayButton = document.createElement('button');
            dayButton.classList.add('day');
            dayButton.textContent = day;

            const selectedDate = new Date(currentYear, month, day);

            // Desabilitar datas anteriores à data atual
            if (selectedDate < today) {
                dayButton.classList.add('disabled');
                dayButton.disabled = true;
            } else {
                // Marcar a data já selecionada para a vacina corrente
                if (isSelectedDate(day, month, selectedVaccine)) {
                    dayButton.classList.add('selected');
                    selectedDayElement = dayButton;
                }

                dayButton.addEventListener('click', () => handleDayClick(dayButton, day, month));
            }
            daysDiv.appendChild(dayButton);
        }

        monthDiv.appendChild(daysDiv);
        calendarGrid.appendChild(monthDiv);
    }
}

// Função para verificar se o dia e mês correspondem à data selecionada para a vacina atual
function isSelectedDate(day, month, vaccine) {
    const selectedDate = vaccineDates[vaccine];
    if (!selectedDate) return false;
    
    const [selectedDay, selectedMonth, selectedYear] = selectedDate;
    return selectedDay === day && selectedMonth === month && selectedYear === currentYear;
}

// Função para lidar com o clique nos dias
function handleDayClick(dayButton, day, month) {
    if (selectedDayElement) {
        selectedDayElement.classList.remove('selected');
    }
    dayButton.classList.add('selected');
    selectedDayElement = dayButton;

    // Armazenar a data dependendo da vacina selecionada
    vaccineDates[selectedVaccine] = [day, month, currentYear];
    
    const selectedDate = `${day} de ${monthsNames[month]} de ${currentYear}`;
    alert(`Vacinação ${selectedVaccine.toUpperCase()} marcada para: ${selectedDate}`);
}

updateYearDisplay();


// Aplicar tema ao selecionar vacina
covidBtn.addEventListener('click', () => {
    selectedVaccine = 'covid';
    updateYearDisplay(); // Atualizar o calendário para mostrar a data de COVID
});

h1n1Btn.addEventListener('click', () => {
    selectedVaccine = 'h1n1';
    updateYearDisplay(); // Atualizar o calendário para mostrar a data da h1n1
});

// Alternar modo escuro/claro
const toggleButton = document.getElementById('dark-mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const logo = document.querySelector('.logo');

toggleButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    const root = document.documentElement;
    const isDarkMode = document.body.classList.contains('dark-mode');

    const lightTheme = {
        'body-color-light': '#dbdbdb',
        'back-color-light': '#a3a3a37d',
        'border-color-light': '#00238d',
        'text-color-light': '#333',
        'secondtext-color-light': '#e7e7e7',
        'container-color-light': '#fff',
        'month-color-light': '#ffffff',
        'button-color-light': '#0056b3',
        'hover-color-light': '#004494'
    };

    const darkTheme = {
        'back-color-light': '#121212',
        'back-color-light': '#252424',
        'border-color-light': '#4e4e4e',
        'text-color-light': '#e7e7e7',
        'secondtext-color-light': '#fff',
        'container-color-light': '#252a2f',
        'month-color-light': '#818181',
        'button-color-light': '#7b7b7b',
        'hover-color-light': '#494949'
    };

    applyTheme(isDarkMode ? lightTheme : darkTheme);
    logo.src = isDarkMode ? './src/img/vax.png' : './src/img/vax2.png';

    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    modeIcon.src = isDarkMode ? './src/icone/lua.png' : './src/icone/sol.png';
    modeIcon.alt = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
}

document.body.classList.add('light-mode');