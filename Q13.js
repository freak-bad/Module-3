const input = require('readline-sync')

// pattern Q13.[1]

// let n = input.questionInt("enter a number : ");
// let str = "*";
// for (i = 1; i <= n; i++){
//     pattern = "";
//     for(j = 1; j <= i; j++){
//         if (i == 1){
//             pattern += str + " ";
//         }else if(i == n){
//             pattern += str + " ";
//         }else if (j == 1 || j == 2){
//             pattern += str + " ";
//         }
//     }console.log(pattern);
// }


// pattern Q13.[2]

// let n = input.questionInt("enter a number : ");
// let str = "*";
// let str2 = "* ";
// for (i = 1; i <= n; i++){
//     pattern = "";
//     for (j = 1; j <= i; j++){
//         if (i == 1){
//             pattern += str2.repeat(n);
//         }else if(i == n){
//             pattern += str + " ";
//         }else if (j == 1 || j == 2){
//             pattern += str + " ";
//         }
//     }console.log(pattern );
// }

// pattern Q13.[3]

// let n = input.questionInt("enter a number : ");
// let str = "*";
// let a = n + 4;
// for (i = 1; i < a; i++){
//     pattern = "";
//     for (j = 1; j < i; j++){
//         if (i == 1){
//             pattern += str.repeat(1);
//         }else {
//                 if (j == 1 || j == 2){
//                     pattern += str + " ";
//                 }else {

//             }
//         }
//     }
//     console.log(pattern);
// }
// console.log(str);


// pattern Q13.[4]

let n = input.questionInt("enter a number : ");
let str = "*" ;
let str1 = "* "
let x = n - 1;
for (i = 1; i <= n; i++){
    pattern = "";
    for (j = 1; j <= n; j++){
        if (i == 1){
            pattern += str + " ";
        }else {
            if (i == n && j == 1){
                pattern += str + " ";
            }else {
                if (j == 1 || j == 2 && i != n){
                    pattern += str + " ";
                }
            }
        }
    }console.log(pattern);
}
for (i = 2; i <= n; i++){
    pattern = "";
    for (j = 1; j <= i; j++){
        if (j == 1 || j == 2 && i != n){
            pattern += str + " ";
        }else {
            if (i == n){
                pattern = str1.repeat(n)
            }
        }
    }console.log(pattern);
}