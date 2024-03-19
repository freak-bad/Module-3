const input = require('readline-sync')

// pattern [Q.11] (1 = right angled triangle)


// let n = input.questionInt("number a number : ");
// for (i = 1; i <= n; i++){
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "* ";
//     }console.log(pattern);
// } 


// pattern [Q.11] (2 = right angled triangle up side down)

// let r = input.questionInt("enter a number : ");
// for (i = 1; i <= r; i++) {
//     let pattern = "";
//     for (let j = r; j >= i; j--){
//         pattern += "* ";
//     } console.log(pattern);
// }


// pattern [Q.11] (3)

// let n = input.questionInt("enter a number : ");
// let p = 1;
// for (let i = 1; i <= n; i++){
//     let pattern = "" ;
//     for (let j = 1; j <= i; j++){
//         pattern += p + " ";
//         p++;
//     } console.log(pattern);
// }


// pattern [Q.11] (4)

let n = input.questionInt("enter a number : ");
let b = 2;
let i = 0;
while (i <= (n - 1)){
    let j = 0;
    let pattern = "";
    while (j <= (i)){
        if (i == 0){
            pattern += i;
        }else {
            if (j == 0){
                pattern += (b**i);
            }else {
               pattern +=(b**(i + 1));
            }
        }
        pattern += " ";
        j++;
    }
    console.log(pattern);
    i++;
}



// pattern [Q.11] (5)

// let n = input.questionInt("give a number : ");
// let i = 1;
// while (i <= n){
//     let j = 1;
//     let pattern = "";  
//     while (j <= i){
//         pattern += j + " ";
//         j++;
//     } for (let k = i -1; k > 0; k--){
//         pattern += k + " ";
//     }
//     i++;
//     console.log(pattern);
// }

