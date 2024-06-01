const container = document.querySelector(".container");
const clearButton = document.querySelector("button");

let dimension = getDimension();
createSquares(dimension);
container.addEventListener("mouseover", function (e) {
  const target = e.target;
  target.classList.contains("square") &&
    !target.classList.contains("sketch") &&
    target.classList.add("sketch");
});

clearButton.addEventListener("click", function (e) {
  const squares = document.querySelectorAll(".square");
  squares.forEach(
    (e) => e.classList.contains("sketch") && e.classList.remove("sketch"),
  );
});
function createSquares(dimension) {
  // container.childNodes.forEach((node) => node.remove());
  container.innerHTML = "";
  for (i = 0; i < dimension; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (j = 0; j < dimension; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function getDimension() {
  const dimension = parseInt(prompt("Input the dimension: "));
  if (isNaN(dimension) || dimension > 80) {
    return getDimension();
  }
  return dimension;
}
