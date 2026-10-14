/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We didn't Use It ?
*/

let theName = "Elzero";
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Elzero Web School";
let allVars; // Any

theName = "Osama";
all = 100;

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));

// function add(n1, n2) {
//   return n1 + n2;
// }

// console.log(add(10, "20"));
// console.log(typeof add(10, "20"));

/*
  Type Annotations With Arrays
*/

let multi: string | number | boolean = "Osama";

all = "A";
all = 100;
all = true;

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}

/*
  Type Annotations With Multidimensional Arrays
*/

let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];

let arrayFour: (string | number | (string | number)[] | boolean)[] = [
  1,
  2,
  3,
  4,
  "A",
  "B",
  ["C", "D", 3],
  true,
  false,
];

/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/

let showMsg = true;

function showDetails(name: string, age: number, salary): string {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
  }
  return `No Data To Show`;
}

console.log(showDetails("Osama", 40, 5000));

/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didn't Use It
  - "?" Optional Parameter
*/

function showDataTs(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showDataTs());

// in JavaScript
function showDataJs(name = "Un", age, country) {
  return `${name} - ${age} - ${country}`;
}

console.log(showDataJs(undefined, 40, "Egypt"));

/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

function addAll(...nums: number[]): number {
  let result = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   result += nums[i];
  // }
  nums.forEach((num) => (result += num));
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));

/*
  Function
  - Anonymous Function
  - Arrow Function
*/

const add2 = function (num1: number, num2: number): number {
  return num1 + num2;
};

console.log(add2(10, 20));

const add2WithArrow = (num1: number, num2: number): number => num1 + num2;

console.log(add2WithArrow(10, 20));

// assignment 3
console.log("assignment");
function printInfo(valueOne: string | number, valueTwo: string | number) {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
// console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// assignment 6
let nothing;
let theName2: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(nothing, nothing, theName2)); // Elzero

// assignment 7
function showMsg2(
  user: number | string = 0,
  age: boolean | number | string = 0,
  country: boolean | string = ""
) {
  return `${user}${age}${country}`;
}

console.log(showMsg2());
console.log(showMsg2("Elzero"));
console.log(showMsg2("Elzero", 40));
console.log(showMsg2("Elzero", "40", "Egypt"));

// assignment 8
function printInConsole(...items: string[] | number[] | boolean[]): string {
  let result: string = "";
  for (let item of items) {
    result += `The value is ${item} and type is ${typeof item}\n`;
  }
  return result + "Done";
}

// Using The Function => Do Not Edit
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));

// Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done
