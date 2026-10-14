let add = document.querySelector("#add");
let show = document.querySelector(".show");

if (window.localStorage.getItem("notes")) {
  JSON.parse(window.localStorage.getItem("notes")).forEach(addNote);
} else {
  window.localStorage.setItem("notes", JSON.stringify(new Array()));
}

add.onclick = function () {
  let note = document.querySelector(".add > input");
  if (note.value.length < 1) {
    return;
  }
  storeNote(note.value);
  addNote(note.value);
  note.value = "";
};

function storeNote(note) {
  let notes = JSON.parse(window.localStorage.notes);
  notes.push(note);
  localStorage.notes = JSON.stringify(notes);
}

function deleteNote(note) {
  let notes = JSON.parse(window.localStorage.notes);
  notes = notes.filter((e) => e !== note);
  localStorage.notes = JSON.stringify(notes);
}

function addNote(note) {
  let div = document.createElement("div");
  div.classList.add("note");
  div.innerHTML = `<h5>${note}</h5>`;
  let btn = document.createElement("button");
  btn.classList.add("delete");
  btn.innerText = "Delete";
  div.appendChild(btn);

  btn.onclick = function () {
    deleteNote(note);
    btn.parentElement.remove();
  };
  show.appendChild(div);
}

// assignment 1
let font = document.querySelector("#one > #font");
let color = document.querySelector("#one > #color");
let size = document.querySelector("#one > #size");

function selectDefault(element, value) {
  for (let option of element.children) {
    option.removeAttribute("selected");
  }
  element
    .querySelector(`option[value="${value}"]`)
    .setAttribute("selected", "");
}

window.onload = function () {
  if (localStorage.getItem("font")) {
    selectDefault(font, localStorage.getItem("font"));
    font.onchange();
  }
  if (localStorage.getItem("color")) {
    selectDefault(color, localStorage.getItem("color"));
    color.onchange();
  }
  if (localStorage.getItem("size")) {
    selectDefault(size, localStorage.getItem("size"));
    size.onchange();
  }
};

font.onchange = function () {
  document.body.style.fontFamily = `"${font.value}", "sans-serif"`;
  localStorage.setItem("font", font.value);
  selectDefault(font, font.value);
};

color.onchange = function () {
  document.body.style.color = color.value;
  localStorage.setItem("color", color.value);
  selectDefault(color, color.value);
};

size.onchange = function () {
  document.body.style.fontSize = `${size.value}px`;
  localStorage.setItem("size", size.value);
  selectDefault(size, size.value);
};
