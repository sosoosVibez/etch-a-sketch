setup();

function setup() {
  let container = document.querySelector(".container");
  for (let index = 0; index < 16; index++) {
    let row = createDivRow(container);
    container.appendChild(row);
  }
}

function createDivRow() {
  console.log("createDivRow");
  let row = document.createElement("div");
  makeFlexStyle(row);
  for (let index = 0; index < 16; index++) {
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
  div.classList.add("hoverable");
  console.log("check");
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
