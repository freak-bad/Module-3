const input = require('readline-sync')

// metrix [1]
let N = input.questionInt("enter the size of first array : ");
let M = input.questionInt("enter the size of second array : ");
let arr = [];
for (let i = 0; i < N; i++){
    arr[i] = [];
    for (let j = 0; j < M; j++){
        let a = input.questionInt(`enter the ${j+1} element : `);
        arr[i][j] = a;
    }
}

// metrix [2]
// let O = input.questionInt("enter the size of third array : ");
// let P = input.questionInt("enter the size of forth array : ");
let arr1 = [];
for (let i = 0; i < N; i++){
    arr1[i] = [];
    for (let j = 0; j < M; j++){
        let a = input.questionInt(`enter the ${j+1} element : `);
        arr1[i][j] = a;
    }
}
//console.log(arr,arr1);
let arr2 = [];
for (let i = 0; i < N; i++){
    arr2[i] = [];
    for (let j = 0; j < M; j++){
        arr2[i][j] = arr[i][j] + arr1[i][j];
    }
}console.log(arr2);