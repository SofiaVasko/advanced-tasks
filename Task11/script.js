function getRandomChinese(length) {
  return new Promise((resolve, reject) => {
    let result = "";
    const delay = length * 50;

    const generateChinese = (num) => {
      const chineseCode = Date.now();
      num = chineseCode % Math.pow(10, length);
      result += String.fromCharCode(num);
      if (result.length < length) {
        setTimeout(generateChinese, delay);
      } else {
        resolve(result);
      }
    };
    setTimeout(generateChinese, delay);
  });
}

getRandomChinese(4)
  .then((result) => {
    console.log(result);
  });