// task 1
// function f(a) {
//     return (a == 0) ? 1 : 0;
// }
// console.log(f(0));
// console.log(f(1));


// task 2
// function a (ax,b) {
//     let rez = b / ax
//     return rez
// }
// console.log(a(2,3));

// task 3
// function f(n) {
//     if (n <= 0) {
//         return "ERROR";
//     } else if (n === 1) {
//         return 0;
//     } else if (n === 2) {
//         return 1;
//     } else {
//         let a = 0;
//         let b = 1;
//         for (let i = 3; i <= n; i++) {
//             let c = a + b;
//             a = b;
//             b = c;
//         }
//         return b;
//     }
// }
// console.log(f(2));


//task 4
// function P(Num, cnt) {
//     while(cnt < Num){
//         cnt *= 2;
//         if(cnt == Num){
//             return true;
//              break
//         }
//     }
//     return false;
// }
// console.log(P(8, 1));