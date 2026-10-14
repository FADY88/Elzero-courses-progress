// assignment 2
let add = document.querySelector(".two > .classes-to-add");
let remove = document.querySelector(".two > .classes-to-remove");

add.onblur = function () {
  let classes = add.value.toLowerCase().split(" ");
  add.value = "";
  let current = document.querySelector("#result");
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].length > 0) current.classList.add(classes[i]);
  }
  generateSpans(current.classList);
};

remove.onblur = function () {
  let classes = remove.value.toLowerCase().split(" ");
  remove.value = "";
  let current = document.querySelector("#result");
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].length > 0) current.classList.remove(classes[i]);
  }
  generateSpans(current.classList);
};

function generateSpans(list) {
  let container = document.querySelector("div.classes-list > div");
  if (list.length === 0) {
    container.innerHTML = "No Classes To Show";
    return;
  }
  container.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let span = document.createElement("span");
    span.innerText = list[i];
    container.appendChild(span);
  }
}
// assignment 3
let three = document.querySelector(".three");
three.nextElementSibling.remove();

let before = document.createElement("div");
before.className = "start";
before.title = "Start Element";
before.setAttribute("data-Value", "Start");
before.innerText = "Start";
let after = document.createElement("div");
after.className = "end";
after.title = "End Element";
after.setAttribute("data-Value", "End");
after.innerText = "End";

three.before(before);
three.after(after);

// assignment 4
let four = document.querySelector("#four");
console.log(four.innerText.split(" ").pop());

// assignment 5
document.addEventListener("click", function (e) {
  console.log(`This is ${e.target.tagName}`);
});

// challenge
let main = document.querySelector("#challenge");
main.style.backgroundColor = "lightblue";
// header
let header = document.createElement("div");
header.style =
  "display: flex; justify-content: space-between; align-items: center; padding: 5px; margin-bottom: 5px;";
header.innerHTML = `
  <span style="color: #22A96E;">Elzero</span>
  <ul style="list-style-type: none; margin: 0; padding: 0; display: flex; justify-content: space-between; align-items: center; font-size: small;">
    <li style="margin: 0px 3px;">Home</li>
    <li style="margin: 0px 3px;">About</li>
    <li style="margin: 0px 3px;">Service</li>
    <li style="margin: 0px 3px;">Contact</li>
  </ul>
  `;
// content
let content = document.createElement("div");
content.style =
  "display: grid; grid-template-columns: repeat(3, calc(98% / 3)); grid-gap: 2% 1%;";
for (let i = 1; i <= 15; i++) {
  let ele = document.createElement("div");
  ele.style =
    "background-color: white; display: flex; flex-direction: column; justify-content: center; align-items: center;";
  ele.innerHTML = `<div>${i}</div><div style="font-size: 10px">Product</div>`;
  content.appendChild(ele);
}
// footer
let footer = document.createElement("div");
footer.style =
  "display: flex; justify-content: center; align-items: center; color: white; background-color: #22A96E; padding: 5px; margin-top: 5px;";
footer.innerText = "Copyright 2021";

main.append(header, content, footer);
