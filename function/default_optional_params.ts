// default &  optional parameters

// default parameter
const Fun = (degree: string, rollno: number = 64): string => {
  return `i am studying in ${degree} & my roll no is ${rollno}`;
};
console.log(Fun("BSSE"));

// optional parameter
const Fun2 = (degree: string, rollno?: number): string => {
  if (rollno) {
    return `i am studying in ${degree} & my roll number is ${rollno}`;
  } else return `i am studying in ${degree}`;
};
console.log(Fun("BSSE"));
