function getMaxDigit (number) {
let numberToSplit = String (number).split('');
let numberElem;
numberElem = Math.max (...numberToSplit);
return Number (numberElem);
}


function findLetter (name) {
    let bigLetter = name[0].toUpperCase();
    let smallLetters = name.slice(1).toLowerCase();
    return bigLetter + smallLetters;
}

export { findLetter }

function sum (tax1, tax2 = 0, sum) {
    let taxCash = tax1 + tax2;
    let sumCash = sum / 100 * taxCash;
    let sumGeneral = sum - sumCash;
    return sumGeneral;
}


function getRandomPassword (length=8) {
    let randomPassword = 0;
    for (let i = 0; i < length; i++) {
       randomPassword = randomPassword * 10 + Math.floor(Math.random() * 10);
    }

    return randomPassword;
}


function deleteLetters (name, element) {
    let deleteElement = name.replace (new RegExp (element, "g"), (""));
    return deleteElement;
}


function convertCurrency (usd, uah) {
    let usdCash = Number (usd.replace("$", ""));
    let uahCash = Number (uah.replace("UAH", ""));
    let usdCurrency;
    let uahCurrency;
    if (usd.endsWith('$')) {
        usdCurrency = usdCash * 36.57;
    } else { 
        console.log ("Uncorrect currency. Only USD.");
    } if (uah.endsWith('UAH')) {
        uahCurrency = uahCash * 0.03;
    } else {
        console.log ("Uncorrect currency. Only UAH.");
    }
    return ['USD/UAH: ', usdCurrency, 'UAH/USD: ', uahCurrency];
}

console.log(getMaxDigit (123456789909876543));
console.log(findLetter ("gOOd MORNING, guys!"));
console.log(sum (18, 1.2, 25000));
console.log(getRandomPassword (12));
console.log(deleteLetters ("Ішов Прокіп, кипів окріп, прийшов Прокіп — кипить окріп, як при Прокопі, так і при Прокопі і при Прокопенятах.", "к"));
console.log(convertCurrency ( "2000$", "2000UAH"));