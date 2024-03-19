const input = require('readline-sync')
let A = input.questionInt("starting point : ");
let B = input.questionInt("ending point : ");
function countN(i){
    return String(i).length;
}
for (let i = A; i <= B; i++){
    var count = countN(i);
    let sum = 0;
    let a = i;
    while (a != 0){
        r = a % 10;
        a = Math.floor(a/10);
        sum += (r**count);
    }if (sum == i){
    console.log(i ,"- armstrong number.");
    } else{
    }
}

