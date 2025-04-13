const numbers = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
const numbersEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersNegative = [-1, 2, 3, -4, 5, -6];

function getRandomArray(length, min, max) {
  let randomArray = [];

  for (let i = 0; i < length; i++) {
    //classic way
    randomArray.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return randomArray;
}

function receiveRandomArray(length, min, max) {
  //modern way
  return new Array(length)
    .fill()
    .map(() => Math.floor(Math.random() * (max - min + 1) + min));
}

function getMedian(...numbers) {
  let filteredArray = numbers.filter((item) => Number.isInteger(item));
  let sortArray = filteredArray.sort((a, b) => a - b);
  let findMedian = Math.floor(sortArray.length / 2);
  if (sortArray.length % 2 !== 0) {
    return sortArray[findMedian];
  } else {
    return (sortArray[findMedian - 1] + sortArray[findMedian]) / 2;
  }
}

function getAverage(...numbers) {
  let numbersWithIntegerOnly = numbers.filter((item) => Number.isInteger(item));
  let sum = numbersWithIntegerOnly.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  let result = sum / numbersWithIntegerOnly.length;
  return result.toFixed(1);
}

function filterEvenNumbers(...numbers) {
  return numbers.filter((item) => item % 2 === 0);
}

function countPositiveNumbers(...numbers) {
  return numbers.filter((item) => item > 0).length;
}

function getDividedByFive(...numbers) {
  return numbers.filter((item) => item % 5 === 0);
}

function replaceBadWord(string) {
  let badWords = /shit|fuck/gi;
  return string.replace(badWords, "****");
}

function divideByThree(word) {
  //classic way
  let array = word.replace(/\s+/g, "").toLowerCase();
  let arrayByThree = [];

  for (let i = 0; i < array.length; i += 3) {
    arrayByThree.push(array.slice(i, i + 3));
  }

  return arrayByThree;
}

function splitByThree(word) {
  //modern way
  let array = word.replace(/\s+/g, "").toLowerCase().split("");
  return array.reduce((previousValue, currentValue, index) => {
    if (index % 3 === 0) previousValue.push("");
    previousValue[previousValue.length - 1] += currentValue;
    return previousValue;
  }, []);
}

function generateCombination(word) {
  //without all possible combinations
  let combinateWords = new Array(word.length)
    .fill()
    .map(() => word.charAt(Math.floor(Math.random() * word.length)));

  let allCombinations = combinateWords.reduce(
    (previousValue, currentValue, index) => {
      if (index % word.length === 0) previousValue.push("");
      previousValue[previousValue.length - 1] += currentValue;
      return previousValue;
    },
    []
  );

  return allCombinations;
}

function generateCombinations(word) {
  let result = [];

  function generateRandom(element, string) {
    if (string.length === 0) {
      result.push(element);
    } else {
      for (let i = 0; i < string.length; i++) {
        generateRandom(
          element + string[i],
          string.slice(0, i) + string.slice(i + 1)
        );
      }
    }
  }
  generateRandom("", word);
  return result;
}

document.writeln(
  `Function 1 "getRandomArray"(classic way): ${getRandomArray(15, 1, 100)}`
);
document.writeln(
  `<br>Function 1 "getRandomArray"(modern way): ${receiveRandomArray(
    15,
    1,
    100
  )}`
);
document.writeln(`<br>Function 2 "getAverage": ${getAverage(...numbers)}`);
document.writeln(`<br>Function 3 "getMedian": ${getMedian(...numbers)}`);
document.writeln(
  `<br>Function 4 "filterEvenNumbers": ${filterEvenNumbers(...numbersEven)}`
);
document.writeln(
  `<br>Function 5 "countPositiveNumbers": ${countPositiveNumbers(
    ...numbersNegative
  )}`
);
document.writeln(
  `<br>Function 6 "getDividedByFive": ${getDividedByFive(...numbers)}`
);
document.writeln(
  `<br>Function 7 "replaceBadWord": ${replaceBadWord(
    "Are you fucking kidding? Holy shit. Bull shit. Fucking step."
  )}`
);
document.writeln(
  `<br>Function 8 "divideByThree"(classic way): ${divideByThree(
    "He y so fiko nice to meet you sofiko"
  )}`
);
document.writeln(
  `<br>Function 8 "splitByThree"(modern way): ${splitByThree(
    "Commander Emergency W a r WAR"
  )}`
);
document.writeln(
  `<br>Function 9 "generateCombination"(another way): ${generateCombination(
    "Sofia"
  )}`
);
document.writeln(
  `<br>Function 9 "generateCombinations"(the best way): ${generateCombinations(
    "sofa"
  )}`
);
