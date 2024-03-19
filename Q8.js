const input = require('readline-sync')

let n = input.questionInt("enter a number: ");
var a = input.questionInt(`enter the ${1} element: `);
var max = a;
var min = a;
for (i = 2; i <= n; i++){
let b = input.questionInt(`enter the ${i} element : `);
if (b > max){
    max = b;
}else if (b < min){
     min = b;
}else{

}
}console.log("max: ",max);
console.log("min: ",min);