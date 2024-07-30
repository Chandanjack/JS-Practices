// Primitive DataType---------

//  7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3438743302295379720203n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];
let myObj ={
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello");
}

console.log(typeof bigNumber);

console.log(typeof scoreValue);

console.log(typeof myFunction);




