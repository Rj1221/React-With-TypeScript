### 1. [**What is TypeScript?**](#what-is-typescript)

- [Introduction](#what-is-typescript)
- [Benefits](#why-typescript)

### 2. [**Getting Started**](#installing-and-using-typescript)

- [Installing TypeScript](#installing-and-using-typescript)
- [Compiling TypeScript](#compiling-typescript)
- [Running TypeScript](#running-typescript)

### 3. [**TypeScript Types**](#typescript-types)

- [Primitive Types](#primitive-types)
  - [Boolean](#boolean)
  - [Number](#number)
  - [String](#string)
  - [Null](#null)
  - [Undefined](#undefined)
- [Examples For Primitive Types](#examples-for-primitive-types)
- [Complex Types](#complex-types)
  - [Array](#array)
  - [Object](#object)
- [Function Types](#function-types)
  - [Function](#function)
- [Any Type](#any-type)

### 4. [**Type Alias**](#type-alias)

- [Example](#type-alias-example)

### 5. [**Type Inference**](#type-inference)

- [Example](#type-inference-example)

### 6. [**Type Interface**](#type-interface)

- [Example](#type-interface-example)

### 7. [**Union Type**](#union-type)

- [Example](#union-type-example)

### 8.[**Function and Type**](#function-and-type)

- [Example](#function-and-type-example)

#### What is TypeScript?

TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.In Simple Words its a Super Set of JavaScript.
It adds static typing to the language. Static typing is a way to describe the shape of an object by defining the types of its properties. This allows the compiler to validate that your code is working correctly. It can catch errors early before your code runs, and it can simplify refactoring, by giving you better tooling.

#### Why TypeScript?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components. The TypeScript language specification has full details about the language.

#### Installing and Using TypeScript

```bash
npm install -g typescript
```

#### Compiling TypeScript

```bash
npx tsc helloworld.ts
```

#### Running TypeScript

```bash
node helloworld.js
```

#### TypeScript Types

```bash
Primitive Types
```

```bash
Boolean
Number
String
Null
Undefined
```

#### Examples For Primitive Types

```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10];
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
let list: any[] = [1, true, "free"];
list[1] = 100;
```

```bash
Complex Types
```

```bash
Array
Object
```

```bash
Function Types
```

````bash
Function
```typescript
function add(x: number, y: number): number {
  return x + y;
}
````

````


```bash
Any Type (It will allow any type of value)
````

**Note:** Any type is not recommended to use in TypeScript.

#### Type Alias

Type alias is a way to create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand. Let’s see an example of type alias.

#### Type Alias Example

```typescript
type StringOrNumber = string | number;
type Student = {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  address: {
    city: string;
    state: string;
    country: string;
  };
  getFullName: (name: string, surname: string) => string;
};
```

#### Type Inference

Type inference is a way to define a type without explicitly stating the type. TypeScript compiler will infer the type based on the value assigned to the variable. Let’s see an example of type inference.

#### Type Inference Example

```typescript
let age1 = 24;
// age1 = "Hello"; // Error Because As in The Starting i assign the integer Value with the age1 variable as an integer so it will not accept the string value
```

#### Type Interface

Type interface is a way to define a type using an interface keyword. It is similar to defining a type using type keyword with a few differences. The main difference is that type interface can be named and hence can be reused. Let’s see an example of type interface.

#### Type Interface Example

```typescript
interface Student {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  address: {
    city: string;
    state: string;
    country: string;
  };
  getFullName: (name: string, surname: string) => string;
}
```

#### Union Type

Union types are a powerful way to express a value that can be one of the several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.

#### Union Type Example

```typescript
let unionType: number | string; // Declaring a union type variable
unionType = "Hello World"; // OK
unionType = 10; // OK
unionType = true; // Compiler Error: Type 'true' is not assignable to type 'string | number'.
```

#### Function and Type

In TypeScript, both the arguments and the return type of a function can be typed. Let’s see an example of a typed function.

#### Function and Type Example

```typescript
function add(x: number, y: number) {
  return x + y;
}
function add(x: number, y: number): number {
  return x + y;
}
let add3: (a: number, b: number) => number;
add3 = (a: number, b: number) => {
  return a + b;
};
```
