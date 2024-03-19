const input = require('readline-sync')
let n = input.questionInt("size of the array : ");
let arr = [];
for (i = 0; i < n; i++){
     let a = input.questionInt(`enter the ${i+1} number : `);
     arr[i] = a;
}
let arr1 = [];
let x = 0;
for (i = 0; i < n; i++){
     let count = 0;
     for (j = 0; j < n; j++){
          if (arr[i] == arr[j]){
               count++;
          }
     }
     if (arr1.includes(arr[i])){

     }else {
          arr1[x] = arr[i];
          console.log(arr1[x],"-",count,"times.");
          x++;
     }
}