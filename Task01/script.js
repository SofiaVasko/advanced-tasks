let socks_price = 15.678;
let jacket_price = 123.965;
let dress_price = 90.2345;

let max_price = Math.max(socks_price, jacket_price, dress_price);
console.log(max_price);

let min_price = Math.min(socks_price, jacket_price, dress_price);
console.log(min_price);

let sum_price = socks_price + jacket_price + dress_price;
console.log(sum_price);

let sum_floor =
  Math.floor(socks_price) + Math.floor(jacket_price) + Math.floor(dress_price);
console.log(sum_floor);

function hundred_return(price) {
  return Math.ceil(price / 100) * 100;
}

console.log(hundred_return(socks_price));
console.log(hundred_return(jacket_price));
console.log(hundred_return(dress_price));

let sum_type = Math.floor(socks_price + jacket_price + dress_price);

if (sum_type % 2 === 0) {
  console.log("It's an even number");
} else {
  console.log("It's an uneven number");
}

function tax_price(price) {
  return price - (socks_price + jacket_price + dress_price);
}

console.log(tax_price(500));

let average_price = Number(
  ((socks_price + jacket_price + dress_price) / 2).toFixed(2)
);
console.log(average_price);

let discount = Math.round((10 - 0) * Math.random());
console.log(discount);

function tax_discount(sum, discount) {
  let sum_discount = (sum / 100) * discount;
  return Number((sum - sum_discount).toFixed(2));
}
console.log(tax_discount(500, discount));

let sum;
let result_tax = tax_discount(sum, discount);

function cost_discount(sum, result_tax) {
  let cost = sum / 2;
  return result_tax - cost;
}

console.log(cost_discount(500, discount));

let general_string = `Max price: ${max_price}, Min price: ${min_price}, Sum: ${sum_price}, Sum with Math.floor: ${sum_floor}, Price (socks) with hundred: ${hundred_return(
  socks_price
)}, Price (jacket) with hundred: ${hundred_return(
  jacket_price
)}, Price (dress) with hundred: ${hundred_return(dress_price)}, Sum type: ${
  sum_type % 2 === 0 ? "It's an even number" : "It's an uneven number"
}, Tax price: ${tax_price(
  500
)}, Average price: ${average_price}, Discount: ${discount}%, Sum with discount: ${tax_discount(
  500,
  discount
)}, Cost with discount: ${cost_discount(500, discount)}`;
console.log(general_string);
document.writeln(general_string);
