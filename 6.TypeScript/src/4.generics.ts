export {};

/*
  Class
  - Abstract Classes And Members
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
  constructor(public title: string) {}
  abstract getCookingTime(): void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
    console.log(`Cooking Time For Pizza Is 1 Hour`);
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }
  getCookingTime(): void {
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
  constructor(public name: string) {}
  attack(): void {
    console.log("Attacking Now");
  }
}

class Amazon extends Player {
  constructor(name: string, public spears: number) {
    super(name);
  }
  override attack(): void {
    // super.attack();
    console.log("Attacking With Spear");
    this.spears -= 1;
  }
}

class Barbarian extends Player {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }
  override attack(): void {
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

function returnNumber(val: number): number {
  return val;
}
function returnString(val: string): string {
  return val;
}
function returnBoolean(val: boolean): boolean {
  return val;
}

console.log(returnNumber(100));
console.log(returnString("Elzero"));
console.log(returnBoolean(true));

function returnType<T>(val: T): T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));

/*
  Generics
  - Arrow Function
  - Multiple Types
  - Discussion
*/

console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));

const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<number>(100));
console.log(returnTypeArrowSyntax<string>("Elzero"));

function testType<T>(val: T): string {
  return `The Value Is ${val} And Type Is ${typeof val}`;
}

console.log(testType<number>(100));
console.log(testType<string>("Elzero"));

function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
  return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
}

console.log(multipleTypes<string, number>("Osama", 100));
console.log(multipleTypes<string, boolean>("Elzero", true));

/*
  Generics
  - Classes
*/

class User<T = string> {
  constructor(public value: T) {}
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

let userOne = new User<string>("Elzero");
console.log(userOne.value);
userOne.show("Message");

let userTwo = new User<number | string>(100);
console.log(userTwo.value);
userTwo.show("Message");

/*
  Generics
  - Classes And Interfaces
*/

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({
  itemType: "Game",
  title: "Uncharted",
  style: "Action",
  price: 150,
});
console.log(itemTwo);

// assignment 1
// Do Not Edit
type numOrString = number | string;

abstract class Game2 {
  constructor(public title: string, public price: numOrString) {}
  abstract getLocation(): string;
  abstract getDiscount(): string;
}

// Start Edit And Fix
class RPG extends Game2 {
  constructor(title: string, public price: numOrString, public rate: number) {
    super(title, price);
  }
  getLocation(): string {
    return "Location";
  }
  getDiscount(): string {
    return "Discount";
  }
}

class Action extends Game2 {
  constructor(
    title: string,
    public price: numOrString,
    public rate: number,
    public company: string
  ) {
    super(title, price);
  }
  getLocation(): string {
    return "Location";
  }
  getDiscount(): string {
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
function showTypes2<x = void, y = void, z = void>(x?: x, y?: y, z?: z): string {
  return `${x ? x : "Nothing"} - ${y ? y : "Nothing"} - ${z ? z : "Nothing"}`;
}
console.log("");
// Do Not Edit Here
console.log(showTypes2()); // Nothing - Nothing - Nothing
console.log(showTypes2<string>("String")); // String - Nothing - Nothing
console.log(showTypes2<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes2<string, number, boolean>("String", 100, true)); // String - 100 - true

// assignment 3
// Write Class Code Here
class Game3<T> {
  constructor(public title: T, public price: number) {}
  getDiscount(dis: T): void {
    console.log(`The Discount is ${dis}`);
  }
}
// Do Not Edit Here
let game1 = new Game3<string>("Ys", 100);
let game2 = new Game3<number>(2064, 100); // There's A Game Called "2064"

console.log(game1.title); // "Ys"
console.log(game1.price); // 100
game1.getDiscount("50"); // "The Discount Is 50"

console.log(game2.title); // 2064
console.log(game2.price); // 100
game2.getDiscount(80); // "The Discount Is 80"
