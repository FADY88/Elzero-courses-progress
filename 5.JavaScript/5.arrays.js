/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends));

/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
// this will add fady as 6th element and 2 empty element before it
// myFriends[7] = "fady";

myFriends.length = 2;

console.log(myFriends);

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);

myFriends.unshift("Osama", "Nabil");

console.log(myFriends);

myFriends.push("Samah", "Eman");

console.log(myFriends);

let first = myFriends.shift();

console.log(myFriends);

console.log(`First Name Is ${first}`);

let last = myFriends.pop();

console.log(myFriends);

console.log(`Last Name Is ${last}`);

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));

console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed", 2));

if (myFriends.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(myFriends.indexOf("Osama"));
console.log(myFriends.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort().reverse());

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End) don't mutate the array
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mandatory], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  - mutate the array
  --- If Negative => Start From The End
*/

myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -2));
console.log(myFriends);

myFriends.splice(1, 2, "Sameer", "Samara");

console.log(myFriends);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

/*
  Array Challenge
*/
console.log("start of challenge");

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my.pop();
my.pop();
console.log(my.reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
my.shift();
my.pop();
console.log(my); // ["Elham", "Mazero"]
let elham = my.shift();
let mazero = my[zero];
let elzero =
  elham.slice(zero, elham.indexOf("h")) + mazero.slice(mazero.indexOf("z"));
console.log(elzero); // "Elzero"

elzero = elzero.split("");
let O = elzero.pop().toUpperCase();
let r = elzero.pop();
console.log(r + O); // "rO"

// assignment
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrTwo.pop(), arrOne.reverse(), arrTwo.reverse());
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

words = words.pop();
words = words.shift();

console.log(words.slice(website.length).toUpperCase()); // ZERO

// ----
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("found");
}
if (haystack.indexOf(needle) != -1) {
  console.log("found");
}
if (haystack.lastIndexOf(needle) != -1) {
  console.log("found");
}
// ---
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
let x = arr1.pop();
let y = arr2.pop();
let f = arr2.pop();

console.log(`${(f + x + y).toLowerCase()}`); // fxy
