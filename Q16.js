const input = require('readline-sync')

let n = input.questionInt("enter the limit : ");
var total = 0;
for (i = 1; i <= n; i++){
    let count = 0;
    for (j = 1; j <= i; j++){
        if (i % j == 0){
            count += 1;
        }
    }
    if (count == 2){
        total++;
    } else if (n == 2){
        console.log(0);
    }
} console.log(total);