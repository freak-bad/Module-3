const input = require('readline-sync')

let a = input.question("enter a number : ");
let b = input.question("enter a number : ");
let c = input.question("enter a number : ");
let d = input.question("enter a number : ");
if ((a < b && a < c && a > d) || (a < b && a < d && a > c) || (a < c && a < d && a > b)){
    console.log(a);
} else if ((b < a && b < c && b > d) || (b < a && b < d && b > c) || (b < c && b < d && b > a)){
    console.log(b);
} else if ((c < a && c < b && c > d) || (c < a && c < d && c > b) || (c < b && c < d && c > a)){
    console.log(c);
} else {
    console.log(d);
}