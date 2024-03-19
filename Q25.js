const { max } = require('lodash');
const input = require('readline-sync')
let n = input.questionInt("enter the array size : ");
let arr = [];
let arr1 = [];
let x = 0;
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} elsement : `);
    arr[i] = a;
}
let count = 0;
for (let i = 0; i <= n; i++){
    if (arr[i] == 1){
        count++;
    }else {
        arr1[x] = count;
        x++;
        count = 0;
    }
}
console.log(Math.max.apply(null,arr1));



