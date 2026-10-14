/*
  Constructor Function
*/

// create object constructor
function User0(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}

// add methods to object
User0.prototype.msg = function () {
  return "hello world";
};

let userOne = new User0(100, "Elzero", 5000);
let userTwo = new User0(101, "Hassan", 6000);
let userThree = new User0(102, "Sayed", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

/*
  Constructor Function
  - New Syntax
*/

class User2 {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne2 = new User2(100, "Elzero", 5000);

console.log(userOne2.i);
console.log(userOne2.u);
console.log(userOne2.s);

console.log(userOne2 instanceof User2);
console.log(userOne2.constructor === User2);

/*
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let userOne3 = new User(100, "Elzero", 5000);
let userTwo3 = new User(101, "", 6000);

console.log(userOne3.u);
console.log(userOne3.s);
console.log(userOne3.msg());
console.log(userOne3.writeMsg());

console.log(userTwo3.u);
console.log(userTwo3.s);
console.log(userTwo3.msg); // Native Code
console.log(userTwo3.writeMsg); // Native Code

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

let userOne4 = new User(100, "Elzero", 5000);

console.log(userOne4.u);
userOne4.updateName("Osama");
console.log(userOne4.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

/*
  Class
  - Static Properties And Methods
*/

class UserM {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    UserM.count++;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne5 = new UserM(100, "Elzero", 5000);
let userTwo5 = new UserM(101, "Ahmed", 5000);
let userThree5 = new UserM(102, "Sayed", 5000);

console.log(userOne5.u);
console.log(userTwo5.u);
console.log(userOne5.count);
console.log(UserM.count);
console.log(UserM.sayHello());
console.log(UserM.countMembers());

/*
  Class
  - Inheritance
*/

// Derived Class
class Admin extends UserM {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne6 = new UserM(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne6.u);
console.log(userOne6.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class UserP {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOneP = new UserP(100, "Elzero", "5000 Gneh");

console.log(userOneP.u);
console.log(userOneP.getSalary() * 0.3);

class UserT extends UserP {
  constructor(id, username, s) {
    super(id, username, s);
    this.private = super.getSalary();
  }
}

console.log(new UserT(3, "fady", 12000));

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

console.log(userOne.u);

console.log(User.prototype);

console.log(String.prototype);

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User7 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOn = new User7(100, "Elzero");
console.log(userOn.u);
console.log(User.prototype);
console.log(userOn);

User7.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function () {
  return `.${this}.`;
};

let myString = "Elzero";

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false,
  enumerable: true,
  configurable: false,
  value: 3,
});

// Object.defineProperty(myObject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, <= Cannot redefine property
//   value: 3,
// });

myObject.c = 100;

console.log(delete myObject.c);

// for...in (works on objects), for...of (works on Array, Map, Set, arguments object)
for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log(myObject);

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject2 = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject2, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject2);

console.log(Object.getOwnPropertyDescriptor(myObject2, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject2));

// assignment 1
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return "Car is running";
  }
  stop() {
    return "Car is stopped";
  }
}
let car = new Car("MG", "2022", 420000);
console.log(
  `Car one name is ${car.n} and model is ${car.m} and price is ${car.p}`
);
console.log(car.run());
// Needed Output

("Car One Name Is MG And Model Is 2022 And Price Is 420000");
("Car Is Running Now");

// assignment 2
class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

// Write Tablet Class Here
class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }
  fullDetails() {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// assignment 3
// Edit The Class
class User8 {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card
      .toString()
      .match(/\d{4}/g)
      .reduce(function (acc, curr) {
        return acc + "-" + curr;
      });
  }
  get showData() {
    return `Hello ${this.u} Your Credit Card Number Is ${this.#c}`;
  }
}

// Do Not Edit Anything Below

let user1 = new User8("Osama", "1234-5678-1234-5678");
let user2 = new User8("Ahmed", "1234567812345678");
let user3 = new User8("Ghareeb", 1234567812345678);

console.log(user1.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(user2.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(user3.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(user1.c); // Prevent Accessing To Card Property Here
// Undefined

// assignment 4
// Write Your Code Here
String.prototype.addLove = function () {
  return `I Love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// assignment 5
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  id: {
    enumerable: false,
  },
  score: {
    writable: false,
  },
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  if (prop === "love") continue;
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}
