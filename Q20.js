const input = require('readline-sync')
let n = input.questionInt("enter the size : ")
  let arr = [];
  for (i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr.push(a);
  }
  let m = input.questionInt("enter the location : ");
  let x = input.questionInt("enter the element : ");
  arr.splice(m-1,0,x);
  console.log(arr);