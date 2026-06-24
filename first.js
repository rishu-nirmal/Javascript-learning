//arithmetic terms
// let a = 5;
// let b = 3;
// console.log("a + b =",a+b)
// console.log("a - b =",a-b)
// console.log("a * b =",a*b)
// console.log("a / b =",a/b)
// console.log("a % b =",a%b)
// console.log("a ** b =",a**b)
//Unary operators
// let a = 5; 
// let b = 3;
// // console.log("a =",a, " & b =",b)
// // a++;
// // console.log("a = ", a)

// // b--;
// // console.log("b = ", b)
// a += 8 ;
// console.log("a = ",a)
// let a = 5;
// let b = 3;
// let cond1 = a>b;
// let cond2 = a === 5;
// console.log("cond1 || cond2 = ",cond1 || cond2)
// console.log("!(a>b) = ", !(a>b))
// Conditional statements 
// let mode = "Red";
// let color;
// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color)
// checking no's
// let num = 100;
// if ( num%2===0){
//     console.log(num,"is even")
// } else {
//     console.log(num,"is odd")
// }
// more about conditional statements
// let mode = "dark"
// color;
// if mode === "dark"{
//     color = "black";
// }else if(mode === "blue") {
//     color = "blue";
// }else if(mode === "red") {
//     color = "red";
// }else (mode === "light") {
//     color = "white";
// }
// console.log(color);
// Conditional statements
// 
// let num = prompt("enter a number:");
// if (num % 5 === 0) {
//     console.log(num,"is a multiple of 5");
// } else{
//     console.log(num,"is not a multiple of 5");
// }
// let score = prompt("enter your score from(0-100) ;")
// let grade;
// if (score >= 90 && score<= 100){
//     grade = "A";
// }else if(score >= 70 && score<= 89){
//     grade = "B";
// }else if (score >= 60 && score<= 69){
//     grade = "C";
// }else if (score >= 50 && score<= 59){
//     grade = "D";
// }else if(score >= 0 && score <= 49){
//     grade = "E";
// }
// console.log("According to your score,your grade was : ",grade)  

// let name = prompt("Enter your name:");
// console.log("Hello: ",name)
// let name = prompt("Enter your fav game:");
// console.log("My fav game is: ",name)
// for (let count = 1; count <= 100; count++){
//     console.log("Hello Rishabh");
// }
// for (let num = 0; num<=100; num++) {
//     if (num % 2 === 0 ) {
//         console.log("num =",num);
//     }
// }
// for (let num = 0; num<=100; num++) {
//     if (num % 2 !== 0 ) {
//         console.log("num =",num);
//     }
// }
// Game 
let answer = 7;

let guess = prompt("Guess the num :");

while (guess != answer) {
    guess = prompt("You entered wrong no.Guess again :");
}

console.log("Congratulations,you entered the right answer");