// recommended as syntax
//  as syntax
let data: unknown = "This is a string!";
let stringLength: number = (data as string).length;

console.log(stringLength);

// Angle Bracket Syntax
let studentInfo: unknown = [1, 2, 3, 4];
// problematic with angle bracket
// let rollNo: number[] = <number[]>arr;
let rollNo: number[] = studentInfo as number[];

console.log(rollNo);
