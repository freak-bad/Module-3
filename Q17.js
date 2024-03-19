const input = require('readline-sync')

let n = input.questionInt("enter a number : ");
let d = 2;
while (n != 1){
    if(n % d === 0){
        n = Math.floor(n/d);
        console.log(d);
    }else {
        d++;
    }
}
