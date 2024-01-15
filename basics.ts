// Primitive Type
let age: number = 24;
let existsFlag: boolean = true;
let language: string = "JavaScript";

// More Complex Type
let myName: string = "John";
let yourName: string = "Fred";
let greeting: string = "Hello, my name is " + myName + ". Nice to meet you!";

// Array
let luckyNumbers: number[] = [7, 9, 25];
let luckyNumber: number = luckyNumbers[0];
let myFamily: string[];
myFamily = ["John", "Fred", "Bob"];

// Object
// let person: {
//   name: string;
//   age: number;
// } = {
//   name: "John",
//   age: 24,
// };

let person: {
  name: string;
  age: number;
};
person = {
  name: "John",
  age: 24,
};

// Array of Objects
let people: {
  name: string;
  age: number;
  roll: number;
}[];
people = [
  {
    name: "John",
    age: 24,
    roll: 1,
  },
  {
    name: "Fred",
    age: 27,
    roll: 2,
  },
];
