// const gg = new set(['a','b']);
// gg.add('g');
// console.log(gg);

////exempals...2
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     language: "EN" 
//   };
//   Object.defineProperty(person, "language", {value:"NO"})
// console.log(person);

//// Exemple 3...

// const obj = {
//   name: "deep",
//   lastname: 'cowdhury',
//   pet: ['hh']
// }
// let x = obj.pet.length;
// // console.log(x);
// obj.pet[x] = "bird";
// console.log(obj);

//// Example 4...

// let myFunction = (a, b) => {
//   return a * b;
// }
// // let x = myFunction(4,5);
// console.log((myFunction)(4,5));

//// Exemple 5...

// if ("15" < "5"){
//   console.log("ok");
// }
// console.log(typeof"deep");

//// Exemple 6 ...

// let greeting = person => {
//   let name = person ? this.name : `stranger`
//   return `Howdy, ${name}`
// }

// console.log(greeting({name: `Alice`}));  // "Howdy, Alice"
// console.log(greeting(null));             // "Howdy, stranger"

//// Exemple... 7
// function countdown(n){
//      return n < 1 ? [] : [n].concat(countdown(n - 1));
//   }
//   console.log(countdown(2));

// Exmple 8..

// function rangeOfNumbers(startNum, endNum) {
//     return   endNum == endNum ? [] : [startNum + 1].concat(countdown(startNum + 1));
//   };
// console.log(1,5);

//practice 9 ....
// const user = {
//   firstName: "Deep",
//   lastName: 'chowdhury',
//   age: '24',
//   info: function () {
//     return `person name ${this.firstName + " " + this.lastName} age is ${this.age} `;
//   }
// }
// console.log(user.info())

//Exp 10...
// let myText = undefined;
// let preservingFalsy = myText || 'Hi neighborhood';
// console.log(preservingFalsy)


// Exp 11 ...
// function loop() {
//   let i = 0;
//   do {
//     setInterval(function () { console.log(`${i++} hi`) }, 1000);
//   } while (i < 5)
// }
// console.log(loop());

// Exp 12...
// function invert(array) {
//     let myArray = [];
//     (array == []) ? [] : array.forEach(val => myArray.push(val * -1));
//     return myArray;
// }
// console.log(invert([1, -2.3, 3, 5, 7, 5, -7]));

//Exercise 13...=>
// let a = 4;
// let b = 2;

// let c = () => { return a + b + 10 }
// console.log((c)());

// Excercise 14 ... =>
// const addSquares = (a, b) => {
//     const square = x => x * x;
//     return square(a) + square(b);
// };
// console.log(addSquares(2, 2));



// Exp 15...
// (() => console.log('hi'))();

//Exp 16...scope =>
// var obj = {
// count: 10,
// doSomethingLater: function() {
// The traditional function binds "this" to the "obj" context.
// setTimeout(() => {
// Since the arrow function doesn't have its own binding and
// setTimeout (as a function call) doesn't create a binding
// itself, the "obj" context of the traditional function will
// be used within.
//             this.count++;
//             console.log(this.count);
//         }, 300);
//     }
// }

// obj.doSomethingLater();

//Exp 17 ....
// let arguments = [1, 2, 3];
// var arr = () => arguments[0];

// arr(); // 1

// function foo(n) {
//     var f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
//     return f(2);
// }

// console.log(foo(3));

// function foo(n) {
//     var f = (...args) => args[0] + n;
//     return f(10);
// }

// console.log(foo(1)); // 1

// //Exp 18...
// let f = (arg, n) => {
//     b: () => {
//         return arg + n;
//     }
// };
// console.log(f(2, 2));

//Exp20...destructuring
// let f = ({ a, b } = { a: 10, b: 20 }) => a + b;
// console.log(f())

//Exp 21,,,

// var obj = { // does not create a new scope
//     i: 10,
//     b: () => console.log(this.i, this),
//     c: function() {
//         console.log(this.i, this);
//     }
// }

// // prints undefined, Window {...} (or the global object)
// obj.c();

//Exercise 22....
let x = ({ title, description }) => { console.log(title, description) }