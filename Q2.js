const input = require('readline-sync')

let a = input.question("enter a number");
let b = input.question("enter a number");
let c = input.question("enter a number");
let d = input.question("enter a number");
if ( a > b && a > c && a > d){
    console.log(a);
} else if (b > a && b > c && b > d){
    console.log(b);
} else if (c > a && c > b && c > d){
    console.log(c);
} else {
    console.log(d);
}