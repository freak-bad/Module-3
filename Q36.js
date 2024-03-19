const input = require('readline-sync')
let n = input.questionInt("enter the size of the array : ");
let arr = [];
let freak = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}
let sum = 0;
for (let i = 0; i < n; i++){
    sum = (sum*10)+arr[i];
}
// console.log(sum);
let m = input.questionInt("enter the size of the array : ");
let arr1 = [];
for (let i = 0; i < m; i++){
    let b = input.questionInt(`enter the ${i+1} element : `);
    arr1[i] = b;
}
let sum1 = 0;
for (let i = 0; i < m; i++){
    sum1 = (sum1*10)+arr1[i];
}
// console.log(sum1);
sum = sum * sum1;
// console.log(sum);
let l = String(sum).length
// console.log(l);
while (sum > 0){
    let r = sum % 10;
    sum = Math.floor(sum/10);
    freak.unshift(r);
}
console.log(freak);

