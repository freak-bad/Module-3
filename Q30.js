const { noConflict } = require('lodash');
const input = require('readline-sync')

let n = input.questionInt("enter the size of the array : ");
let arr = [];
for(let i = 0; i < n; i++){
    arr[i] = i+1;
}
let k = input.questionInt("enter the value of k : ");
let l = 0;
let r = n - 1;
let result = "no";
while (l <= r){
    let m = Math.floor((l+r)/2);
    if (arr[m] == k){
        result = "yes";
        break;
    }else {
        if (arr[m] < k){
            l = m+1;
        }else {
            r = m-1;
        }
    }
}console.log(result);
