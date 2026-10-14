/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

// let regex = new RegExp("elzero", "gi");
let regex = /elzero/gi;

console.log(myString.match(regex));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]
*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

// part 2
let stringT = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-zA-Z]/g;
let specialRe = /[^a-zA-Z0-9]/g;
console.log(stringT.match(atozSmall));

let testRe = /\w@\w.(com|net)/g;

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/gi.test("Osama"));
console.log(/(\bspam|spam\b)/gi.test("1Spam"));
console.log(/(\bspam|spam\b)/gi.test("Spam1"));

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let nums2 = "0110 10 150 05120 0560 350 00 090"; // 0 Numbers Or No 0
let numsRe2 = /0\d*0/gi;
console.log(nums2.match(numsRe2));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString2 = "We Love Programming";
let names2 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString2));
console.log(/^we/gi.test(myString2));
console.log(/lz$/gi.test(names2));
console.log(/^\d/gi.test(names2));

console.log(names2.match(/\d\w{5}(?=Z)/gi));
console.log(names2.match(/\d\w{8}(?!Z)/gi));

/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re2 = /@/gi;
console.log(txt.replaceAll(re2, "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));

/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
};

/*
  Regular Expression
  - Challenge
*/

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re3 = /(https?:\/\/)?(www.)?\w+.org(:\d+\/\w+.php\?id=\d+&\w+=\w+)?/g;
console.log(url1.match(re3));
console.log(url2.match(re3));
console.log(url3.match(re3));
console.log(url4.match(re3));
console.log(url5.match(re3));

// assignment 1
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(ip.match(/^[0-9a-fA-F]{3,4}(:[0-9a-fA-F]{3,4})*/g));

// assignment 2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/Os(\d)*O/g));
// Output
// ['Os10O', 'OsO', 'Os100O']
// assignment 3
let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3} \(\d{4}\)/g));

// assignment 3
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re4 = /(\d{1,2}(\/| - | )){2}(\d{4}|\d{2})/g; // Write Pattern Here
console.log(date1.match(re4)); // "25/10/1982"
console.log(date2.match(re4)); // "25 - 10 - 1982"
console.log(date3.match(re4)); // "25 10 1982"
console.log(date4.match(re4)); // "25 10 82"
