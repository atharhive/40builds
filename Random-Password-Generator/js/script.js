const generatedPasswordSpan = document.getElementById('generatedPassword');
const passwordLengthInput = document.getElementById('passwordLength');
const includeUppercaseCheckbox = document.getElementById('includeUppercase');
const includeLowercaseCheckbox = document.getElementById('includeLowercase');
const includeNumbersCheckbox = document.getElementById('includeNumbers');
const includeSymbolsCheckbox = document.getElementById('includeSymbols');
const excludeAmbiguousCheckbox = document.getElementById('excludeAmbiguous');
const generatePasswordButton = document.getElementById('generatePasswordBtn');
const copyToClipboardButton = document.getElementById('copyToClipboard');

const randomCharFunctions = {
    lower: getRandomLowercase,
    upper: getRandomUppercase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

// Function to show a toast notification (new feature)
function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast-notification');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

copyToClipboardButton.addEventListener('click', () => {
    const password = generatedPasswordSpan.innerText;
    if (!password) {
        showToast('No password to copy!');
        return;
    }
    navigator.clipboard.writeText(password);
    showToast('Password copied to clipboard!');
});

generatePasswordButton.addEventListener('click', () => {
    const length = +passwordLengthInput.value;
    const hasLower = includeLowercaseCheckbox.checked;
    const hasUpper = includeUppercaseCheckbox.checked;
    const hasNumber = includeNumbersCheckbox.checked;
    const hasSymbol = includeSymbolsCheckbox.checked;
    const excludeAmbiguous = excludeAmbiguousCheckbox.checked;

    generatedPasswordSpan.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length,
        excludeAmbiguous
    );
});

function generatePassword(lower, upper, number, symbol, length, excludeAmbiguous) {
    let generatedPassword = '';
    const typesArr = [];

    if (lower) typesArr.push(randomCharFunctions.lower);
    if (upper) typesArr.push(randomCharFunctions.upper);
    if (number) typesArr.push(randomCharFunctions.number);
    if (symbol) typesArr.push(randomCharFunctions.symbol);

    if (typesArr.length === 0) {
        return '';
    }

    for (let i = 0; i < length; i++) {
        const randomTypeFunc = typesArr[Math.floor(Math.random() * typesArr.length)];
        let char = randomTypeFunc();

        if (excludeAmbiguous) {
            // Remove ambiguous characters (e.g., l, 1, O, 0, I)
            while ('l1O0I'.includes(char)) {
                char = randomTypeFunc();
            }
        }
        generatedPassword += char;
    }

    return generatedPassword.slice(0, length);
}

function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.-_+';
    return symbols[Math.floor(Math.random() * symbols.length)];
}