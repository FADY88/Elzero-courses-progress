"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let theName = "Elzero";
theName = "Osama";
let all = 10;
all = 100;
all = "Osama";
// use type for object when declaring objects
const john = {
    name: "John",
    age: 30,
};
function getActions(btns) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
}
getActions({
    up: "Jump",
    right: "Go Right",
    down: "Go Down",
    left: "Go Left",
    x: true,
});
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1
let myNumber = 1;
/*
  Data Types
  - Tuple
  --- Is Another Sort Of Array Type
  --- We knows Exactly How Many Elements It Contains
  --- We Knows Which Types It Contains At Specific Positions
*/
let article = [11, "Title One", true];
article = [12, "Title Two", false];
// article.push(100);
console.log(article);
const [id, title, published] = article;
console.log(id);
console.log(title);
console.log(published);
/*
  Data Types
  - Void
  --- Function That Will Return Nothing
  --- Function In JavaScript That Not Return A Value Will Show undefined
  --- undefined is not void
  - Never
  --- Return Type Never Returns
  --- The Function Doesn't Have A Normal Completion
  --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
*/
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam A Message"));
console.log("Test");
const fail = (msg) => {
    throw new Error(msg);
    // return 10;
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
// alwaysLog("Osama");
// console.log("Test");
/*
  Data Types
  - Enums => Enumerations
  --- Allow Us To Declare A Set Of Named Constants
  --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
  --- It Organize Your Code
  --- By Default Enums Are Number-Based, First Element Is 0
  --- Theres A Numeric Enums
  --- Theres A String-Based Enums
  --- Theres Heterogeneous Enums [String + Number]
*/
/*
  Data Types
  - Enums => Enumerations
  --- Enum Can Refer To Other Enum
  --- Enum Can Refer To Same Enum
  --- Enum Can Have Calculations
  --- Enum Can Have Functions
*/
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
function getHardSeconds() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
}
/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesn't Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
  type assertion is like "hey TypeScript trust me"
  but with type annotation, TypeScript will check after you
*/
// let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement>document.getElementById("my-img");
// console.log(myImg.src);
let data = 1000;
function getActions2(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getActions2({ one: "String", two: 100, three: true, five: true });
/*
  Type Annotations With Object
*/
let myObject = {
    username: "Elzero",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS",
    },
};
// myObject.username = "Osama";
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
// Do Not Edit Here
let myData;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here
// Do Not Edit Here
let myInfo;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here
// Do Not Edit Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
// assignment 4
function yesOrNo(val) {
    return val > 10;
}
// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
function isHeOld(age) {
    if (age > 40) {
        return "Yes";
    }
    else {
        return "No";
    }
}
// Do Not Edit Here
// console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"
// assignment 6
let post = [100, "Title", true]; // Good
// post.push("Elzero"); // Error => Cant Add
// Create Destructuring Here
let [id2, title2, state] = post;
// Do Not Edit Here
console.log(id2); // 100
console.log(title2); // "Title"
console.log(state); // true
// assignment 7
// Create Enums + Function Here
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = getInsane(10)] = "Insane";
})(Game || (Game = {}));
function getInsane(n) {
    return Game.Hard - n;
}
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
// assignment 8
const user = {
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"],
    },
};
// We Need To Remove Error From This Edits
user.username = "Osama";
user.age = "40";
user.skills.backEnd.push(100);
//# sourceMappingURL=2.dataTypes.js.map