setup();

function setup() {
  let body = document.querySelector("body");
  let button = document.createElement("button");
  button.classList.add("violet-btn");
  button.textContent = "Add New Grid";
  button.addEventListener("click", getNewGrid);
  document.body.insertBefore(button, document.querySelector(".container"));

  createGrid(16);
}

function cleanup() {
  const container = document.querySelector(".container");
  if (container) {
    container.innerHTML = "";
  }
}

function getNewGrid() {
  cleanup();
  let size = prompt("Please enter the size of the new Grid (1-100):");
  if (size < 1 || size > 100) {
    alert("Size was not in the given range, generating with size 100 ...");
    size = 100;
  }
  createGrid(size);
}

function createGrid(value) {
  let container = document.querySelector(".container");

  if (!container) {
    container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
  }

  for (let i = 0; i < value; i++) {
    container.appendChild(createDivRow(value));
  }
}

function createDivRow(value) {
  let row = document.createElement("div");
  makeFlexStyle(row);
  for (let index = 0; index < value; index++) {
    let div = createDiv(row);
    row.appendChild(div);
  }
  return row;
}

function createDiv() {
  let div = document.createElement("div");
  div.style.flex = "0 0 auto";
  //div.style.backgroundColor = "" + getRandomColor();
  div.style.aspectRatio = "1/1";
  div.style.width = "4vw";
  div.style.height = "4vw";
  //div.style.border = "1px solid black";
  div.classList.add("hoverable");
  return div;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeFlexStyle(parent) {
  parent.style.display = "flex";
  parent.style.flexDirection = "row";
  parent.style.alignItems = "stretch";
  parent.style.width = "100%";
}
