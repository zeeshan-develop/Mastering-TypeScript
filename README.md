
# 🚀 **TypeScript Advanced Concepts**  

This repository contains **in-depth explanations** and **code examples** of advanced TypeScript topics.  
Whether you're preparing for interviews or enhancing your TypeScript skills, this guide will help  
you understand **core concepts** deeply.  

---  

## 📌 **Table of Contents**  
1. [TypeScript Basics](#-typescript-basics)  
2. [Advanced Types (Union, Intersection, Generics)](#-advanced-types-union-intersection-generics)  
3. [Type Inference & Type Assertions](#-type-inference--type-assertions)  
4. [Interfaces vs Types](#-interfaces-vs-types)  
5. [Object-Oriented Programming in TypeScript](#-object-oriented-programming-in-typescript)  
6. [Asynchronous TypeScript (Promises, Async/Await)](#-asynchronous-typescript-promises-asyncawait)  
7. [Type Guards & Narrowing](#-type-guards--narrowing)  
8. [Utility Types (Partial, Pick, Omit, Record, etc.)](#-utility-types-partial-pick-omit-record-etc)  
9. [Performance Optimization & Best Practices](#-performance-optimization--best-practices)  

---

## 📖 **TypeScript Basics**  
TypeScript is a **strongly typed** superset of JavaScript that provides **static typing** and better tooling support.  

### 🔹 **Basic Types in TypeScript:**  
```ts
let isDone: boolean = false;
let age: number = 25;
let firstName: string = "John";
let skills: string[] = ["TypeScript", "JavaScript"];
let anything: any = "Can be anything";
```

### 🔹 **Functions with Type Annotations:**  
```ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));
```

---

## 📖 **Advanced Types (Union, Intersection, Generics)**  
TypeScript allows **flexible type definitions** using **union, intersection, and generics**.  

### 🔹 **Union & Intersection Types:**  
```ts
type Developer = { name: string; skills: string[] };
type Manager = { name: string; teamSize: number };

type TeamLead = Developer & Manager; // Intersection Type
```

### 🔹 **Generics for Reusable Functions:**  
```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello")); // Output: Hello
```

---

## 📖 **Asynchronous TypeScript (Promises, Async/Await)**  
Handling asynchronous operations with **Promises and Async/Await** in TypeScript.  

### 🔹 **Using Promises in TypeScript:**  
```ts
function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
  });
}

fetchData().then((data) => console.log(data));
```

### 🔹 **Using Async/Await:**  
```ts
async function fetchDataAsync(): Promise<void> {
  const data = await fetchData();
  console.log(data);
}

fetchDataAsync();
```

---

## 📖 **Object-Oriented Programming in TypeScript**  
TypeScript supports **class-based programming** with **inheritance, interfaces, and access modifiers**.  

### 🔹 **Creating a Class in TypeScript:**  
```ts
class Person {
  constructor(public name: string, private age: number) {}

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const user = new Person("Alice", 30);
console.log(user.greet());
```

---

## 📖 **Interfaces vs Types**  
TypeScript provides **Interfaces** and **Type Aliases** to define object structures.  

### 🔹 **Interface Example:**  
```ts
interface User {
  name: string;
  age: number;
}

const user: User = { name: "John", age: 25 };
```

### 🔹 **Type Alias Example:**  
```ts
type UserType = {
  name: string;
  age: number;
};

const user2: UserType = { name: "Jane", age: 30 };
```

---

## 📖 **Performance Optimization & Best Practices**  
🔹 **Use Type Inference** (Avoid unnecessary type annotations)  
🔹 **Enable `strict` mode** in `tsconfig.json`  
🔹 **Avoid `any` Type** (Use `unknown` or specific types instead)  
🔹 **Use Interfaces for Object Definitions**  
🔹 **Leverage Utility Types** (`Partial`, `Pick`, `Omit`, etc.)  

---

🚀 **This repository is continuously updated!** If you find it helpful, feel free to **star** ⭐ and contribute! 🔥  

---

Would you like any modifications or additions? 🚀💡
