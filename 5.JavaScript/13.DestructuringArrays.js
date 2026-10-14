/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);
console.log(z);

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends2 = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [a1, , [, b1]]] = myFriends2;

console.log(a1); // Shady
console.log(b1); // Gamal

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);

/*
  Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
const { theName, theAge, theCountry } = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user1 = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n,
  theAge: a2,
  theCountry: country,
  theColor: co = "Red",
  skills: { html: h, css },
} = user1;

console.log(n);
console.log(a2);
console.log(country);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user1.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

/*
  Destructuring
  - Destructuring Function Parameters
*/

showDetails(user1);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user1) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}

/*
  Destructuring
  - Destructuring Mixed Content
*/

const user2 = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

let {
  theName: name,
  theAge: age,
  skills: [ht, cs, j],
  addresses: { egypt: eg },
} = user2;

console.log(`name   : ${name}`);
console.log(`age    : ${age}`);
console.log(`skills : ${ht}, ${cs}, ${j}`);
console.log(`address: ${eg}`);

/*
  Destructuring
  - Challenge
*/

let chosen = 2;

let myFriends3 = [
  { title: "fady", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  let [
    {
      title: n,
      age,
      available: ava,
      skills: [, lastSkill],
    },
  ] = myFriends3;
  print(n, age, ava, lastSkill);
} else if (chosen === 2) {
  let [
    ,
    {
      title: n,
      age,
      available: ava,
      skills: [, lastSkill],
    },
  ] = myFriends3;
  print(n, age, ava, lastSkill);
} else {
  let [
    ,
    ,
    {
      title: n,
      age,
      available: ava,
      skills: [, lastSkill],
    },
  ] = myFriends3;
  print(n, age, ava, lastSkill);
}

function print(n, age, ava, lastSkill) {
  console.log(n);
  console.log(age);
  ava ? console.log("Available") : console.log("Not Available");
  console.log(lastSkill);
}

// assignment 1

let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a3, , , , e3] = myNumbers;

console.log(a3 * e3); // 5

// assignment 2
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here
let [a5, b5, c5, [d5, e5, [f5, g5]]] = mySkills;

console.log(`My Skills: ${a5}, ${b5}, ${c5}, ${d5}, ${e5}, ${f5}, ${g5}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// assignment 3
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
arr1 = arr1.concat(arr3);
console.log(arr1);
// Write Your Destructuring Assignment Here
let [c8, , , , a8, b8] = arr1;
console.log(`My Best Friends: ${a8}, ${b8}, ${c8}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// assignment 4
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
let {
  age: a4,
  working: w4,
  country: c4,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a4} And Iam ${w4 ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c4}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// assignment 5
function assign5() {
  const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };

  // Write Your Destructuring Assignment/s Here
  let {
    title: t,
    developer: d,
    releases: {
      ["Oath In Felghana"]: [u, j],
      ["Ark Of Napishtim"]: { US: u_price, JAP: j_price },
      Origin: or,
    },
  } = game;

  let [o, a] = Object.keys(game.releases);
  console.log("############");

  console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style

  console.log(`And I Love ${d} Games`);
  // And I Love Falcom Games

  console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
  // My Best Release Is Oath In Felghana It Released in USA & Japan

  console.log(`Although I Love ${a}`);
  // Although I Love Ark Of Napishtim

  console.log(`${a} Price in USA Is ${u_price}`);
  // Ark Of Napishtim Price in USA Is 20 USD

  console.log(`${a} Price in Japan Is ${j_price}`);
  // Ark Of Napishtim Price in Japan Is 10 USD

  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD
}
assign5();
