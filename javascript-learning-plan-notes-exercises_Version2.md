# JavaScript Learning File (Notes + MDN Links + Practice Snippets)
Date: 2026-04-19

> How to practice: copy each **Practice Snippet** into `practice.js` (or browser console), run it, then complete the TODOs.

---

## 0) Setup (recommended)
Create a file `practice.js` and paste snippets one by one.

Optional helper:
```js
const section = (title) => console.log(`\n=== ${title} ===`);
```

---

# 1) Object Destructuring + JSON API

## MDN
- Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- JSON: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

## Practice Snippet 1A — Basic & nested destructuring
```js
section("1A — Destructuring");

const person = {
  name: "Nitish",
  age: 21,
  address: { city: "Delhi", pin: 110001 },
  skills: ["js", "html", "css"],
};

// TODO 1: destructure name and age
// TODO 2: destructure city from address
// TODO 3: destructure first skill as primarySkill

// Your code here:

console.log({ /* name, age, city, primarySkill */ });
```

## Practice Snippet 1B — Defaults + renaming
```js
section("1B — Defaults & renaming");

const settings = { theme: "dark" };

// TODO 1: get theme
// TODO 2: get fontSize with default 16
// TODO 3: rename theme to uiTheme

// Your code here:

console.log({ /* theme, fontSize, uiTheme */ });
```

## Practice Snippet 1C — JSON parse/stringify transform
```js
section("1C — JSON");

const productJson =
  '{"id":101,"title":"  Laptop  ","price":"999.99","meta":{"brand":"ACME"}}';

// TODO 1: parse JSON to object
// TODO 2: trim title, convert price to number
// TODO 3: add inStock:true
// TODO 4: stringify back to JSON

// Your code here:

console.log("normalized object =", /* normalized object */);
console.log("back to json =", /* json string */);
```

## Mini-challenge 1 — API cleanup
```js
section("Mini 1 — API cleanup");

const products = [
  { id: 1, title: "Phone", price: 499, rating: 4.2, stock: 10 },
  { id: 2, title: "Laptop", price: 999, rating: 4.6, stock: 3 },
  { id: 3, title: "Mouse", price: 25, rating: 4.1, stock: 100 },
];

// TODO: return [{id,title,price}] using destructuring + map
function cleanProducts(list) {
  // your code
}

console.log(cleanProducts(products));
```

---

# 2) Functions and Parameters

## MDN
- Functions guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- Rest params: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

## Practice Snippet 2A — Rest params + reduce
```js
section("2A — sum & average");

function sum(...nums) {
  // TODO: implement
}

function average(...nums) {
  // TODO: return 0 if no nums
}

console.log("sum(1,2,3) =", sum(1, 2, 3));          // 6
console.log("average(2,4,6) =", average(2, 4, 6));  // 4
console.log("average() =", average());              // 0
```

## Practice Snippet 2B — Defaults + early return
```js
section("2B — clamp");

function clamp(n, min = 0, max = 100) {
  // TODO: implement
}

console.log(clamp(10, 0, 5));   // 5
console.log(clamp(-1, 0, 5));   // 0
console.log(clamp(3, 0, 5));    // 3
console.log(clamp(120));        // 100
```

## Mini-challenge 2 — calculateTotal
```js
section("Mini 2 — calculateTotal");

function calculateTotal(price, taxRate = 0.18, ...discounts) {
  // discounts are numbers like 10 meaning 10%
  // TODO:
  // 1) add tax: taxed = price + price*taxRate
  // 2) apply each discount sequentially (10 => multiply by 0.9)
  // 3) return final number rounded to 2 decimals
}

console.log(calculateTotal(100));              // (100 + 18%) = 118.00
console.log(calculateTotal(100, 0.18, 10));    // 118 then 10% off => 106.20
console.log(calculateTotal(100, 0.18, 10, 5)); // apply 10% then 5%
```

---

# 3) Functions With Objects

## MDN
- Spread syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

## Practice Snippet 3A — Options object + destructuring in params
```js
section("3A — options object");

function formatUser({ name, age = 0, city = "NA" }) {
  // TODO: return "Name (age) - city"
}

console.log(formatUser({ name: "Nitish", age: 21, city: "Delhi" }));
console.log(formatUser({ name: "A" })); // defaults
```

## Practice Snippet 3B — Avoid mutation
```js
section("3B — updateUser (no mutation)");

const user = { id: 1, name: "Nitish", role: "user" };

function updateUser(original, patch) {
  // TODO: return a NEW object
}

const updated = updateUser(user, { role: "admin" });

console.log("original =", user);
console.log("updated  =", updated);
// TODO: confirm original.role is still "user"
```

