// let score = "33ac"
// let score = null
// let score = undefined
let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 

//"33" =>33
//"33ac" => NaN
// true =>; false => 0

//-----------------------------
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//-----------------------------

let someNumber =33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//************************Operations***********************/

let value = 3
let negValue =-value
//console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%3);

let str1 = "hello"
let str2 = "Chandan"

let str3 = str1 + str2
console.log(str3)

//------------------------------------------
console.log("1" +2);
console.log(1 + "2");
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log((3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"")

//----------------------------

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);



