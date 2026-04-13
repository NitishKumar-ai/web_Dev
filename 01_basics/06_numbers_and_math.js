const score = 500;
const balance = new Number(100)
const otherNumber = 123.654654
const hundreds = 1000000


console.table({
    socre: typeof score,
    balance: typeof balance,
    balance: balance.toString().length,
    balance: balance.toFixed(1),
    hundreds: hundreds.toLocaleString("en-IN")

});
// Maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(4.2);
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 8));
console.log(Math.min(0, 0, 0));

console.log(Math.random());
console.log(Math.random()*10);
