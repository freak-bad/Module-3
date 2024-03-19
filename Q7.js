const input = require('readline-sync')

let a = input.questionInt("enter a number: ");
let A = a;
let sum = 0;
for (i = 1 ; i < a ;i++){
    if ( a % i == 0){
        sum+=i
    }
} if (a == sum){
    console.log("perfect number");
} else {
    console.log("not a perfect number");
}