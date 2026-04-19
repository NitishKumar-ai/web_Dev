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


// challane 
function discount(price, pact = 10, currency = '$') {
    return  `${formatedPrice} after ${pact}% off`;
}

console.log(discount);

// == Rest and sprad

function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3, 4, 5));

function logInfo(first, second, ...other) {
    console.log("First", first);
    console.log("Second", Second);
    console.log("Other", other);
    
}
logInfo("a", "b", "c", "d", "e");

// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [6, 7, 8];
const combined = [...arr1, arr2];
console.log(finalSettings);console.log('\n==== 3. Default parameters ===');
function createProfile(name, role = "User", active = true) {
    return {name, role, active};
}
console.log(createProfile('Priya'));
console.log(createProfile("Rahul", "Admin"));
console.log(createProfile('Dev', "Moderator", false));

// Default that calls a function
function generateId() {
    return Math.floor(Math.random() * 1000);
}

function createTicket(title, id = generateId()) {
    return { id, title };
}
console.log(createTicket("Login bug"));

// challenge
function discount(price, pct = 10, currency = '$') {
    const finalPrice = price - (price * pct / 100);
    return `${currency}${finalPrice} after ${pct}% off`;
}
console.log(discount(1000));

// == Rest and spread

function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3, 4, 5));

function logInfo(first, second, ...other) {
    console.log("First", first);
    console.log("Second", second);
    console.log("Other", other);
}
logInfo("a", "b", "c", "d", "e");

// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [6, 7, 8];
const combined = [...arr1, ...arr2, ...arr3];
console.log(combined);

// spread objets (shallow copy)
const defaluts = { theme: 'dark', lnag: "eng", notifiancaiton: true}
const userPrefs = {lang: "te", notifiancaiton: false}
const finalSettings = {...defaluts, ...userPrefs};
console.log(finalSettings);

// spread to copy arry (not refrence)
const original = [1, 3, 4,]
const copy = [...original];
copy.push(4);
console.log("original:", original); // [1, 3 , 4]
console.log("copy", copy);  

// -- map --
const inventory = new Map();
inventory.set("apple", 50)
inventory.set("banana", 30)
inventory.set("mango", 20)
console.log(inventory.get("apple"));
console.log(inventory.size);
console.log(inventory.has("grapes"));

// iterrating map
for (const [item, qty] of inventory) {
    console.log(`${item}: ${qty}`);   
}
// map from array of pairs
const phoneBook = new Map([
    ["alice", "43535434536"],
    ['deepak', "5745845824"]
])
console.log([...phoneBook.keys()]);
console.log(([...phoneBook.values()]));

// --set
const uniqueTags = new Set(['js', 'nod', 'js', 'react', 'node', 'ts']);
console.log(uniqueTags);
console.log(uniqueTags.size); 

// remove deupicates
const nums = [1, 2, 3, 3, 4];
const unique = [...new Set(nums)];
console.log(unique); // [1, 2, 3, 4]

// set operations
const setA = new Set([1, 2, 34, 5])
const setB = new Set([3, 4, 5, 6]);
const union = new Set(...setA, setB);
const intersection = new Set([...setA].filter(x => setB.has(x)));
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("union:", [...union]);
console.log("Intersection:", [...intersection]);
console.log("Diffrence:", [...difference]);



// weakMap: keys must be objets; not interble; allow GC
const cache = new WeakMap();
function processUser(userObj) {
    if (cache.has(userObj)); {
        console.log("from cache:", cache.get(userObj));
        return cache.get(userObj)
        
    }

}


const u1 = {name: "sita"};
console.log(processUser(u1)); // computed 
console.log(processUser(u1)); // cache

// weakSet: stor obejts, check membership, no iteration
const visited = new WeakSet();
function visit(page) {
    if (visited.has(page)) {
        console.log((`Already visited: ${page.url}`));
        
    }
}

const page1 = {url: "/hone"};
const page2 = {url: "/about"};
visit(page1);
visit(page2);
visit(page1); // already visited

// in real code, user improt/export with  .mjs or blunder
// here we simulate module patterns:
// named export patter

const mathUtils = (() => {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a -b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => (b ! == 0 ? a /b : " cannot divided by  zero")
})

const {add, multiply} = mathUtils;
console.log(add(5,3));
console.log(multiply(3, 7)); 

// deafalut export 
