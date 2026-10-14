/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

function sayHello(userName) {
  console.log(`Hi ${userName}`);
}

// when argument isn't available it will be undefined
sayHello();
sayHello("Sayed");
// functions return undefined by default
console.log(sayHello("Ali"));

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}

generate(10, 20);

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = true, ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show) {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, true, "Html", "CSS");

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/
function showDetails(a, b, c) {
  let name = typeof a === "string" ? a : typeof b === "string" ? b : c;
  let age = typeof a === "number" ? a : typeof b === "number" ? b : c;
  let status = typeof a === "boolean" ? a : typeof b === "boolean" ? b : c;

  if (status)
    return `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`;
  else
    return `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`;
}

console.log(showDetails("Osama", 38, true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(38, "Osama", true)); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(true, 38, "Osama")); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
console.log(showDetails(false, "Osama", 38)); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// --------
function sayHello2(theName, theGender) {
  if (theGender === undefined) return `Hello ${theName}`;
  if (theGender.toLowerCase() === "male") return `Hello Mr ${theName}`;
  if (theGender.toLowerCase() === "female") return `Hello Miss ${theName}`;
}

// Needed Output
console.log(sayHello2("Osama", "Male")); // "Hello Mr Osama"
console.log(sayHello2("Eman", "Female")); // "Hello Miss Eman"
console.log(sayHello2("Sameh")); // "Hello Sameh"

// ---------
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("second Number is not found");
    return;
  }
  switch (operation) {
    case "subtract":
      return firstNum - secondNum;
    case "multiply":
      return firstNum * secondNum;
    case "add":
    default:
      return firstNum + secondNum;
  }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Months : ${theAge * 12}`);
    console.log(`Weeks  : ${theAge * 12 * 4}`);
    console.log(`Days   : ${theAge * 12 * 4 * 7}`);
    console.log(`Hours  : ${theAge * 12 * 4 * 7 * 24}`);
    console.log(`Minute : ${theAge * 12 * 4 * 7 * 24 * 60}`);
    console.log(`Seconds: ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
// ------
function createSelectBox(startYear, endYear) {
  document.writeln('<label for="years">Choose year of birth </label>');
  document.writeln('<select name="years" id="cars">');
  for (let i = startYear; i <= endYear; i++) {
    document.writeln(`<option value="${i}">${i}</option>`);
  }
  document.writeln("</select>");
}
createSelectBox(2000, 2021);

// -----------
function multiply(...numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      product *= Math.trunc(numbers[i]);
    }
  }
  return product;
}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); // 1000

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}

document.getElementById("show").onclick = sayHello;

setTimeout(function elzero() {
  console.log("Good");
}, 2000);

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print1 = function () {
  return 10;
};

let print2 = () => 10;

let print3 = function (num) {
  return num;
};

let print4 = (num) => num;

let print5 = function (num1, num2) {
  return num1 + num2;
};

let print6 = (num1, num2) => num1 + num2;

console.log(print6(100, 50));

/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
  // since a and b will be declared here the JS engine will check for them
  // and will give error because they're used before initialization
  var a = 10;
  let b = 20;
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

// showText(); // error

/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    console.log(`From Child ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}

parent();

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...names) {
//   return `String [${names.join("], [")}] => Done !`;
// };

let names = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc2 = (one, two, ...nums) => two + nums.shift();

let calc2 = function (one, two, ...nums) {
  return two + nums.shift();
};
console.log(calc2(10, myNumbers.shift(), myNumbers.pop())); // 80

// assignment
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
    zName = zName.split(" ");
    return `${zName[0]} ${zName[1][0].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
    return `Your Age Is ${zAge.split(" ")[0]}`;
  }
  function countryTwoLetters(zCountry) {
    // Egypt => You Live In EG
    // Syria => You Live In SY
    return zCountry.slice(0, 2).toUpperCase();
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(
      zAge
    )}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// ----------
// function itsMe() {
//   return `Iam A Normal Function`;
// }
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// ------------
// convert this function to an arrow function
// function checker(zName) {
//   return function (status) {
//     return function (salary) {
//       return status === "Available"
//         ? `${zName}, My Salary Is ${salary}`
//         : `Iam Not Avaialble`;
//     };
//   };
// }

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// ---------
function specialMix(...data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    if (isNaN(parseInt(data[i]))) continue;
    sum += parseInt(data[i]);
  }
  return sum === 0 ? "All Is Strings" : sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
  .join("");

console.log(sw);

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});

console.log(inv);

let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign);

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let sent = sentence
  .split(" ")
  .filter((el) => el.length > 4)
  .join(" ");
console.log(sent);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let ans = mix
  .split("")
  .filter((el) => !isNaN(parseInt(el)))
  .map((el) => el * el);

console.log(ans);

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let add2 = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5);

console.log(add2);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

console.log(
  theBiggest.reduce((acc, curr) => (acc.length < curr.length ? curr : acc))
);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

console.log(
  removeChars.filter((el) => el !== "@").reduce((acc, curr) => acc + curr)
);

// forEach()

let allDivs = document.querySelectorAll("div");

document.getElementById("hide").onclick = () =>
  // el.style.display = "none";
  allDivs.forEach((el) => el.setAttribute("hidden", true));

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
  };
});

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter((el, i, arr) => isNaN(el) && i + 1 !== arr.length)
  .map((el) => (el === "_" ? " " : el.length > 1 ? el.charAt(true) : el))
  .reduce((acc, curr) => acc + curr);

console.log(solution); // Elzero Web School

// assignment
let mix2 = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

console.log(
  mix2.map((el) => (isNaN(el) ? el : "")).reduce((acc, curr) => acc + curr)
);
// Elzero

let myString2 = "EElllzzzzzzzeroo";

console.log(
  myString2
    .split("")
    .reduce((acc, curr) => (acc.at(-1) === curr ? acc : acc + curr))
);
// Elzero

let myArray = ["E", "l", "z", ["e", "r"], "o"];

console.log(
  myArray
    .map((el) =>
      Array.isArray(el) ? el.reduce((acc, curr) => acc + curr) : el
    )
    .reduce((acc, curr) => acc + curr)
);
// Elzero

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

console.log(numsAndStrings.filter((el) => !isNaN(el)).map((el) => -el));
// [-1, -10, 10, 20, -5, -3]

let nums2 = [2, 12, 11, 5, 10, 1, 99];

console.log(
  nums2.reduce((acc, curr) => (curr % 2 === 0 ? acc * curr : acc + curr), 1)
);
// 500
