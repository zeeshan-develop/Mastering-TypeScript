// obejct in ts

// enum
enum Role {
  user = "user",
  admin = "admin",
}

// Type Aliases or object interface both are similiar but little defference

// object interface : we use this in class components
// interface Person {}

// Type Aliases :  we use this in functional components
// type Person = {}

// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     address: { country: string; city: string };
//     greet: (hobbies: string) => string; //call signature method
//     role: Role;
//   };
// Type Aliases  allow you to create custom names for types.
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: { country: string; city: string };
  greet: (hobbies: string) => string; //call signature method
  role: Role;
};
const student: Person = {
  name: "Muhammad Ali",
  age: 23,
  isStudent: true,
  address: {
    country: "Pakistan",
    city: "Faisalabad",
  },
  greet: function (hobbies): string {
    return `i am ${this.name} i am ${this.age} i love ${hobbies}`;
  },
  role: Role.user,
};
const student2: Person = {
  name: "Muhammad Zeeshan",
  age: 23,
  isStudent: true,
  address: {
    country: "Pakistan",
    city: "Faisalabad",
  },
  greet: function (hobbies): string {
    return `i am ${this.name} i am ${this.age} i love ${hobbies}`;
  },
  role: Role.admin,
};

console.log("student intro", student.greet("football"));
const loginDetails = (studentdetail: Person, student2: Person): string => {
  const { name, role } = studentdetail;

  return role === "user"
    ? `${name} allow to edit the website`
    : `${student2.name} not allow to edit the website`;
};

console.log("login details", loginDetails(student, student2));
// we dont need to set properties types because behind the scence type inference does work
const student3 = {
  name: "Muhammad Zeeshan",
  age: 23,
  isStudent: true,
  address: {
    country: "Pakistan",
    city: "Faisalabad",
  },
};

student2.address.city = "Peshawar";
