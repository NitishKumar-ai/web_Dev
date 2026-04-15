// Uncomment the Challange blocks and solve them

console.log("\n==== 1. Destructring =====");


// arrays Destructing ---
const colours = ['red', 'green', 'blue', 'yellow']
const [first, Second, ...rest] = colours
console.log(first);
console.log(Second);
console.log(rest);

// Swaping varibles
let a = 1, b = 2;
[a, b] = [b, a];
console.log(`a${a}, b=${b}`);

// --- objests Destructuring ---
const user = {name: "Arjun", age:25, city: "Benagaluru"};
const {name, age, city = "Unknown"} = user;
console.log(name, age, city);

// Renaming while destructuring ---
const {name: fullName, age : year } = user
console.log(fullName, year);

// nested destructyuring 
const order = {id:1, product: {title: "Laptop", price: 75000}}
const {product: {title, price}} = order;
console.log(title, price);
// Fucnctions parameter destructuring 
function greet({name, age}) {
    console.log(`HI ${name}, your age is ${age} years old.`);
}
greet(user)

// challange
const nums = [10, 20, 30, 40, 50];
const [first1, second, third, fourth, ...rests] = nums
console.log(second);
console.log(fourth);

