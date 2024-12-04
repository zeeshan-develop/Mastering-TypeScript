// Types can be extended, but they cannot be merged. If you declare the same type repeatedly, an error occurs

// When to Use  Interfaces:
// When you need complex types, union types, or intersection types.
// When you need mapped types, conditional types, or tuple types.
// When you need to perform flexible and advanced type manipulations.

// type Car = {
//     make: string;
//   };

// Type 'Car' is already defined.
//   type Car = {
//     model: string;
//   };

// If you need complex type definitions for an object or variable, then using a type is better
type StringOrNumber = string | number;

const values: StringOrNumber = 42;

// Types provide more advanced features. Features like mapped types, conditional types, and tuple types can be used in types. If you need these features, types are a better choice
// mapped type
type MyType<T> = {
  [P in keyof T]: T[P];
};

type Persons = {
  name: string;
  age: number;
};

const person: MyType<Persons> = {
  name: "John",
  age: 30,
};

type myintro = Persons & {
  email: string;
};

const obj: MyType<myintro> = {
  name: "zeeshan",
  age: 24,
  email: "fullsatckdeveloper@gmail.com",
};
