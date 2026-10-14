/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now()); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let birthday = new Date("Jan 31, 03");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

console.log(dateNow);

console.log("#".repeat(66));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setDate(35);
// console.log(dateNow);

// dateNow.setFullYear(2020, 13);
// console.log(dateNow);

dateNow.setMonth(15);
console.log(dateNow);

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 100000; i++) {
  // document.write(`<div>${i}</div>`);
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);

// assignment 1
let myBirthday = Date.now() - new Date("Jan 31 2003");

console.log(`${myBirthday / 1000} Seconds`);
console.log(`${myBirthday / 1000 / 60} Minutes`);
console.log(`${myBirthday / 1000 / 60 / 60} Hours`);
console.log(`${myBirthday / 1000 / 60 / 60 / 24} Days`);
console.log(`${myBirthday / 1000 / 60 / 60 / 24 / 30} Months`);
console.log(`${myBirthday / 1000 / 60 / 60 / 24 / 30 / 12} Years`);

// assignment 2
let s = new Date(0);
s.setFullYear(s.getFullYear() + 10);
s.setHours(0, 0, 1);
console.log(s);

// assignment 3
let t = new Date();
t.setDate(0);
console.log(t);
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
console.log(
  `Previous Month is ${t.getMonth() + 1} and last day is ${t.getDate()}`
);
// "Previous Month Is April And Last Day Is 30"

// assignment 4
const t0 = performance.now();
for (let i = 0; i < 999; i++) {
  console.log(i);
}
const t1 = performance.now();
console.log(`Loop took ${t1 - t0} milliseconds.`);

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value);
}

/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let generator2 = generateAll();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.return("Z"));
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

function* generateNumbers2() {
  // yield 1;
  // yield 2;
  // return "A";
  // yield 3;
  // yield 4;
  let index = 0;

  while (true) {
    yield index++;
  }
}

let generator3 = generateNumbers2();

console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());
console.log(generator3.next());

// recursion approach
function* infiniteNumbers(n) {
  yield n;
  yield* infiniteNumbers(n + 1); // Recursive call using yield*
}

let gen = infiniteNumbers(0);

console.log(gen.next()); // 1
console.log(gen.next()); // 2
console.log(gen.next()); // 3
console.log(gen.next()); // 4

// assignment 7
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

// Write Your Generator Function Here
function* genAll() {
  let Seq = genNumbers();
  let t = Seq.next();
  while (!t.done) {
    let next = Seq.next();
    if (t.value !== next.value) {
      yield t.value;
      t = next;
    }
  }
  Seq = genLetters();
  t = Seq.next();
  while (!t.done) {
    let next = Seq.next();
    if (t.value !== next.value) {
      yield t.value;
      t = next;
    }
  }
}

let generator4 = genAll();

console.log("");
console.log(generator4.next()); // {value: 1, done: false}
console.log(generator4.next()); // {value: 2, done: false}
console.log(generator4.next()); // {value: 3, done: false}
console.log(generator4.next()); // {value: 4, done: false}
console.log(generator4.next()); // {value: 5, done: false}
console.log(generator4.next()); // {value: "A", done: false}
console.log(generator4.next()); // {value: "B", done: false}
console.log(generator4.next()); // {value: "C", done: false}
console.log(generator4.next()); // {value: "D", done: false}

// improvement from ChatGPT
function* unique(gen) {
  let prev;
  for (const value of gen) {
    if (value !== prev) {
      yield value;
      prev = value;
    }
  }
}

function* genAll2() {
  yield* unique(genNumbers());
  yield* unique(genLetters());
}

// Testing
console.log([...genAll2()]); // Output: [1, 2, 3, 4, 5, "A", "B", "C", "D"]

/*
html
  <script src="main.js" type="module"></script>
  <script src="app.js" type="module"></script>
JavaScrip
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All

  let a = 10;
  let arr = [1, 2, 3, 4];

  function saySomething() {
    return `Something`;
  }

  export { a as myNumber, arr, saySomething };

  export default function () {
    return `Hello`;
  }
  ###########
  // import elzero, { myNumber, arr, saySomething as s } from "./main.js";

  // console.log(myNumber);
  // console.log(arr);
  // console.log(s());
  // console.log(elzero());

  import * as all from "./main.js";

  console.log(all);

  console.log(all.myNumber);
  console.log(all.arr);
*/

// assignment 8
import calc from "/17.calculate.js";
import * as modOne from "/17.mod-two.js";

// main.js File
console.log(modOne);
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-two.js File
// let a = 10; // Do Not Edit Names
// let b = 20; // Do Not Edit Names
// let c = 30; // Do Not Edit Names
