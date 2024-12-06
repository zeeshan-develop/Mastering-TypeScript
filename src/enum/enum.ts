// Enums group related constants in an organized way, making it easier to manage the code
// Enums are for holding primitive values like numbers or strings, not complex types like arrays or objects.
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// enum Day {
//     Monday = 1
//     Tuesday = 2
//     Wednesday= 3
//     Thursday=4
//     Friday=5
//     Saturday=6
//     Sunday=7
//   }
const today: Day = Day.Tuesday;
console.log("🚀 ~ today:", today);

enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED",
}

// Using the enum
let shopingstatus: OrderStatus = OrderStatus.Pending;

if (shopingstatus === (OrderStatus.Shipped as OrderStatus)) {
  console.log("Your order has been shipped.");
} else {
  console.log("Order status is not Shipped.");
}

// Enum for student type
enum StudentType {
  FullTime = "full-time",
  PartTime = "part-time",
}

// Enum for subject codes
enum SubjectCode {
  Math = "MATH101",
  Science = "SCI102",
  History = "HIST103",
}

// Student object using enums for subjectCode and studentType
const StudentData = {
  name: "", // Name is a dynamic value, not an enum
  age: 0, // Age is dynamic, so it's not an enum
  email: "", // Email is dynamic, so it's not an enum
  grade: "", // Grade is dynamic, so it's not an enum
  subjectCode: SubjectCode.Math, // Using enum for subjectCode
  studentType: StudentType.FullTime, // Using enum for studentType
};

console.log(StudentData.subjectCode); // Output: MATH101
console.log(StudentData.studentType); // Output: full-time
