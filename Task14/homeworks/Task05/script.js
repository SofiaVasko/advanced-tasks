function getModa(numbers) {
  let result = numbers.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  let moda = [];
  for (let i = 0; i < result.length; i++) {
    if (Number.isInteger(result[i])) {
      if (result[i] === result[i + 1]) {
        moda.push(result[i]);
      }
    }
  }
  let modaAll = moda.filter(function (item, index) {
    return moda.indexOf(item) === index;
  });
  if (moda.length === 0) {
    return "Our programm didn`t find a mode";
  }
  return modaAll;
}

console.log(getModa([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));


function getAverage(numbers) {
  let averageResult = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
      averageResult += numbers[i];
    }
  }
  return averageResult/numbers.length;
}

console.log (getAverage([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));

function getMedian(numbers) {
  let result = numbers.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  let firstIndex = Math.floor((result.length-1)/2);
  let secondIndex = Math.ceil((result.length-1)/2);
  if (Number.isInteger(result[0]) && result.length % 2 ===0) {
    let numberFirstValue = result[firstIndex];
    let numberSecondValue = result[secondIndex];
    let numberEven = (numberFirstValue + numberSecondValue)/2;
    return numberEven;
  }
  else if (Number.isInteger(result[0]) && result.length % 2 !==0) {
  let numberNotEven = result[secondIndex];
  return numberNotEven;
  }
  }

console.log(getMedian([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));

function getDividedByFive(numbers) {
  let fiveOnly = numbers.filter(function(item){
  let itemLast = item % 10;
  return (itemLast ===0) || (itemLast ===5);
})
return fiveOnly;
}

console.log(getDividedByFive([6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]));

function replaceBadWords(string) {
  let toSplit = string.split(" ");
  let toReplace = toSplit.map(function(badWords){
  return badWords.replace(new RegExp('shit', 'g'), ('****')).replace(new RegExp('fuck', 'g'), ('****'));
  })
  return toReplace.join(" ");
}

console.log (replaceBadWords("Holy shit! You are fucking."));

function divideByThree(word) {
  let stringThree = []
  for(let i=0; i<word.length; i+=3) {
    stringThree.push(word.substring(i, i+3).toLowerCase().replace(new RegExp(' ', 'g'), ('')))
  }
  return stringThree
}

console.log (divideByThree("Commander"))