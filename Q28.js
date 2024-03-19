const input = require('readline-sync')

let n = input.questionInt("size of the array : ");
let arr = [];
let arr1 = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}
let k = input.questionInt("enter the k value : ");
for (let i = 0; i < n; i++){
    for (let j = (i+1); j < n; j++){
        let sum = arr[i] + arr[j];
        if (sum == k){
            arr1.push(arr[i],arr[j]);
            break;
        }else{

        }
    }
}console.log(arr1);