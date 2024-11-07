// Boolean Type
let isMyNameZeeshan: boolean = true;
let isDone: boolean = true;
let hasStarted: boolean = false;

function isEven(a: number): boolean {
  return a % 2 === 0;
}
console.log("🚀 ~ isEven ~ isEven:", isEven(5));

// bigint Type
// let maxNumber = Number.MAX_SAFE_INTEGER;

let myNum: bigint = 9007199254740991999n;
let myNumber = BigInt(9007199254740991999n);
// without bigint 9007199254740992000
console.log("🚀 ~ maxNumber:", myNum, myNumber);
