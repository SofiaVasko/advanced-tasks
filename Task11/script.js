async function getRandomChinese(_length = 5) {
  let chineseSymbol = "";
  for (let i = 0; i < _length; i++) {
    await new Promise((resolve) => setTimeout(resolve, _length * 50));
    chineseSymbol += String.fromCharCode(
      Number(String(Date.now()).slice(-5)) + i
    );
  }
  return chineseSymbol;
}

getRandomChinese(10).then((response) =>
  console.log(`Your random chinese symbols: ${response}`)
);