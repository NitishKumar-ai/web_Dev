// Objects Literls
const mySym = Symbol("key1")

const user = {
    name: "Nitish",
    "fullName": "nitish kumar",
    [mySym]: "stark",
    age: 20,
    height: 5.8,
    isDibetic:false,
    lastLoggedIn: ['monday', 'staruday', ]
}

console.log(user.name);
console.log(user["fullName"]);
console.log(user[mySym]);
console.log(typeof user[mySym]);


// type one Citizen : Functions
user.greetings = function(){
    console.log("Hello JS user");
}
console.log(user.greetings);
