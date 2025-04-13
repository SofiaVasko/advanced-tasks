const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};

const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921,
};

const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114,
};

function getMyTaxes(salary) {
  return +(this.tax * salary).toFixed(0);
}

console.log(getMyTaxes.call(ukraine, 2000));

function getMiddleTaxes() {
  return +(this.tax * this.middleSalary).toFixed(0);
}

console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes() {
  return +(this.tax * this.middleSalary * this.vacancies).toFixed(0);
}

console.log(getTotalTaxes.call(ukraine));

function getMySalary() {
  let salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
  let taxes = +(this.tax * salary).toFixed(0);

  return {
    salary: salary,
    taxes: taxes,
    profit: salary - taxes,
  };
}

let intervalID = setInterval(() => {
  console.log(getMySalary.call(ukraine));
}, 2000);

setTimeout(() => {
  clearInterval(intervalID);
}, 8000);
