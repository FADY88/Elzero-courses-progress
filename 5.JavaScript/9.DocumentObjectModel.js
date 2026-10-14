/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

console.log(document.getElementsByClassName("div1")[0].attributes);

let myP = document.getElementsByClassName("div1")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByClassName("div1")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}
/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myNewElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myNewElement.className = "product";
myNewElement.setAttributeNode(myAttr);
myNewElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myNewElement.appendChild(myComment);

// Append Text To Element
myNewElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myNewElement);

/*
  DOM [create elements]
  - practice product with heading and paragraph

  <div class="product">
    <h3>
      Text
      <p>Text Two</p>
    </h3>
  </div>

  times 100
*/
let div2 = null;
for (let i = 1; i <= 100; i++) {
  div2 = document.createElement("div");
  // div2.className = "product";
  div2.setAttribute("class", `product${i}`);
  div2.innerHTML = `<h3>Text</h3>
                    <p>Text Two</p>`;
  document.body.appendChild(div2);
}

// elzero solution
/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/
for (let i = 1; i <= 100; i++) {
  let myMainElement = document.createElement("div");
  let myHeading = document.createElement("h2");
  let myParagraph = document.createElement("p");

  let myHeadingText = document.createTextNode("Product Title");
  let myParagraphText = document.createTextNode("Product Description");

  // Add Heading Text
  myHeading.appendChild(myHeadingText);
  // Add Heading To Main Element
  myMainElement.appendChild(myHeading);
  // Add Paragraph Text
  myParagraph.appendChild(myParagraphText);
  // Add Paragraph To Main Element
  myMainElement.appendChild(myParagraph);

  myMainElement.className = "product";

  document.body.appendChild(myMainElement);
}

/*
  DOM [Deal With Children]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement2 = document.querySelector("#child");

console.log(myElement2);
console.log(myElement2.children);
console.log(myElement2.children[0]);
console.log(myElement2.childNodes);
console.log(myElement2.childNodes[0]);

console.log(myElement2.firstChild);
console.log(myElement2.lastChild);

console.log(myElement2.firstElementChild);
console.log(myElement2.lastElementChild);

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log("WOW from JS file");
};

myBtn.onmouseleave = function () {
  console.log("This will show when mouse leave the button");
};

window.onresize = function () {
  console.log("Scroll");
};

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

document.getElementById("test-form").onsubmit = function (e) {
  let userInput = document.querySelector("[name='username']");
  let ageInput = document.querySelector("[name='age']");

  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.getElementById("google").onclick = function (event) {
  console.log(event);
  event.preventDefault();
};

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div2");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
};

/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/
// will element from before

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: green; opacity: 0.9;";

element.style.removeProperty("color");
element.style.setProperty("font-size", "20px", "important");

document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
document.styleSheets[0].cssRules[0].style.setProperty(
  "background-color",
  "red",
  "important"
);

/*
  DOM [Deal With Elements]
  - before [...(Element || String)]
  - after [...(Element || String)]
  - append [...(Element || String)]
  - prepend [...(Element || String)]
  - remove
*/

let element2 = document.getElementById("my-div3");
let createdP = document.createElement("p");

element2.before("hello from JS");

// element.remove();
// appendChild appends one child while append() can append multiple at once
// element.appendChild(node);

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".two");

// console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.remove();
};

/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP3 = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP3.id = `${myP3.id}-clone`;

myDiv.appendChild(myP3);

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myP2 = document.getElementById("p2");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama"; // will not give error even though that's wrong

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

myP2.onclick = function () {
  let newP = myP2.cloneNode(true);
  newP.className = "clone";
  myP2.after(newP);
  newP.addEventListener("click", () => console.log("cloned"));
};

// after loading cloned isn't created yet
// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});
