const accountId  = 1901472
let accountEmail = "chandanksingh2022@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2 Not allowed

accountEmail ="cha@js.com"
accountPassword ="5555555"
accountCity = "Delhi"

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

