const input = require('readline-sync')
let n = input.questionInt("enter the size : ")
let arr = [];
for(i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr.push(a);
}
let m = input.questionInt("enter the number : ");
   arr.splice(m-1,1);
console.log(arr);