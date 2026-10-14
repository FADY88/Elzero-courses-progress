// assignment 1
let ans = prompt("Print Number From - To", "Example: 5-20");

ans = ans.split("-").map(Number);

let min = Math.min(...ans);
let max = Math.max(...ans);

for (let i = min; i <= max; i++) {
  let div = document.createElement("div");
  div.innerHTML = i;
  document.body.appendChild(div);
}

// assignment 2
setTimeout(popup, 2000);

function popup() {
  let div = document.createElement("div");
  div.style = `background-color: beige;
    border: 1px black solid;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);`;
  div.innerHTML = `<button id="closePop" style="border-radius: 50%;
    background-color: red;
    color: white;
    cursor: pointer;
    outline: none;
    width: 30px;
    height: 30px;
    position: absolute;
    top: -15px;
    right: -15px;
    border: none;">X</button>
  <h3>Welcome</h3>
  <p>Welcome to Elzero Web School</p>`;
  document.body.appendChild(div);
  document.querySelector("#closePop").onclick = function () {
    div.remove();
  };
}

// assignment 3
let counter = document.querySelector("#counter");
let intervalID = setInterval(() => {
  if (counter.innerText > 0) {
    counter.innerText -= 1;
  } else {
    setTimeout(intervalID);
    // assignment 4
    // location.href = "https://Elzero.org";
    // assignment 5
    // window.open("https://elzero.org", "_blank", "height=500,width=500");
  }
}, 500);
