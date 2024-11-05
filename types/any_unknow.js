"use strict";
// any vs unknow type
// any Type
// disable type checking or typesafty
let num = 23;
num = "string";
// unknow Type
let num2;
num2 = 5;
num2 = "zeeshan";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "boolean") {
    console.log(num2);
}
// another example of Unknow
const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
};
const processData = async () => {
    const response = await fetchData();
    if (typeof response === "object") {
        console.log(response);
    }
};
