let numberN = Number (prompt ("Enter your first number.", "1"));

while (!Number.isInteger (numberN) || numberN == 0) {
    numberN = Number (prompt ("Enter your first number AGAIN, because the previous result is Not a Number (NaN) or you entered 0. This is an invalid number.", "1"));
};

console.log ("Number N: ", numberN);

let numberM = Number (prompt ("Enter your second number.", "2"));

while (!Number.isInteger (numberM) || numberM == 0 || numberM <= numberN) {
    numberM = Number (prompt ("Enter your second number AGAIN, because the previous result is Not a Number (NaN) or you entered 0. This is an invalid number. Also, the second number must be bigger than the first.", "2"));
};

console.log ("Number M: ", numberM);


const isConfirmed = (confirm ("Do you want to include even numbers?"));

let resultGeneral = 0;

let i = numberN;
while (i<=numberM) {
    if (isConfirmed && i % 2 ===0) {
    i++;
    continue;
} else {
    resultGeneral +=i;
}
    i++;
};

document.writeln ("The result: ", resultGeneral);
