"use strict";
// return type in func
// regular function
function myFun(name, id) {
    return `i am ${name} & id is ${id}`;
}
console.log(myFun("Muhammad zeeshan", 64));
// fat arrow function
const myFun2 = (age, email) => {
    return `i am ${age} year old & email is ${email}`;
};
console.log(myFun2(23, "zeeshan11651@gmail.com"));
