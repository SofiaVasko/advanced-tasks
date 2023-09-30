let first_price=15.678;
let second_price=123.965;
let third_price=90.2345;
console.log("First: ",first_price)
console.log("Second: ",second_price)
console.log("Third: ",third_price)

console.log("Max: ",Math.max(first_price, second_price, third_price), "Min: ", Math.min(first_price, second_price, third_price))

console.log("Sum: ",first_price + second_price + third_price)

console.log(Math.floor(first_price), Math.floor(second_price), Math.floor(third_price))

console.log("Without penny: ", Math.floor(first_price + second_price + third_price))

function Result(val) {
    return Math.floor(val / 100) * 100;
}
console.log(Result(229));

export { Result }

const result=Math.floor(first_price) + Math.floor(second_price) + Math.floor(third_price);
const type= Boolean (result % 2)
console.log(type);

console.log("Balance: ",(first_price + second_price + third_price)-500)

let general_price = Number(((first_price + second_price + third_price)/3).toFixed(2))
console.log("General price: ",general_price)