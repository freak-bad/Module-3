const { stubArray } = require('lodash');
const input = require('readline-sync')

let n = input.questionInt("enter a number : ");
var arr = [];
for (let i = 0; i <= n; i++){
    let a = 1;
     arr[i] = [];
    for (let j = 0; j <= i; j++){
            arr[i][j] = a; 
            a = a * (i - j)/(j + 1);  
    }
}console.log(arr);