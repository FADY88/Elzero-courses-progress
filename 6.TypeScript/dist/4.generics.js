"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/
class Food {
    constructor(title) {
        this.title = title;
    }
}
class Pizza extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Pizza Is 1 Hour`);
    }
}
class Burger extends Food {
    constructor(title, price) {
        super(title);
        this.price = price;
    }
    getCookingTime() {
        console.log(`Cooking Time For Burger Is Half Hour`);
    }
}
let pizzaOne = new Pizza("Awesome Pizza", 100);
console.log(pizzaOne.title);
console.log(pizzaOne.price);
pizzaOne.getCookingTime();
/*
  Class
  - Polymorphism & Method Override

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  --- noImplicitOverride
*/
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking Now");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        // super.attack();
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name);
        this.axeDurability = axeDurability;
    }
    attack() {
        // super.attack();
        console.log("Attacking With Axe");
        this.axeDurability -= 1;
    }
}
let barOne = new Barbarian("Elzero", 100);
console.log(barOne.name);
barOne.attack();
console.log(barOne.axeDurability);
/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/
function returnNumber(val) {
    return val;
}
function returnString(val) {
    return val;
}
function returnBoolean(val) {
    return val;
}
console.log(returnNumber(100));
console.log(returnString("Elzero"));
console.log(returnBoolean(true));
function returnType(val) {
    return val;
}
console.log(returnType(100));
console.log(returnType("Elzero"));
console.log(returnType(true));
console.log(returnType([1, 2, 3, 4]));
/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/
console.log(returnType(100));
console.log(returnType("Elzero"));
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("Elzero"));
function testType(val) {
    return `The Value Is ${val} And Type Is ${typeof val}`;
}
console.log(testType(100));
console.log(testType("Elzero"));
function multipleTypes(valueOne, valueTwo) {
    return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}
console.log(multipleTypes("Osama", 100));
console.log(multipleTypes("Elzero", true));
/*
  Generics
  - Classes
*/
class User {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`${msg} - ${this.value}`);
    }
}
let userOne = new User("Elzero");
console.log(userOne.value);
userOne.show("Message");
let userTwo = new User(100);
console.log(userTwo.value);
userTwo.show("Message");
class Collection {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
}
let itemOne = new Collection();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);
let itemTwo = new Collection();
itemTwo.add({
    itemType: "Game",
    title: "Uncharted",
    style: "Action",
    price: 150,
});
console.log(itemTwo);
class Game2 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
// Start Edit And Fix
class RPG extends Game2 {
    constructor(title, price, rate) {
        super(title, price);
        this.price = price;
        this.rate = rate;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
class Action extends Game2 {
    constructor(title, price, rate, company) {
        super(title, price);
        this.price = price;
        this.rate = rate;
        this.company = company;
    }
    getLocation() {
        return "Location";
    }
    getDiscount() {
        return "Discount";
    }
}
// End Edit And Fix
// Do Not Edit
let gameOne = new RPG("Ys", 100, 10);
let gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"
console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
// assignment 2
// Write Function Code Here
function showTypes2(x, y, z) {
    return `${x ? x : "Nothing"} - ${y ? y : "Nothing"} - ${z ? z : "Nothing"}`;
}
console.log("");
// Do Not Edit Here
console.log(showTypes2()); // Nothing - Nothing - Nothing
console.log(showTypes2("String")); // String - Nothing - Nothing
console.log(showTypes2("String", 100)); // String - 100 - Nothing
console.log(showTypes2("String", 100, true)); // String - 100 - true
// assignment 3
// Write Class Code Here
class Game3 {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getDiscount(dis) {
        console.log(`The Discount is ${dis}`);
    }
}
// Do Not Edit Here
let game1 = new Game3("Ys", 100);
let game2 = new Game3(2064, 100); // There's A Game Called "2064"
console.log(game1.title); // "Ys"
console.log(game1.price); // 100
game1.getDiscount("50"); // "The Discount Is 50"
console.log(game2.title); // 2064
console.log(game2.price); // 100
game2.getDiscount(80); // "The Discount Is 80"
//# sourceMappingURL=4.generics.js.map