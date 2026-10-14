// assignment 1
let imgs = document.querySelectorAll(".one > img");
for (let i = 0; i < imgs.length; i++) {
  // imgs[i].setAttribute(
  //   "src",
  //   "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  // );
  imgs[i].src = "./style/JS.png";
  imgs[i].alt = "JavaScript Logo";
}

// assignment 2
let dollarRate = 15.6;
let crisisBtn = document.getElementById("crisis");
crisisBtn.onclick = function () {
  dollarRate = dollarRate === 50.6 ? 15.6 : 50.6;
  crisisBtn.innerText =
    crisisBtn.innerText === "After crisis" ? "Before crisis" : "After crisis";
  // can simulate event of other element as a function
  form1.onchange();
};
let form1 = document.getElementById("two");
form1.onkeyup = form1.onchange = function () {
  let value = form1.firstElementChild.value;
  value = value < 0 ? 0 : value;
  form1.lastElementChild.innerHTML = `{${value}} USD Dollar = {${(
    value * dollarRate
  ).toFixed(2)}} Egyptian Pound`;
};
form1.onsubmit = (event) => event.preventDefault();

// assignment 3
let three = document.querySelectorAll(".three > div");
let tmp = three[0].title;
three[0].title = three[1].title;
three[1].title = tmp;

tmp = three[0].innerText;
three[0].innerText = three[1].innerText;
three[1].innerText = tmp + " 2";

// assignment 4
let four = document.querySelectorAll(".four > img");
for (let i = 0; i < four.length; i++) {
  if (four[i].hasAttribute("alt")) four[i].setAttribute("alt", "Old");
  else four[i].setAttribute("alt", "Elzero New");
}

// assignment 5
let five = document.querySelector(".five");
console.log(five.firstElementChild);
five.firstElementChild.onsubmit = function (event) {
  event.preventDefault();
  let numOfElements = document.querySelector(
    ".five input[name='elements']"
  ).value;
  let text = document.querySelector(".five input[name='texts']").value;
  let elementKind = document.querySelector(".five select").value;

  if (numOfElements > 0) {
    // delete before
    let div = document.querySelector(".results");
    div.innerHTML = "";
    div.style = `height: ${Math.ceil(numOfElements / 3) * 35}px;`;
    // create new
    for (let i = 0; i < numOfElements; i++) {
      let el = document.createElement(elementKind);
      el.className = "box";
      el.title = "Element";
      el.id = `id-${i + 1}`;
      el.innerText = text;
      div.appendChild(el);
    }
  }
};
