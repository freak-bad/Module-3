const input = require('readline-sync')

let a = input.questionInt("enter a number : ")
let b = input.questionInt("enter a number : ")
let c = input.questionInt("enter a number : ")
if ((a > b && a > c)){
    console.log(a);
} else if ((b > a && b > c)){
    console.log(b);
} else {
    console.log(c);
}