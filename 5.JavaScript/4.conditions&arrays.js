/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

console.log(true);
console.log(!true);

console.log(!(10 == "10"));

console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);

// ------------
console.log("challenge start");
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 + 100 != 10 + 20); // true
console.log(-10 == "-10"); // true
console.log(-(-50) != !+"-40"); // true
console.log(-10 != !-"-40"); // true
console.log(-"10" == -10); // true
console.log(!20 == false); // true
// ---------------
console.log("challenge start");
let num1 = 10;
let num2 = 20;

console.log(typeof num1 == typeof num2); // true
console.log(num2 - num1 == num1); // true
console.log(Number.isInteger(num1) === Number.isInteger(num2)); // true
console.log(!(num1 == num2)); // true
console.log(num1 != num2); // true
console.log(!(num1 == num2) && num1 != num2); // true

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);

/*
  Conditional (Ternary) Operator
*/

let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price2 = 0;

console.log(`The Price Is ${price2 || 200}`);
console.log(`The Price Is ${price2 ?? 200}`);

/*
If Condition Challenge
*/

console.log("start of challenge");
let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("> 40")
  : console.log("Unknown");

// Write Previous Condition With Ternary If Syntax
let st = "Elzero Web School";
if ((st.length + st.length).toString() === "34") {
  console.log("Good");
} else {
  console.log("wrong");
}

// W Position May Change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
} else {
  console.log("wrong");
}

if (st !== "string") {
  console.log("Good");
} else {
  console.log("wrong");
}

if (typeof Number(st) === "number") {
  console.log("Good");
} else {
  console.log("wrong");
}

if (st.split(" ").at(0).repeat(2) === "ElzeroElzero") {
  console.log("Good");
} else {
  console.log("wrong");
}
// assignment
// Test Case 1
let num3 = 9; // "009"
// Test Case 2
// num3 = 20; // "020"
// Test Case 3
// num3 = 110; // "110"
if (num3 < 10) {
  console.log(`00${num3}`);
} else if (num3 > 9 && num3 < 100) {
  console.log(`0${num3}`);
} else {
  console.log(num3);
}
// -----------
let num4 = 9;
let str = "9";
let str2 = "20";

// Output
if (num4 == str) {
  console.log("{num4} Is The Same Value As {str}");
}
if (num4 == +str) {
  console.log("{num4} Is The Same Value As {str} But Not The Same Type");
}
if (num4 !== str2) {
  console.log("{num4} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
// --------------
// Edit What You Want Here

let num11 = 22;
let num21 = -1;
let num31 = 22;
let num41 = 66;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num11 > num21) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num11 > num21 && num11 < num41) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num11 > num21 && num11 === num31) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num11 + num21 < num41) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num11 + num31 < num41) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num11 + num21 + num31 < num41) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num41 - (num11 + num31) + num21 === 21) {
  console.log("True");
} else {
  console.log("False");
}

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day1 = 0;

switch (day1) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

function Capitalize(str) {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

let day = "   friday   ";
switch (Capitalize(day.trim())) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}
