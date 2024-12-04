// when to use interface
// When you need to adopt an object-oriented programming (OOP) approach.
// When you need declaration merging or inheritance.
// When you need to define a class-based structure."

// If you define the same interface repeatedly, TypeScript will merge it
interface Car {
  make: string;
}

interface Car {
  model: string;
}

const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
};

//   The syntax of interfaces is more readable and simple, especially when you need to define a clear structure
interface User {
  name: string;
  age: number;
}
