/*
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
*/

console.log("Osama Mohamed");
console.log(typeof "Osama Mohamed");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof { name: "Osama", age: 17, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
// ---------------

/*
  Variables
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - We can declare Variables Without Var but it may cause problems
  - Multiple Variables In The Same Line
  - Id of any HTML element is a Global Variable
  - Loosely Typed vs Strongly Typed
*/

var user = "Sayed";
console.log(user);
// some HTML element has id = "hello"
hello.innerHTML = "new content in the element";

// --------------------
/*
  Identifiers
  - Name Conventions And Rules
  - $ is allowed in naming variables
  - Reserved Words
*/
var userName = "Sayed";
console.log(userName);
// ------------------------
/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To the Window object] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/
// -----------------
/*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/

console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log('Elzero Web "School"');
console.log("Elzero \\ Web 'School'");
console.log(
  "Elzero \
Web \
School"
);
console.log("Elzero\nWeb\nSchool");
// ------------------
/*
  Concatenation
*/

let u = "We Love";
let k = "JavaScript";

document.write(u + " " + k);

console.log(u, k);
// ------------------
/*
  Template Literals (Template Strings)
*/

// First Example

let aa = "We Love";
let bb = "JavaScript";
let cc = "And";
let dd = "Programming";

console.log((aa = ' "" ' + bb + "\n" + cc + " " + dd));

console.log(`${aa} "" '' \`\` \\ ${bb}
${cc} ${dd}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;
document.write(markup);
// ---------------------
/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  -- Decrement [ Post / Pre ]
*/
console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1
// ------------------
/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));
// ------------------
/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let q = "10";
let w = 20;
let p = true;

console.log(+q + w + p);

// -=, +=, *=, /= and many more work like c/c++, java, python and so on
/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  all of them are 100 and I got them all
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++e * ++g + ++f + -d); // 173
// assignment 2
// Replace ? With Arithmetic Operators
console.log(10 * 20 - (15 % 3) + 190 + 10 - 400); // 0

// assignment 3
let num = 3;

// Solution One
console.log(num + num); // 6

// Solution two
console.log(num ** num - num); // 6

// -----------------
/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 = x**53
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 = 2**1024
console.log(Number.MAX_VALUE + 23434343434);

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
console.log((100.1).toString());

console.log((100.554555).toFixed(2));

console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama"));
console.log(parseInt("Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama" / 20));

/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));

/*
  Number Challenge
*/

let x = 100;
let y = 2_00.5;
let t = 2.4;
let z = 1e2;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(x, y, z, t));

// Use Variables x + t One Time To Get The Needed Output
console.log(x ** Math.trunc(t)); // 10000

// Use Variables y + t To Get These Values
console.log((Math.trunc(y) / Math.ceil(t)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Number((Math.trunc(y) / Math.ceil(t)).toFixed(2)))); // 67 => Number

// Get Integer "2" From t Variable With 4 Methods
console.log(Math.trunc(t));
console.log(Math.floor(t));
console.log(Math.round(t--));
console.log(Math.ceil(t));
// ------------------------
/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mandatory], Start [Opt] 0)
  - lastIndexOf(Value [Mandatory], Start [Opt] Length)
  - slice(Start [Mandatory], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let j = "Elzero Web School";

console.log(j.indexOf("Web"));
console.log(j.indexOf("Web", 8));
console.log(j.indexOf("o")); // 5
console.log(j.lastIndexOf("o")); // 15

console.log(j.slice(2, 6));
console.log(j.slice(-5, -3));

console.log(j.repeat(5));

console.log(j.split("", 6));

/*
  String Methods
  - substring(Start [Mandatory], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mandatory], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mandatory], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mandatory], Start [Opt] Default 0) [ES6]

  - endsWith(Value [Mandatory], Length [Opt] Default Full Length) [ES6]
*/

let l = "Elzero Web School";

console.log(l.length);

console.log(l.substring(2, 6));
console.log(l.substring(6, 2));
console.log(l.substring(-10, 6)); // 0 - 6
console.log(l.substring(a.length - 5, a.length - 3));

console.log(l.substr(0, 6));
console.log(l.substr(17));
console.log(l.substr(-3));
console.log(l.substr(-5, 2));

console.log(l.includes("Web"));
console.log(l.includes("Web", 8));

console.log(l.startsWith("E"));
console.log(l.startsWith("E", 2));
console.log(l.startsWith("zero", 2));

console.log(l.endsWith("l"));

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let n = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(
  n.charAt(2).toUpperCase() + n.slice(n.indexOf("e"), n.indexOf("o") + 1)
); // Zero

// 8 H
console.log(n.charAt(n.indexOf("h")).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(n.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${n.substr(0, 6)} ${n.substr(n.indexOf("S"))}`); // Elzero School

// Solution Must Be Dynamic Because String May Change
console.log(
  `${n.charAt(n.indexOf(n)).toLowerCase()}${n
    .slice(n.indexOf(n) + 1)
    .toLocaleUpperCase()}`
); // eLZERO WEB SCHOOl

// ---------------
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 = 2**53
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 = 2**1024
console.log(Number.MAX_SAFE_INTEGER.toString().length);

// -----------
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57
// -------------
let num2 = 10;

console.log(Number.isInteger(num) + true); // 2
// ------------
// let min = 10;
// let max = 20;
// let random = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`Random number between ${min} and ${max}: ${random}`);

let max = 4;
console.log(Math.trunc(Math.random() * (max + 1))); // 0 || 1 || 2 || 3 || 4
// -------------
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
