const input = require('readline-sync')

// // palindrome for number


// let a = input.questionInt("enter the number:")
// let c=a
// let sum = 0;

// while(a>0){
//     d=a%10
//     sum=(sum*10)+(d)
//     a=Math.floor(a/10)
// } if ( c == sum) {
//     console.log("palindrome");
// } else {
//     console.log("NOT");
// }   


// palindrome for string


let a = input.question("enter a string:");
let rev = a.split('').reverse().join('');
if (a === rev){
    console.log("palindrome");
} else {
    console.log("NOT");
}