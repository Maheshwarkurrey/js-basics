const accountId=13232 
let accountEmail="mahesh2@gmail.com" // mostly use this
var accountPassword="1234" // mostly not use becouse issu of block and functional scope
accountCity="raipur" // it is allow(but not good)
let accountState; // output is undefined

// accountId=2 // not allowed
console.log(accountId);
accountEmail="makxy22@gmail.com"
accountPassword="23453"
accountCity="bilaspur"

// it is use for run multiple varaible
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
