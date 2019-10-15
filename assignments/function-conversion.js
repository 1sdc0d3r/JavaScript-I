// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function() {
//   console.log("Function was invoked!");
// };
// myFunction();

myFunction = () => console.log("Function was invoked!");
console.log(myFunction());

// let anotherFunction = function (param) {
//   return param;
// };

// anotherFunction("Example");
// let anotherFunction => (param) {
//     param
// }
anotherFunction = param => param;
console.log(anotherFunction("Param"));

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (param1, param2) => param1 + param2;
console.log(add(3, 7));

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subtract = (param1, param2) => param1 - param2;
console.log(subtract(7, 4));

// Stretch

exampleArray = [1, 2, 3, 4];

// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

// triple = num => num * 3

const triple = exampleArray.map(num => num * 3);

console.log(triple);
