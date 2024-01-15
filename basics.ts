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
// Type Inference
let age1 = 24;
// age1 = "Hello"; // Error Because As in The Starting i assign the integer Value with the age1 variable as an integer so it will not accept the string value

// Union Type
let username: string | number = "John";
username = 24;

let users: string | string[];
users = ["John", "Fred"];

// Type Alias
type Person = {
  name: string;
  age: number;
};
let person1: Person = {
  name: "John",
  age: 24,
};

// Function and Types

function add(a: number, b: number) {
  return a + b;
}

let sum = add(2, 3);
console.log(sum);

// Function Return Types
function add1(a: number, b: number): number {
  return a + b;
}

let sum1 = add1(2, 3);
console.log(sum1);

let add2: (a: number, b: number) => number;
add2 = (a: number, b: number) => {
  return a + b;
};

// Function with Void Return Type

function sayHello(name: string): void {
  console.log("Hello " + name);
}

sayHello("John");
