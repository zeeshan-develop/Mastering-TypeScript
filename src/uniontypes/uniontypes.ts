// union types |

let value: string | number;

value = "zeeshan";
value = 56;

const intro = (name: string | number) => {
  console.log(`hi i am ${name}`);
};

intro("zeeshan");

const arr: (string | number | boolean)[] = [
  "apple",
  2400,
  "bananaaa",
  77,
  false,
];
