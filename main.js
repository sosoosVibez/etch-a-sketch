setup();

function setup() {
  let container = document.querySelector(".container");
  for (let index = 0; index < 16; index++) {
    let row = createDivRow(container);
    container.appendChild(row);
  }
  //makeFlexStyle(container);
}

function createDivRow(parent) {
  console.log("createDivRow");
  let row = document.createElement("div");
  makeFlexStyle(row);
  for (let index = 0; index < 16; index++) {
    let div = createDiv(row);
    row.appendChild(div);
  }
  return row;
}

function createDiv(parent) {
  let div = document.createElement("div");
  div.style.flex = "1";
  div.style.backgroundColor = "" + getRandomColor();
  return div;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //console.log(color);
  return color;
}

function makeFlexStyle(parent) {
  parent.style.display = "flex";
  parent.style.flexDirection = "row";
  parent.style.alignItems = "stretch";
  //parent.style.justifyContent = "flex-end";
  parent.style.height = "1rem";
  parent.style.width = "100%";
}
