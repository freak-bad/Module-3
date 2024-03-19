const input = require('readline-sync')
let n = input.questionInt("enter the size : ");
let arr = [];
let arr1 = [];
for (i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr.push(a);
}
for (i = 0; i < n; i++){
    for (j = 0; j <= i; j++){
        if(i == j){

        }else {
            if (arr[i] == arr[j]){
            arr1.push(arr[i])
        }
    }
    }
}console.log(arr1);