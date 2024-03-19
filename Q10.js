const input = require('readline-sync')


// mathematical series (1)

// let n = input.questionInt("enter the range : ");
// let m = input.questionInt("enter the number : ");
// var sum = 0;
// let a = 1;
// for (let i = 1; i <= n; i++) {
//     var sol = (m**a)/a;
//     sum = sum + sol;
//     a++;
// } console.log(sum);


// mathematical series (2)

// let n = input.questionInt("enter the range : ");
// let m = input.questionInt("enter the number : ");
// var sum = 0;
// let a = 1;
// let sign = 1;
// for (let i = 1; i <= n; i++) {
//     var sol = (m**a)/a;
// sum += sign * sol;
// sign = -sign;
// a += 2;
// } console.log(sum);


// mathematical series (3)


let n = input.questionInt("enter the range : ");
let m = input.questionInt("enter the number : ");
function factorial(m){
    if (m === 0){
        return 1;
    } else {
        return m * factorial(m - 1);
    }
}
var  a = 1;
let sum = 0;
var sign = 1;
for (let i = 1; i <= n; i++){
   var sol = ((m**a)/factorial(a));
sum += sign * sol;
sign = -sign;
a += 2;
} console.log(sum);
