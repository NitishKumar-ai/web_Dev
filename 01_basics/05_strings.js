const name =  "Nitish"
const repoCount = 41;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("nitish-kumar-ai")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(0));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherstring = gameName.slice(3, 4);
console.log(anotherstring);

const newStingOne = "   Nitish  "
console.log(newStingOne);
console.log(newStingOne.trim());

const url = "https://nitishkumar.cloud"
console.log( url);

console.log(url.replace('%20', '-'));
console.log(url.includes('sundar'));
console.log((gameName.split('-')));
