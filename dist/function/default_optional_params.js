"use strict";
// default &  optional parameters
// default parameter
const Fun = (degree, rollno = 64) => {
    return `i am studying in ${degree} & my roll no is ${rollno}`;
};
console.log(Fun("BSSE"));
// optional parameter
const Fun2 = (degree, rollno) => {
    if (rollno) {
        return `i am studying in ${degree} & my roll number is ${rollno}`;
    }
    else
        return `i am studying in ${degree}`;
};
console.log(Fun("BSSE"));
// apply generices to work with multiple data types
const Fun3 = (degree, rollno) => {
    if (rollno !== undefined) {
        return `I am studying in ${degree} & my roll number is ${rollno}`;
    }
    else {
        return `I am studying in ${degree}`;
    }
};
console.log(Fun3("BSSE", 44));
// Solving Function Overloading with TS Generics: Mastering Multiple Type Variables like a Pro 🚀
const Fun4 = (degree, rollno) => {
    if (rollno !== undefined) {
        return `I am studying in ${degree} & my roll number is ${rollno}`;
    }
    else {
        return `I am studying in ${degree}`;
    }
};
console.log(Fun4("BSSE", 44));
console.log(Fun4("BBA"));
