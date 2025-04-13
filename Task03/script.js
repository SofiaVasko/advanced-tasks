function getMaxDigit(number) {
  let string = String(number);
  let maxNumber = Number(string[0]);

  for (let i = 0; i < string.length; i++) {
    if (Number(string[i]) > maxNumber) {
      maxNumber = Number(string[i]);
    }
  }
  return maxNumber;
}

function getMinDigit(number) {
  let array = String(number).split("");
  let minDigit = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minDigit) {
      minDigit = array[i];
    }
  }
  return minDigit;
}

function getPow(number, step) {
  let generalResult = 1;
  for (let i = 0; i < step; i++) {
    generalResult *= number;
  }
  return generalResult;
}

function getCase(name) {
  let nameLower = name.toLowerCase();
  let slice = nameLower.slice(1);
  let generalCase = nameLower[0].toUpperCase();
  return generalCase.concat(slice);
}

function getName(name) {
  let nameLower = name.toLowerCase();
  return nameLower.replace(nameLower[0], nameLower[0].toUpperCase());
}

function getTax(sum, tax1, tax2) {
  let tax = tax1 + tax2;
  return sum - (sum / 100) * tax;
}

function getRandom(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
}

function getCount(word, letter) {
  return (word.match(new RegExp(letter, "gi")) || []).length;
}

function getCurrency(cash) {
  let uah;
  let dollar;
  if (cash[cash.length - 1] == "$") {
    uah = +cash.slice(0, cash.length - 1) * 40;
    return `${uah}UAH`;
  } else if (cash[cash.length - 1] == "H") {
    dollar = +cash.replace("UAH", "") / 40;
    return `${dollar}\$`;
  }
  return `Invalid currency format. Only $ or UAH.`;
}

function getRandomPassword(_length = 8) {
  let randomPassword = "";
  const numbers = "0123456789";

  for (let i = 0; i < _length; i++) {
    randomPassword += numbers.charAt(
      Math.floor(Math.random() * numbers.length)
    );
  }
  return randomPassword;
}

function deleteLetters(letter, word) {
  return word.replace(new RegExp(letter, "gi"), "");
}

function isPalindrom(word) {
  let cleanedWord = word.toLowerCase().replace(new RegExp(/\s+/, "g"), "");
  let palindrom = true;

  for (let i = 0; i < cleanedWord.length / 2; i++) {
    if (
      cleanedWord.charAt(i) !== cleanedWord.charAt(cleanedWord.length - 1 - i)
    ) {
      palindrom = false;
      break;
    }
  }
  return palindrom;
}

function deleteDuplicateLetters(word) {
  let cleanedWord = word.toLowerCase().replace(new RegExp(/\s+/, "g"), "");
  let newWord = "";

  for (let i = 0; i < cleanedWord.length; i++) {
    let letter = cleanedWord[i];

    if (newWord.indexOf(letter) === -1) {
      newWord += letter;
    }
  }
  return newWord;
}

document.writeln(`Function 1 "getMaxDigit": ${getMaxDigit(65432918)}`);
document.writeln(`<br>Function 1 "getMinDigit": ${getMinDigit(65432918)}`);
document.writeln(`<br>Function 2 "getPow": ${getPow(5, 5)}`);
document.writeln(`<br>Function 3 "getCase": ${getCase("PRIkOlcHIK")}`);
document.writeln(`<br>Function 3 "getCase"/other way: ${getName("stiopka")}`);
document.writeln(`<br>Function 4 "getTax": ${getTax(1000, 18, 1.5)}`);
document.writeln(`<br>Function 5 "getRandom": ${getRandom(1, 10)}`);
document.writeln(`<br>Function 6 "getCount": ${getCount("Софіко", "о")}`);
document.writeln(`<br>Function 7 and 8 "getCurrency": ${getCurrency("3000$")}`);
document.writeln(`<br>Function 9 "getRandomPassword": ${getRandomPassword()}`);
document.writeln(
  `<br>Function 10 "deleteLetters": ${deleteLetters(
    "b",
    "BLABLABLAblablababay. Shut your bloody"
  )}`
);
document.writeln(
  `<br>Function 11 "isPalindrom": ${isPalindrom("Я Н ЕсУ ГусЕня")}`
);
document.writeln(
  `<br>Function 12 "deleteDuplicateLetters": ${deleteDuplicateLetters(
    "Бісквіт був дуже ніжним"
  )}`
);
