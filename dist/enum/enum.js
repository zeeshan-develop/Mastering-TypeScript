"use strict";
// Enums group related constants in an organized way, making it easier to manage the code
// Enums are for holding primitive values like numbers or strings, not complex types like arrays or objects.
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
// enum Day {
//     Monday = 1
//     Tuesday = 2
//     Wednesday= 3
//     Thursday=4
//     Friday=5
//     Saturday=6
//     Sunday=7
//   }
const today = Day.Tuesday;
console.log("🚀 ~ today:", today);
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
// Using the enum
let shopingstatus = OrderStatus.Pending;
if (shopingstatus === OrderStatus.Shipped) {
    console.log("Your order has been shipped.");
}
else {
    console.log("Order status is not Shipped.");
}
// Enum for student type
var StudentType;
(function (StudentType) {
    StudentType["FullTime"] = "full-time";
    StudentType["PartTime"] = "part-time";
})(StudentType || (StudentType = {}));
// Enum for subject codes
var SubjectCode;
(function (SubjectCode) {
    SubjectCode["Math"] = "MATH101";
    SubjectCode["Science"] = "SCI102";
    SubjectCode["History"] = "HIST103";
})(SubjectCode || (SubjectCode = {}));
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
