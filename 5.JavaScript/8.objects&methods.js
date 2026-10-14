/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  // Properties
  theName: "Osama",
  theAge: 38,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user2 = {
  theName: "Osama",
  country: "Egypt",
  "country of": "Egypt",
};

console.log(user2.theName);
console.log(user2.country); // user.country
console.log(user2["country"]); // user.country
console.log(user2.myVar); // user.country
console.log(user2[myVar]); // user.country

/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let User = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(User.name);
console.log(User.age);
console.log(User.skills);
console.log(User.skills.join(" | "));
console.log(User.skills[2]); // Access With Index
console.log(User.addresses.ksa);
console.log(User.addresses.egypt.one);
console.log(User["addresses"].egypt.one);
console.log(User["addresses"]["egypt"]);
console.log(User["addresses"]["egypt"]["one"]);

console.log(User.checkAv());

/*
  Object
  - Create With New Keyword new Object();
*/

let user3 = new Object({
  age: 20,
});

console.log(user);

user3.age = 38;
user3["country"] = "Egypt";

user3.sayHello = function () {
  return `Hello`;
};

console.log(user3);
console.log(user3.age);
console.log(user3.country);
console.log(user3.sayHello());

/*
  ⭕⭕⭕⭕⭕⭕⭕
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user4 = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user4.age);
console.log(user4.ageInDays());

/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);

// assignment 1

// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: () =>
    `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`,
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// assignment 2

// Method One
let objMethodOne = { property: "Method One" };

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = Object({ property: "Method Two" });

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create({ property: "Method Three" });

console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.assign({}, { property: "Method Four" });

console.log(objMethodFour.property); // "Method Four"

// assignment 3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
let finalObject2 = Object.assign({ a: a }, threeNums, twoNums);

console.log(finalObject2);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

// assignment 4

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let propertyList = Object.getOwnPropertyNames(myFavGames);
let objectLength = propertyList.length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${propertyList[i]}`);
  console.log(`The Publisher Is ${myFavGames[propertyList[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[propertyList[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (Object.hasOwn(myFavGames[propertyList[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[propertyList[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[propertyList[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[propertyList[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
