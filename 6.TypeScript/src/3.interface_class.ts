export {};
/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
  id?: number;
  readonly username: string;
  country: string;
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
};

user.country = "Syria";

console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Osama", country: "KSA" });

/*
  Interface
  - Interface Method And Parameters
*/

interface User2 {
  id: number;
  username: string;
  country: string;
  sayHello(): string;
  sayWelcome: () => string;
  getDouble(num: number): number;
}

let user2: User2 = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  sayHello() {
    return `Hello ${this.username}`;
  },
  sayWelcome: () => {
    return `Welcome ${user.username}`;
  },
  getDouble(n) {
    return n * 2;
  },
};

console.log(user2.id);
console.log(user2.sayHello());
console.log(user2.sayWelcome());
console.log(user2.getDouble(100));

/*
  Interface
  - ReOpen The Interface And Use Cases

  object types can't reopen
*/

// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface Settings {
  sidebar: boolean;
}

// Contact Page
interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};

/*
  Interface
  - Extending Interfaces
*/

interface User3 {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends User3, Moderator {
  protect?: boolean;
}

let user3: Admin = {
  id: 100,
  username: "Elzero",
  country: "Egypt",
  role: "Mod",
  protect: true,
};

console.log(user3.id);

/*
  Interface
  - Interface vs Type Aliases
  -- type aliases can't reopen
  == and don't extend but you can intersect two types
  == and can't implement them with classes
  - Take A Look On HTMLElement Interface
*/
// let el = document.getElementById("id") as HTMLElement;

/*
  Type Annotations With Class
*/

class client {
  u: string;
  s: number;
  msg: () => string;
  constructor(username: string, salary: number) {
    this.u = username;
    this.s = salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  sayMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new client("Fady", 12000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.sayMsg());

/*
  Class
  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - JavaScript Removes All Annotations And All Access Modifiers like "Private" or "protected"
*/

class client2 {
  // can add types at the beginning of the class
  private username: string;
  protected salary: number;
  msg: () => string;
  // or in constructor parameters
  constructor(
    username: string,
    salary: number,
    public readonly address: string
  ) {
    this.username = username;
    this.salary = salary;
    this.msg = function () {
      return `Hello ${this.username} Your Salary Is ${this.salary}`;
    };
  }
  sayMsg() {
    return `Hello ${this.username} Your Salary Is ${this.salary}`;
  }
}

let userTwo = new client2("Fady", 12000, "London");

// console.log(userTwo.username);
// console.log(userTwo.salary);
console.log(userTwo.msg());
console.log(userTwo.sayMsg());

/*
  Class
  - Get And Set Accessors
*/

class User4 {
  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }
  msg: () => string;
  // tip: right-click on parameter => refactor => generate getter and setter
  constructor(
    private _username: string,
    public salary: number,
    public readonly address: string
  ) {
    this.msg = function () {
      return `Hello ${this._username} Your Salary Is ${this.salary}`;
    };
  }
  sayMsg() {
    return `Hello ${this._username} Your Salary Is ${this.salary}`;
  }
  // get username() : string {
  //   return this._username;
  // }
  // set username(value: string) {
  //   this._username = value;
  // }
}

let user4 = new User4("Fady", 20000, "Massachusetts");

console.log(user4.username);
user4.username = "John";
console.log(user4.username);
console.log(user4.salary);
console.log(user4.msg());
console.log(user4.sayMsg());

/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

class User5 {
  private static created: number = 0;
  static getCount(): void {
    console.log(`${this.created} Objects Created`);
  }
  constructor(public username: string) {
    User5.created++;
  }
}

let u1 = new User5("Elzero");
let u2 = new User5("Web");
let u3 = new User5("School");
// console.log(User.created);
User5.getCount();

/*
  Class
  - Implement Interface
  can also implement another class
*/

interface Settings2 {
  theme: boolean;
  font: string;
  save(): void;
}

class User6 implements Settings2 {
  constructor(
    public username: string,
    public theme: boolean,
    public font: string
  ) {}
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}

let user6 = new User6("Elzero", true, "Open Sans");

console.log(user6.username);
console.log(user6.font);

user6.save();
user6.update();

/*
  interfaces are contracts that have to be respected by whomever IMPLEMENTS them
  while
  classes are small parts of my current class I need to EXTEND with (inherit from) them

  A class can extend another class and implement interfaces at the same time!
*/
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

interface CanFly {
  fly(): void;
}

class Bird extends Animal implements CanFly {
  fly() {
    console.log("Flying!");
  }
}

// assignment 1
// Edit The Interface To Fix The Problems
interface Member {
  id: number | string;
  username: string;
  country?: string;
  state: boolean;
  getName: () => string;
}

// Do Not Edit The Code Below
let user7: Member = {
  // Property 'country' is missing in type
  id: 100,
  username: "Elzero",
  state: true,
  getName() {
    // 'getName' does not exist in type 'Member'
    return this.username;
  },
};

user7.id = 200;
user7.id = "200"; // Type 'string' is not assignable to type 'number'
user7.state = false; // Cannot assign to 'state' because it is a read-only property

// assignment 2
// Create Interface Here
interface Client2 {
  id: number;
  username: string;
  active: boolean;
  discount: number;
  getPrice: (p: number) => number;
}
// Do Not Edit The Code Below
let client3: Client2 = {
  id: 100,
  username: "Elzero",
  active: true,
  discount: 10,
  getPrice(price: number) {
    return price - this.discount;
  },
};

console.log(`Client Id Is ${client3.id}`);
console.log(`Client Name Is ${client3.username}`);
console.log(`Client Has Dicount ${client3.discount}`);
console.log(`Client Product After Discount Is ${client3.getPrice(200)}`);

// assignment 3
interface Superman extends Man, Bird2 {
  bodyType: string;
  origin: string;
}
// Do Not Edit The Code Below
interface Man {
  title: string;
  weight: number;
  age: number;
}

interface Bird2 {
  canFly: boolean;
}

let creature: Superman = {
  title: "Superman",
  weight: 100,
  age: 500,
  canFly: true,
  bodyType: "Iron",
  origin: "Krypton",
};

// assignment 4
// Create Class Here
enum RoleType {
  Mage = "Mage",
  Archer = "Archer",
  Fighter = "Fighter",
  Assassin = "Assassin",
}
class Player {
  constructor(
    private username: string,
    private role: string,
    private level: number | string,
    private vip: boolean = false
  ) {}
  details() {
    return (
      (this.vip ? "VIP " : "") +
      `${this.username}, Type Is ${this.role} Level Is ${this.level}`
    );
  }
}
// Do Not Edit The Code Below
let player1 = new Player("Osama", "Mage", 90, true);
let player2 = new Player("Shady", "Archer", "85", false);
let player3 = new Player("Amr", "Fighter", 50, true);
let player4 = new Player("Mahmoud", "Assassin", 77);

console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77

// assignment 5
class Shorten {
  constructor(
    public id: number,
    public username: string,
    protected title: string
  ) {}
}

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);

// assignment 6
class Show {
  constructor(private _title: string) {}
  get title() {
    return this._title;
  }
  set title(newTitle: string) {
    this._title = newTitle;
  }
}

let tester2 = new Show("Elzero");
console.log("");

console.log(tester2.title); // Property 'title' does not exist on type 'Show'
tester2.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester2.title); // Property 'title' does not exist on type 'Show'

// assignment 7
interface Play {
  id: number;
  title: string;
  level: number | string;
  logIn(): void;
  logOut(msg: string): void;
}

// Create Your Class Here
class Gamer implements Play {
  constructor(
    public id: number,
    public title: string,
    public level: number | string
  ) {}
  logIn(): void {
    console.log("Logged in");
  }
  logOut(msg: string): void {
    console.log(`Logged Out` + (msg ? `, ${msg}` : ""));
  }
}

let player5 = new Gamer(100, "Elzero", 95);

console.log(player5.id); // 100
console.log(player5.title); // "Elzero"
console.log(player5.level); // 95
player5.logIn(); // Logged In
player5.logOut("Good Bye"); // Logged Out, Good Bye
