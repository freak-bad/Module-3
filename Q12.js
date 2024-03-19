const { xor } = require('lodash');
const input = require('readline-sync')

// question.12 (1)

// let n = input.questionInt("give me a number : ");
// let i = 1;
// let c = 1;
// for (i = 1; i <= n; i++){
//     let pattern = "* ";
//         console.log( pattern.repeat(c));
//         c = c + 2;
// }


// question.12 (2)


// let n = input.questionInt("give me a number : ");
// let c = 1;
// for (i = 1; i < n; i++){
//     let pattern = "* ";
//     console.log(pattern.repeat(c));
//     c = c + 2;
// }
//  let k = c
// for (let i = n; i > 0; i--){
//     let pattern2 = "* ";
//     console.log(pattern2.repeat(k));
//     k = k - 2;
// }



// question.12 (3)

// let n = input.questionInt("enter a number : ");
// let str = "*";
// let str2 = "*";
// let c = 2;
// for (let i = 1; i <= n; i++){
//     if (i == n){
//         console.log(str.repeat(c));
//     }else {
//         let pattern = str + " ";
//         console.log(pattern.repeat(c));
//         str += "*";
//     }
// } 
// let k = n - 1;
// for (let i = k; i > 0; i--){
//     let pattern2 = str2.repeat(k);
//     let pattern3 = pattern2 + " ";
//     console.log(pattern3.repeat(c));
//     k = k - 1;
    
// }


// question.12 (4)

// let n = input.questionInt("enter a number : ");
// for (let i = 1; i <= n; i++){
//     pattern = "";
//     let k = n;
//     for (let j = 1; j <= i; j++){
//         pattern += k + " ";
//         k--;
//     }for ( m = k + 2; m <= n; m++){
//         pattern += m + " ";
//     }console.log(pattern);
// } 
// for (i = n - 1; i > 0; i--){
//     pattern = "";
//     let k = n;
//     for (let j = 1; j <= i; j++){
//         pattern += k + " ";
//         k--;
//     } for (m = k + 2; m <= n; m++){
//         pattern += m + " ";
//     }console.log(pattern);
// }


// question.12 (5)

let n = input.questionInt("enter a number : ");
var c = 0;
var d = n + 1;
x = Math.floor(n/2);
for (i = 1; i <= (x+1); i++){
    pattern = "";
    for (j = 1; j <= n ; j++){
        if (i == 1 || i == n){
            pattern += 0 + " ";
        }else {
            if (j == 1 || j == n || j <= c || j >= d){
                pattern += "x" + " ";
            } else {
                pattern += 0 + " ";
            }
        }
    }console.log(pattern);
    c++;
    d--;
}
c -= 2;
d += 2;
for (i = x; i > 0; i--){
    pattern = "";
    for (j = 1; j <= n; j++){
        if (i == 1 || i == n){
            pattern += 0 + " ";
        }else {
            if (j == 1 || j == n || j <= c || j >= d){
                pattern += "x" + " ";
            }else {
                pattern += 0 + " ";
            }
        }
    }console.log(pattern);
    c--;
    d++;
}


//  question.12 (7)

// let n = input.questionInt("enter a number : ");
// let i = 1; 
// var a = n;
// while (i <= n){
//     var b = n;
//     pattern = "";
//     pattern += a + "_";
//     let j = n;
//     while (j > i){
//         pattern += b + "_"
//         j--;
//         b--;
//     }
//     i++;
//     a--;
//     console.log(pattern);
// } 
// for (let i = 2; i <= n; i++){
//     var c = n;
//     pattern = "";
//     pattern += i + "_";
//     for (let j = 1; j < i; j++){
//         pattern += c + "_";
//         c--;
//     }console.log(pattern);
// }


// question.12 (6)

// let n = input.questionInt("enter a number : ")
// var a = n;
// let p = 1;
// for (i = 1; i <= n; i++){
//     let Q = a ;
//     pattern = "";
//     pattern += a + " ";
//     a--;
//     for (j = 1; j <= n; j++){
//         if (j <= p){
//             Q++;
//             pattern += Q + " ";
//         }else {
//             Q--;
//             pattern += Q + " ";
//         }
//     }
//     Q++;
//     p++;
//     console.log(pattern);
// }