const input = require('readline-sync')
let n = input.questionInt("enter a number : ");

while( n != 0){
var sum = 0;
while (n != 0){
    r = n % 10;
    n = Math.floor(n/10);
    sum += r;
}
if (sum < 10){
    console.log(sum);
    break
}
    n = sum;
}