const input = require('readline-sync')
let m = input.questionInt("size of the first array : ");
let n = input.questionInt("size of the second array : ");
let M = [];
let N = [];
let arr = [];
let a = 1;
let b = 2;
for (let i = 0; i < m; i++){
    // let A = input.questionInt("enter a number : ")
    M[i] = a;
    a += 2;
}
for (let i = 0; i < n; i++){
    N[i] = b;
    b += 2;
}
let i = 0 , j = 0 , k = 0;
while(i < m && j < n){
    if (M[i] < N[j]){
        arr[k++] = M[i++];
    }else {
        arr[k++] = N[j++];
    }
}
while (i < m){
    arr[k++] = M[i++];
}
while (j < n){
    arr[k++] = N[j++];
}
console.log(arr);