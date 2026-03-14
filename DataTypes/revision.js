let age = 23;
const name = "Nitish";
var isStudent = true;
let emptyValue = null;
let notAssigned;
let bigNumber = 445454584458421211251455444444;
let uniqueID = Symbol("ID");
console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof emptyValue);
console.log(typeof bigNumber);
console.log(typeof notAssigned);
console.log(typeof uniqueID);

let price = 99.5;
let city = "jaipur";
let message = `Hello, ${name}`
console.log(message);
console.log(city.length);
console.log(city.toLocaleLowerCase);
console.log(city.toLocaleUpperCase);
console.log(city.slice(0 , 3));
console.log(city.includes("pur"));
console.log(Number("123"));
console.log(String(465));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("chai"));

let fruits = ["apple", "banana", "grapes",]
console.log(Array.isArray);
console.log(fruits[0]);
console.log(fruits.length);
fruits.push("Pineapple")
fruits.pop(2);
fruits.unshift();
console.log(fruits);
fruits.shift();
console.log(fruits);

let studnet = {name: "nitish", age: 21, marks: 88}
console.log(typeof studnet);
console.log(studnet.name);
console.log(studnet['marks']);
studnet.city = "Banglore";
delete studnet.age;
console.log(studnet);

let number = [10, 3 , 0.2 , 5,]
console.log(number);
let doubled = number.map(num => num * 20);
console.log(doubled);
let filterd = doubled.filter(num => num > 20);
console.log(filterd);
console.log(typeof filterd);
let found = number.find(num => num === 30);
console.log(typeof found);
console.log(found);
number.forEach(num => console.log(num));

function add(a ,b) {
    return a + b
}
console.log(add(5, 7));
function checkValue(vlaue) {
    return typeof vlaue;
};

console.log(checkValue(1233));
console.log(checkValue("abc"));
console.log(checkValue(true));
console.log(checkValue(false));
let mixed = [1, "chia", true, null, undefined, {x: 1}, [2, 3]]
console.log(mixed);
console.log(typeof mixed);
console.log(typeof mixed[0]);
console.log(typeof mixed[1]);
console.log(typeof mixed[2]);
console.log(typeof mixed[3]);
console.log(typeof mixed[4]);
console.log(typeof mixed[5]);
console.log(typeof mixed[6]);
console.log(Array.isArray(mixed[6]));

let a = 10;
let b = a;
b = 50;
console.log(a);
console.log(b);

let obj1 = {vlaue: 10};
let obj2 = obj1;
obj2.vlaue = 50;
console.log(obj1.vlaue);
console.log(obj2.vlaue);
console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log([] == false);


let nested = {user: {name: "Nitish"} };
let shallowCopy = { ...nested};
shallowCopy.user.name = "Madu"
console.log(nested.user.name);
let deepCopy = structuredClone(nested);
deepCopy.user.name = "Madhu"
console.log(deepCopy.user.name);

let [firstFruit, secondFruit ] = fruits;
console.log(firstFruit, secondFruit);
let {name: studnetName, marks} = studnet;
console.log(studnetName, marks);
function collect(...values) {
    return values
}
console.log(collect(1, "tow", true, null));



