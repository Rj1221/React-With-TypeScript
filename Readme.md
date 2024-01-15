#### What is TypeScript?

TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code.In Simple Words its a Super Set of JavaScript.
It adds static typing to the language. Static typing is a way to describe the shape of an object by defining the types of its properties. This allows the compiler to validate that your code is working correctly. It can catch errors early before your code runs, and it can simplify refactoring, by giving you better tooling.

#### Why TypeScript?

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components. The TypeScript language specification has full details about the language.

#### Installing TypeScript and Using TypeScript

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

```bash
Function
```

```bash
Any Type (It will allow any type of value)
```

**Note:** Any type is not recommended to use in TypeScript.

#### Type Alias

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

#### Type Inferance

```typescript

```

#### Type Interface

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