## Mini-challenge 3 — Cart totals
```js
section("Mini 3 — cart totals");

const cart = {
  items: [
    { title: "Phone", price: 500, qty: 1 },
    { title: "Case", price: 20, qty: 2 },
  ],
  coupon: { type: "percent", value: 10 }, // 10% off
};

function cartTotals({ items, coupon }) {
  // TODO:
  // subtotal = sum(price*qty)
  // discount = based on coupon
  // total = subtotal - discount
  // return { subtotal, discount, total }
}

console.log(cartTotals(cart));
```

---

# 4) Global & Local Scope

## MDN
- Scope glossary: https://developer.mozilla.org/en-US/docs/Glossary/Scope
- let: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- const: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

## Practice Snippet 4A — Block scope
```js
section("4A — block scope");

{
  let x = 10;
  const y = 20;
  console.log("inside block", x, y);
}

// TODO: uncomment and observe error
// console.log("outside block", x, y);
```

## Mini-challenge 4 — No globals counter
```js
section("Mini 4 — counter with private state");

function makeCounter() {
  // TODO: private variable count
  // return { inc, dec, value }
}

const c = makeCounter();
c.inc();
c.inc();
c.dec();
console.log(c.value()); // should print 1
```

---

# 5) Hoisting / TDZ

## MDN
- Hoisting: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

## Practice Snippet 5A — Predict then run
```js
section("5A — hoisting");

// Predict outputs BEFORE running.

console.log("var a before =", a); // TODO: what is it?
var a = 1;
console.log("var a after  =", a);

// TODO: uncomment and see TDZ behavior
// console.log("let b before =", b);
let b = 2;
console.log("let b after  =", b);

hello(); // TODO: why this works?
function hello() {
  console.log("hello!");
}

// TODO: uncomment and see difference
// hi();
// const hi = function () { console.log("hi"); };
```

## Mini-challenge 5 — Refactor to avoid hoisting surprises
```js
section("Mini 5 — refactor");

// Goal: rewrite to be safe and clear (no relying on hoisting).
// You can rewrite variables to const/let and move declarations.

function run() {
  console.log(message);
  var message = "ok";
  return message;
}

console.log(run());
```

---

# 6) `this` and Arrow Functions

## MDN
- this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
- Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- bind: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

## Practice Snippet 6A — Method vs arrow
```js
section("6A — this basics");

const obj = {
  name: "Nitish",
  normal() {
    return this.name;
  },
  arrow: () => {
    return this?.name; // likely undefined
  },
};

console.log("normal =", obj.normal()); // "Nitish"
console.log("arrow  =", obj.arrow());  // ?
```

## Practice Snippet 6B — Losing this in callbacks (fix with bind)
```js
section("6B — bind fix");

const timer = {
  seconds: 0,
  tick() {
    this.seconds++;
  },
};

const tickFn = timer.tick;
// TODO: tickFn() will not update timer.seconds correctly.
// Fix it using bind:
const boundTick = null; // TODO

boundTick();
boundTick();
console.log("seconds =", timer.seconds); // should be 2
```

## Mini-challenge 6 — Auto increment without breaking `this`
```js
section("Mini 6 — auto counter");

const counter = {
  value: 0,
  inc() {
    this.value++;
  },
  start(ms = 50) {
    // TODO: call inc repeatedly using setInterval
    // return stop() function that clears interval
  },
};

const stop = counter.start(10);
setTimeout(() => {
  stop();
  console.log("final value =", counter.value); // should be > 0
}, 100);
```

---

# 7) IIFE + JS behind the scenes (call stack)

## MDN
- IIFE (pattern): https://developer.mozilla.org/en-US/docs/Glossary/IIFE

## Practice Snippet 7A — IIFE “module”
```js
section("7A — IIFE module");

const mathModule = (function () {
  // private:
  const secret = 42;

  function add(a, b) {
    return a + b;
  }

  // TODO: expose only what you want
  return {
    add,
    // revealSecret: () => secret, // optional
  };
})();

console.log(mathModule.add(2, 3)); // 5
// console.log(mathModule.secret); // should be undefined
```

## Practice Snippet 7B — Call stack tracing
```js
section("7B — call stack");

function a() {
  console.log("in a");
  b();
}
function b() {
  console.log("in b");
  c();
}
function c() {
  console.log("in c");
}

a();
// TODO: write the order of execution: a -> b -> c
```

