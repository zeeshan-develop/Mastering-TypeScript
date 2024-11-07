"use strict";
// obejct in ts
// enum
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
const student = {
    name: "Muhammad Ali",
    age: 23,
    isStudent: true,
    address: {
        country: "Pakistan",
        city: "Faisalabad",
    },
    greet: function (hobbies) {
        return `i am ${this.name} i am ${this.age} i love ${hobbies}`;
    },
    role: Role.user,
};
const student2 = {
    name: "Muhammad Zeeshan",
    age: 23,
    isStudent: true,
    address: {
        country: "Pakistan",
        city: "Faisalabad",
    },
    greet: function (hobbies) {
        return `i am ${this.name} i am ${this.age} i love ${hobbies}`;
    },
    role: Role.admin,
};
console.log("student intro", student.greet("football"));
const loginDetails = (studentdetail, student2) => {
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
