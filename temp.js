// ============================================================
//  DAY 1 — Modern JavaScript ES6+
//  Run each section with: node day1-modern-js.js
//  Uncomment the CHALLENGE blocks and solve them!
// ============================================================

console.log("\n===== 1. DESTRUCTURING =====");

// --- Array Destructuring ---
const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...rest] = colors;
console.log(first);   // "red"
console.log(second);  // "green"
console.log(rest);    // ["blue", "yellow"]

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(`a=${a}, b=${b}`); // a=2, b=1

// --- Object Destructuring ---
const user = { name: "Arjun", age: 25, city: "Bengaluru" };
const { name, age, city = "Unknown" } = user;
console.log(name, age, city);

// Renaming while destructuring
const { name: fullName, age: years } = user;
console.log(fullName, years);

// Nested destructuring
const order = { id: 1, product: { title: "Laptop", price: 75000 } };
const { product: { title, price } } = order;
console.log(title, price);

// Function parameter destructuring
function greet({ name, age }) {
  console.log(`Hi ${name}, you are ${age} years old.`);
}
greet(user);

/* CHALLENGE 1:
   Destructure this array to get only the 2nd and 4th elements:
   const nums = [10, 20, 30, 40, 50];
   Expected: second = 20, fourth = 40
*/


// ============================================================
console.log("\n===== 2. TEMPLATE LITERALS =====");

const product = "iPhone 16";
const discount = 10;
const originalPrice = 80000;

// Multi-line + expression
const message = `
  Product: ${product}
  Original Price: ₹${originalPrice}
  Discount: ${discount}%
  Final Price: ₹${originalPrice - (originalPrice * discount) / 100}
`;
console.log(message);

// Tagged template literal
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =>
    result + str + (values[i] !== undefined ? `[${values[i]}]` : ""), "");
}
const item = "Mango";
const qty = 3;
console.log(highlight`I want ${qty} units of ${item}`);

/* CHALLENGE 2:
   Write a tagged template that converts all interpolated numbers
   to Indian currency format (e.g. 75000 → ₹75,000):
   tagFn`Price is ${75000} and discount is ${5000}`
   Expected: "Price is ₹75,000 and discount is ₹5,000"
*/


// ============================================================
console.log("\n===== 3. DEFAULT PARAMETERS =====");

function createProfile(name, role = "User", active = true) {
  return { name, role, active };
}
console.log(createProfile("Priya"));
console.log(createProfile("Rahul", "Admin"));
console.log(createProfile("Dev", "Moderator", false));

// Default that calls a function
function generateId() {
  return Math.floor(Math.random() * 1000);
}
function createTicket(issue, id = generateId()) {
  return { id, issue };
}
console.log(createTicket("Login bug"));

/* CHALLENGE 3:
   Write a function `discount(price, pct = 10, currency = "₹")`
   that returns a formatted string: "₹72,000 after 10% off"
*/


// ============================================================
console.log("\n===== 4. REST & SPREAD =====");

// Rest in functions
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

function logInfo(first, second, ...others) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Rest:", others);
}
logInfo("a", "b", "c", "d", "e");

// Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// Spread with objects (shallow clone + override)
const defaults = { theme: "dark", lang: "en", notifications: true };
const userPrefs = { lang: "te", notifications: false };
const finalSettings = { ...defaults, ...userPrefs };
console.log(finalSettings);

// Spread to copy array (not reference)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("original:", original); // [1,2,3] — untouched
console.log("copy:", copy);         // [1,2,3,4]

/* CHALLENGE 4:
   Write a function `mergeUsers(...users)` that merges all user
   objects into one. Later keys override earlier ones.
*/


// ============================================================
console.log("\n===== 5. MAPS & SETS =====");

// --- Map ---
const inventory = new Map();
inventory.set("apple", 50);
inventory.set("banana", 30);
inventory.set("mango", 20);

console.log(inventory.get("apple")); // 50
console.log(inventory.size);        // 3
console.log(inventory.has("grapes")); // false

// Iterating Map
for (const [item, qty] of inventory) {
  console.log(`${item}: ${qty}`);
}

// Map from array of pairs
const phoneBook = new Map([
  ["Alice", "9876543210"],
  ["Bob",   "9123456789"],
]);
console.log([...phoneBook.keys()]);
console.log([...phoneBook.values()]);

// --- Set ---
const uniqueTags = new Set(["js", "node", "js", "react", "node", "ts"]);
console.log(uniqueTags);      // Set(4) {"js", "node", "react", "ts"}
console.log(uniqueTags.size); // 4

// Remove duplicates from array using Set
const nums = [1, 2, 2, 3, 3, 3, 4];
const unique = [...new Set(nums)];
console.log(unique); // [1,2,3,4]

// Set operations
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const union        = new Set([...setA, ...setB]);
const intersection = new Set([...setA].filter(x => setB.has(x)));
const difference   = new Set([...setA].filter(x => !setB.has(x)));
console.log("Union:", [...union]);
console.log("Intersection:", [...intersection]);
console.log("Difference:", [...difference]);

/* CHALLENGE 5:
   Given an array of orders with duplicate product names,
   use Map to count how many times each product was ordered:
   const orders = ["apple","banana","apple","mango","banana","apple"];
   Expected: Map { apple → 3, banana → 2, mango → 1 }
*/


// ============================================================
console.log("\n===== 6. WEAKMAP & WEAKSET =====");

// WeakMap: keys must be objects; not iterable; allows GC
const cache = new WeakMap();
function processUser(userObj) {
  if (cache.has(userObj)) {
    console.log("From cache:", cache.get(userObj));
    return cache.get(userObj);
  }
  const result = { processed: true, name: userObj.name.toUpperCase() };
  cache.set(userObj, result);
  return result;
}
const u1 = { name: "sita" };
console.log(processUser(u1)); // computed
console.log(processUser(u1)); // from cache

// WeakSet: store objects, check membership, no iteration
const visited = new WeakSet();
function visit(page) {
  if (visited.has(page)) {
    console.log(`Already visited: ${page.url}`);
    return;
  }
  visited.add(page);
  console.log(`Visiting: ${page.url}`);
}
const page1 = { url: "/home" };
const page2 = { url: "/about" };
visit(page1);
visit(page2);
visit(page1); // already visited


// ============================================================
console.log("\n===== 7. ES6 MODULES (simulated) =====");
// In real code, use import/export with .mjs or bundler.
// Here we simulate module patterns:

// Named exports pattern
const mathUtils = (() => {
  const add      = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide   = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
  return { add, subtract, multiply, divide };
})();

const { add, multiply } = mathUtils;
console.log(add(5, 3));      // 8
console.log(multiply(4, 7)); // 28

// Default export pattern
const createLogger = (prefix) => ({
  log:   (msg) => console.log(`[${prefix}] ${msg}`),
  error: (msg) => console.error(`[${prefix}] ERROR: ${msg}`),
  warn:  (msg) => console.warn(`[${prefix}] WARN: ${msg}`),
});
const logger = createLogger("APP");
logger.log("Module loaded");
logger.warn("Deprecated API used");

/* CHALLENGE 6:
   Create a "stringUtils" module object with methods:
   - capitalize(str)     → "hello" → "Hello"
   - truncate(str, n)    → "Hello World", 7 → "Hello W..."
   - countWords(str)     → "Hello World JS" → 3
*/

console.log("\n✅ Day 1 complete! Uncomment and solve the CHALLENGES above.");