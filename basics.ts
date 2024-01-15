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

// Type Alias
type Person = {
  name: string;
  age: number;
};
let person1: Person = {
  name: "John",
  age: 24,
};

// Type Inference
let age1 = 24;
// age1 = "Hello"; // Error Because As in The Starting i assign the integer Value with the age1 variable as an integer so it will not accept the string value
