const input = require('readline-sync')

let m = input.questionInt("size of first array : ");
let M = [];
let N = [];
let arr = [];
let ditto = [];
for (let i = 0; i < m; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    M[i] = a;
}
let n = input.questionInt("size of second array : ");
for (let i = 0; i < n; i++){
    let b = input.questionInt(`enter the ${i+1} element : `);
    N[i] = b;
}
let i = 0, j = 0, k = 0, l = 0;
while (i < m && j < n){
    if (M[i] < N[j]){
        if (!arr.includes(M[i])){
            arr[k++] = M[i++];
        }else {
            ditto[l++] = M[i++];
        }
    }else if (M[i] === N[j]){
        if (!arr.includes(M[i])){
            arr[k++] = M[i++];
        }else {
            ditto[l++] = M[i++]
        }
    }else {
        if (!arr.includes(N[j])){
            arr[k++] = N[j++];
        }else {
            ditto[l++] = N[j++];
        }
    }
}
while (i < m){
        if (!arr.includes(M[i])){
            arr[k++] = M[i++];
        }else {
            ditto[l++] = M[i++];
        }
    }

while (j < n){
        if (!arr.includes(N[j])){
            arr[k++] = N[j++];
        }else {
            ditto[l++] = N[j++];
        }
    }    
console.log("union :",arr);
console.log("intersection :",ditto);
