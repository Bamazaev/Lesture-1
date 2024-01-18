// Task 1
// function a (h, m, s) {
//     let h1 = h * 60 * 60;
//     let m1 = m * 60;

//     if (h1 > m1 && h1 > s) {
//         return h;
//     } else if (m1 > h1 && m1 > s) {
//         return m;
//     } else {
//         return s;
//     }
// }
// console.log(a(2, 300, 15000));

// task 2
// function same(num) {
//   let n1 = Math.floor(num / 100);
//   let n2 = Math.floor(num / 10) % 10;
//   let n3 = Math.floor(num % 10);

//   if (n1 == n2 || n2 == n3 || n1 == n3) {
//     return true;
//   }
//   return false;
// }
// console.log(same(212));

// task 3
// function same(num) {
//   if (Math.floor (num/10)>num%10) {
//     return true;
//   }
//   return false;
// }
// console.log(same(23));

// task 4
// function same (num){
// let cnt=0
// for(let i=1;i<=num;i++){
//     cnt+=i
// }
// return cnt
// }
// console.log(same(4));

// task 5
// function same(a,b,c){
// if(a!=b && a!=c){
//     return 1
// }
// else if (b!=a && b!=c){
//     return 2
// }
// return 3
// }
// console.log(same(5,5,10));

// task 6
// function same(n1, n2) {
//   let sum = 0;
//   for (let i = n1; i <= n2; i++) {
//     if (i % 2 === 0)
//     sum+=i
// }
// return sum;
// }
// console.log(same(-5, -3));

// task 7
// function same(n, k) {
//     let sum=0
//   for (let i = 1; i <= n; i++) {
//     sum+=i**k
//   }
//   return sum
// }
// console.log(same(5, 3));

// task 8
// function same(a) {
//     let max = -99999999
//     for(let i=a;i>0;i=Math.floor(i/10)){
//         if(i%10>max)max=i%10
//     }
//     return max
// }
// console.log(same(7893));

//task 9
// function same(a) {
//   let cnt = "";
//   for (let i = a; i > 0; i = Math.floor(i / 10)) {
//     cnt += i % 10;
//   }
//   return cnt == a;
// }
// console.log(same(7227));

//task 10
// function BigAndLitle(num) {
//     let First = Math.floor(num / 10);
//     let Second = Math.floor(num % 10);
//     let NUMBER = Second  + First;
//     return NUMBER;
//   }
//   console.log(BigAndLitle(14));

function same(a) {
    let f = Math.floor(a/10)
    let s = Math.floor(a%10)

}
console.log(same(38))