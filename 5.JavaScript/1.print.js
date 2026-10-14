/*
  Output To Screen
  - window.alert()
  - document.write()
  - console.log()

  Syntax


  styling console
  -Directive %c
*/

// window.alert("Hello From JS File");

// don't use write(), it's deprecated
// document.write("<h1>Hello <span>Page</span></h1>");

// writes to console
console.log("Hello From JS File");

// writes error to console
console.error("Error");

// writes array as table in console
console.table(["fady", "adel", "fayed"]);

console.log(
  "Hello from %cJS %cfile",
  "color: purple; font-size: 40px;",
  "color: blue; font-size: 40px;"
);
// assignment 1
document.write("<h1 id='test'>Elzero</h1>");
window.onload = function () {
  document.getElementById("test").style.color = "blue";
  document.getElementById("test").style.fontSize = "80px";
  document.getElementById("test").style.textAlign = "center";
  document.getElementById("test").style.fontFamily = "Arial";
};
// assignment 2
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold;",
  "color: blue; font-size: 40px;"
);
// assignment 3
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Child Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
// assignment 3
console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);
