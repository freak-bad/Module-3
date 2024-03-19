const input = require('readline-sync')

let x = input.questionInt("enter the range : ")
let n = input.questionInt(`enter the ${1} number : `);
for (i = 2; i <= x; i++){
    let N = input.questionInt(`enter the ${i} number : `);
    if (n > N){
        var a = N;
        var b = n;
    }else{
        var a = n;
        var b = N;
    } while (b != 0) {
        let temp = b;
            b = a % b;
            a = temp;
        }
        n = a;
    } console.log(a);
