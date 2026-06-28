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
// let answer = 7;

// let guess = prompt("Guess the num :");

// while (guess != answer) {
//     guess = prompt("You entered wrong no.Guess again :");
// }

// console.log("Congratulations,you entered the right answer");
// let str =  "Rishabh";
// console.log(str[6]);
// let obj = {
//     item: "Laptop",
//     price: 10,
// };


// let output = `cost of the ${obj.item} is ${obj.price} rupees`;
// console.log(output)
// console.log("Hello\nWorld")
// console.log("Hello\tWorld")
// let str = "Hello World";
// console.log(str.slice(1,7));
// 
// let fullName = prompt("enter your full name without space:");

// let Username = "@" + fullName + fullName.length;
// console.log(Username);
// let marks = [97,87,67,85,33];
// console.log(marks);
// let heroes = ["Ironman","Spiderman","Hulk","Thor","Captain America","Black Panther"];

// // for (let i = 0; i < heroes.length; i++) {
// //     console.log(heroes[i]);
// // }
// for (let hero of heroes) {
//     console.log(hero);

// let cities = ["Delhi","Mumbai","Chennai","Vijayawada"];

// for (let city of cities) {
//     console.log(city.toUpperCase());
// }

// let marks = [85,97,44,37,76,60];

// let sum = 0; 

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`average marks of the class = ${avg}`);
// let items = [250 , 645 , 300 , 900 , 50 ];

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     items[i] -= offer;
// }

// console.log(items);
// let foodItems = ["Pizza","Burger","Pasta","Noodles","Sandwich"];

// foodItems.push("Choclate","patties");

// console.log(foodItems);
// let marvelHeroes = ["Ironman","Spiderman","Hulk","Thor","Captain America","Black Panther"];

// let dcHeroes = ["Superman","Batman"];

// let combineHeroes = marvelHeroes.concat(dcHeroes);

// console.log(combineHeroes);
// let marvelHeroes = ["Ironman","Spiderman","Hulk","Thor","Captain America","Black Panther"];

// let val = marvelHeroes.shift();

// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1));
// brush up on array methods

// Function 

// function myFunction() {
//     console.log("Hello World");
//     console.log("Hello Rishabh");
// }
// myFunction();
// myFunction();

// function sum(a, b) {
//     console.log(a + b);
// }
// const arrowSum = (a, b) => {
//     console.log(a + b);
// }

// Question a function that counts the number of vowels in a string

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === 'a' ||
//             char === 'e' ||
//             char === 'i' || 
//             char === 'o' || 
//             char === 'u'
//         ) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// For each loop
// let arr = ["mumbai","delhi","chennai","kolkata","vijayawada"];

// arr.forEach((value) => {
//     console.log(value.toUpperCase());
// })
// Practice problem 1 
// let nums = [84,43,94,76,39];

// nums.forEach((num) => {
//     console.log(num * num);
// });
// let nums = [84,43,94,76,39];

// let newArr = nums.map((num) => {
//     return num*5;
// }); 

// console.log(newArr);

// let arr = [35, 67, 87 ,35, 98, 98, 45];

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// })
// console.log(output);
// Practice problem 2

// let marks = [84,43,94,76,39];

// let newArr = marks.filter((marks) => {
//     return marks > 90;
// });

// console.log(newArr);

// Practice problem 3

//  A funtion that takes a number as input and returns an array of that number from to 1 to that number and also returns the sum as well as the factorial of that number;

// let num = prompt("Enter any number :");

// let arr = [];

// for (let i = 1; i <= num; i++) {
//     arr[i-1] =i;
// }
// console.log(arr);

// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log("sum: ",sum);

// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log("factorial: ",factorial);

// # DOM part 1;
