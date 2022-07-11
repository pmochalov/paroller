const rangeCurrent = document.querySelector("#rangeCurrent");
const rangeMinus = document.querySelector("#rangeMinus");
const rangePlus = document.querySelector("#rangePlus");

const buttonsOptions = document.querySelector('.form__row_options').children;
const optionUppercase = document.querySelector("#optionUppercase");
const optionLowercase = document.querySelector("#optionLowercase");
const optionNumbers = document.querySelector("#optionNumbers");
const optionSymbols = document.querySelector("#optionSymbols");

const buttonGenerate = document.querySelector('#buttonGenerate');
const result = document.querySelector('.form__row_password');
const output = document.querySelector('.form__password');

const config = {
    start: 3,
    end: 20,
    current: 8
};

const options = {
    uppercase: false,
    lowercase: true,
    numbers: true,
    symbols: false
};

const strings = {
    uppercase: "ABCDEFGHIGKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: `!"#$%&'()*+,-./:;<=>?@[\]^_{|}`
};

setFormState();

// Клик по "-"
rangeMinus.addEventListener('click', function () {
    config.current = config.current - 1;
    rangeCurrent.textContent = config.current;

    setRange();
})

// Клик по "+"
rangePlus.addEventListener('click', function () {
    config.current = config.current + 1;
    rangeCurrent.textContent = config.current;

    setRange();
});

optionUppercase.onclick = setOptionState.bind(this, optionUppercase);
optionLowercase.onclick = setOptionState.bind(this, optionLowercase);
optionNumbers.onclick = setOptionState.bind(this, optionNumbers);
optionSymbols.onclick = setOptionState.bind(this, optionSymbols);
buttonGenerate.onclick = passGenerate;

rangeCurrent.textContent = config.current;

optionUppercase.checked = options.uppercase;
optionLowercase.checked = options.lowercase;
optionNumbers.checked = options.numbers;
optionSymbols.checked = options.symbols;

// Установка состояния формы
function setFormState() {
    let checkedCounter = 0;
    for (let button of buttonsOptions) {
        let key = button.dataset.option;
        if (options[key]) {
            button.classList.add('button_checked');
            checkedCounter++;
        } else {
            button.classList.remove('button_checked');
        }
    }

    buttonGenerate.disabled = checkedCounter == 0 ? true : false;
}

// Установка селектора длины пароля
function setRange() {
    rangeMinus.disabled = (config.current == config.start) ? true : false;
    rangePlus.disabled = (config.current == config.end) ? true : false;
}

// Установка опции
function setOptionState(el) {
    let key = el.dataset.option;
    options[key] = !options[key];
    setFormState();
}

// Получить количество выбранных опций
function getCheckedCounter() {
    let counter = 0;

    for (let key in options) {
        if (options[key]) counter++;
    }

    return counter;
}

// Генерация пароля
function passGenerate() {
    let stringSrc = '';
    let password = ''

    for (let key in options) {
        if (options[key]) {
            stringSrc += strings[key];
        }
    }

    if (stringSrc.length == 0) return;

    for (let i = 0; i < config.current; i++) {
        password += stringSrc[getRandomInt(0, stringSrc.length - 1)]
    }

    output.textContent = password;
    result.style.display = "block";
}

// Случайное число в диапазоне min - max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min);
}