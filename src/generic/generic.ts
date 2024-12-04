// generic
// limited flexibility
function Student(name: string) {
  return name;
}

Student("Muhammad zeeshan");
// But if you use generics, you can use the function with any type. This means the flexibility of the function increases
// flexible function
function Student2<T>(value: T): T {
  return value;
}

Student2("ali");
Student2(34);
