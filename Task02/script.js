let number_n = Number(prompt("Enter your number 'N': ", 1));

while (!Number.isInteger(number_n) || number_n == 0) {
  number_n = Number(
    prompt(
      "Enter your number 'N' again, the previous input was not an integer or was zero. Type again:",
      1
    )
  );
}
document.writeln(`Number N: ${number_n}`);

let number_m = Number(prompt("Enter your number 'M': ", 2));

while (!Number.isInteger(number_m) || number_m == 0 || number_m <= number_n) {
  number_m = Number(
    prompt(
      "Enter your number 'M' again, the previous number was not an integer, was zero, or should not be less than the first number N. Type again:",
      2
    )
  );
}
document.writeln(`Number M: ${number_m}`);

let is_confirmed = confirm("Do you want to skip even numbers?");

let sum_nm = 0;
let i = number_n;

while (i <= number_m) {
  if (is_confirmed && i % 2 === 0) {
    i++;
    continue;
  } else {
    sum_nm += i;
  }
  i++;
}
document.writeln(`General result: ${sum_nm}`);
