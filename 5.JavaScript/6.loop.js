/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}
console.log(onlyNames);

/*
  Loop Control
  - Break
  - Continue
  🔴🔴🔴🔴🔴
  new concept for me in high level languages, of course I know it exists in assembly
  - Label
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}

/*
  Loop
  - While
*/

let products2 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < products2.length) {
  console.log(products2[index]);
  index += 1;
}

/*
  Loop
  - Do / While
*/

let products3 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

document.writeln(`<div>We Have ${myAdmins.indexOf("Stop")} Admins</div>`);
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i].toLowerCase() === "stop") break;
  document.writeln("<hr>");
  document.writeln("<div>");
  document.writeln(`The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
  document.writeln("<h3>Team Members:</h3>");
  let num = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myAdmins[i][0].toLowerCase() === myEmployees[j][0].toLowerCase()) {
      document.writeln(`<p>- ${num} ${myEmployees[j]}</p>`);
      num++;
    }
  }
  document.writeln("</div>");
}

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0, counter = 1; i < friends.length; i++) {
  if (friends[i][0].toLowerCase() !== letter) {
    console.log(`${counter} => ${friends[i]}`);
    counter++;
  }
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// -------
let start = 0;
let swappedName = "elZerO";

let newName = "";
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase())
    newName += swappedName[i].toLowerCase();
  else if (swappedName[i] === swappedName[i].toLowerCase())
    newName += swappedName[i].toUpperCase();
}
console.log(newName);
// Output
// "ELzERo"

// ----
let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index2 = 0;
let counter = 0;

for (let i = index2, counter = 1; i < friends.length; i++) {
  if (
    typeof friends2[i] !== "number" &&
    friends2[i].trim()[0].toLowerCase() !== "a"
  ) {
    console.log(`${counter} => ${friends2[i]}`);
    counter++;
  }
}
// Output
// "1 => Sayed"
// "2 => Mahmoud"
