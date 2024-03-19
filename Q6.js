const input = require('readline-sync')

let a = input.questionInt("enter a number: ");
let b = input.questionInt("enter a number: ");
let A = a,B = b;
while (b !== 0){
    let temp = b;
    b = a % b;
    a = temp;
}
let c = (A * B);
let LCM = Math.floor(c / a);
console.log(LCM,a);
  