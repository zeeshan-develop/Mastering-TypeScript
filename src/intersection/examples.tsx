// & intersection operator
interface Personintro {
  name: string;
  age: number;
}

interface Employee {
  jobTitle: string;
  salary: number;
}

let employee: Personintro & Employee = {
  name: "Ali",
  age: 30,
  jobTitle: "Software Developer",
  salary: 50000,
};