---

# 8) Control Flow in JavaScript

## MDN
- if...else: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
- switch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

## Practice Snippet 8A — Guard clauses
```js
section("8A — guard clauses");

function validateAge(age) {
  // TODO:
  // - if age is not a number -> return "invalid"
  // - if age < 18 -> return "minor"
  // - else -> return "adult"
}

console.log(validateAge("x")); // invalid
console.log(validateAge(10));  // minor
console.log(validateAge(21));  // adult
```

## Mini-challenge 8 — Form validation
```js
section("Mini 8 — validate form");

function validateForm({ email, password, age }) {
  // TODO: return { ok: boolean, errors: string[] }
  // checks:
  // - email includes "@"
  // - password length >= 8
  // - age >= 18
}

console.log(validateForm({ email: "a@b.com", password: "12345678", age: 20 }));
console.log(validateForm({ email: "ab.com", password: "123", age: 10 }));
```

---

# 9) Loops: for, while, do...while + break/continue

## MDN
- for: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
- while: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

## Practice Snippet 9A — break/continue
```js
section("9A — break/continue");

const nums = [2, -1, 4, 0, 7, 9];

// TODO:
// - skip negatives (continue)
// - stop entirely when you see 0 (break)
// - sum only the processed positives before 0
let total = 0;

for (const n of nums) {
  // your code
}

console.log("total =", total); // should be 2 + 4 = 6
```

## Mini-challenge 9 — findFirstPrime (no .find)
```js
section("Mini 9 — findFirstPrime");

function isPrime(n) {
  // TODO: implement basic prime check
}

function findFirstPrime(arr) {
  // TODO: loop, return first prime or null
}

console.log(findFirstPrime([4, 8, 9, 10, 11, 12])); // 11
console.log(findFirstPrime([1, 4, 6]));             // null
```

---

# 10) Higher-order array methods

## MDN
- Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Practice Snippet 10A — pick the right method
```js
section("10A — array methods");

const users = [
  { id: 1, name: "A", role: "user", verified: true },
  { id: 2, name: "B", role: "admin", verified: false },
  { id: 3, name: "C", role: "user", verified: true },
];

// TODO 1: map -> get names array
// TODO 2: filter -> only verified users
// TODO 3: some -> is there any admin?
// TODO 4: every -> are all verified?

// your code here:
```

---

# 11) filter / map / reduce (deep practice)

## MDN
- reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Practice Snippet 11A — cart total with reduce
```js
section("11A — reduce totals");

const items = [
  { title: "Phone", price: 500, qty: 1 },
  { title: "Case", price: 20, qty: 2 },
];

const subtotal = null; // TODO: reduce
console.log("subtotal =", subtotal); // 540
```

## Practice Snippet 11B — frequency map (reduce)
```js
section("11B �� frequency map");

const words = ["js", "css", "js", "html", "js", "css"];

const freq = null; // TODO: {js:3, css:2, html:1}
console.log(freq);
```

## Mini-challenge 11 — mini analytics
```js
section("Mini 11 — analytics");

const orders = [
  { id: 1, category: "phone", product: "P1", qty: 2, price: 500 },
  { id: 2, category: "laptop", product: "L1", qty: 1, price: 1000 },
  { id: 3, category: "phone", product: "P1", qty: 1, price: 500 },
  { id: 4, category: "accessory", product: "A1", qty: 3, price: 20 },
];

// TODO:
// 1) totalRevenue
// 2) revenueByCategory (object)
// 3) topProductByQty (string)

function analytics(list) {
  // your code
}

console.log(analytics(orders));
```

---

# 12) Capstone (combine everything)

## Capstone Project — Student Results Dashboard (console)
```js
section("Capstone — student dashboard");

const students = [
  { name: "A", isPresent: true, marks: { math: 90, eng: 80, sci: 70 } },
  { name: "B", isPresent: false, marks: { math: 60, eng: 55, sci: 40 } },
  { name: "C", isPresent: true, marks: { math: 75, eng: 88, sci: 92 } },
];

// TODO:
// - filter present students
// - map into {name, total, avg, grade}
// - reduce to classAverage
// Grade rules: avg >= 90 A, >= 80 B, >= 70 C, else F

function buildReport(list) {
  // your code
}

console.log(buildReport(students));
```

---

## If you want, I can also:
- generate an **answer key** (solutions) in a separate file, or
- turn this into a **7-day schedule** with “what to do each day”.