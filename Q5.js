const input = require('readline-sync')

let a = input.questionInt("enter a number :");
let co=0
for (let i = 1;i <= a;i++){
    if (a % i == 0){
        co+=1
    }
}
if(co==2){
    console.log("prime number ");
}
else{
    console.log(" not prime number ");
}