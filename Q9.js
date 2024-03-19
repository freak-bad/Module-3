const input = require('readline-sync')
let n = input.questionInt("enter a number : ");
let a = input.questionInt(`enter the ${1} number : `);
let b = input.questionInt(`enter the ${2} number : `);
if (a > b){
    var max = a ;
    var max2 = b;
} else {
    var max = b;
    var max2 = a;
} for (let i = 3; i <= n; i++){
    let c = input.questionInt(`enter the ${i} number : `);
    if (c > max){
        max2 = max;
        max = c;
    } else {
        if (c > max2){
            max2 = c;
        }
    }
}console.log(max2);
