const input = require('readline-sync')

let n = input.questionInt("enter the size of the array : ");
let arr = [];
let arr1 = [];
let x = 0;
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}  
let b = input.questionInt("enter the number of rotation : ");
for(i = (b-1); i < n; i++){
        arr1[x] = arr[i];
        x++;
}
for (i = 0; i < (b-1); i++){
    arr1[x] = arr[i];
    x++;
}
console.log(arr1);