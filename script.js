const mainContainer = document.querySelector('#main-container');
const setGridSizeButton = document.querySelector('#set-grid-size');
const resetGridButton = document.querySelector('#reset-grid');
const colorSelector = document.querySelector('#color-selector');

let gridSize = 16;
const gridDimension = 700;
const color = [ "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];

createGrid();

function createGrid() {

mainContainer.innerHTML = '';
mainContainer.style.width = `${gridDimension}px`;
mainContainer.style.height = `${gridDimension}px`;

const cellCount = gridSize * gridSize;
const cellSize = gridDimension / gridSize - 2;

for (let i = 0; i < cellCount; i++){

    const column = document.createElement("div");
    column.className = "column";
    column.className = "column";
    column.style.width = `${cellSize}px`;
    column.style.height = `${cellSize}px`;
    column.addEventListener("mouseover", handleHover);
    mainContainer.appendChild(column);
}
}

// columns.forEach((column) => {
//     column.addEventListener("mouseover", function handleHover() { 
//         // const randomColor = Math.floor(Math.random()*16777215).toString(16);
//         column.style.background = color[(Math.floor(Math.random() * color.length))]; // "#" + randomColor; 
//         column.removeEventListener("mouseover",handleHover)
    
//     });
// });

function handleHover(event) {
    event.target.style.background = color[Math.floor(Math.random() * color.length)];
    event.target.removeEventListener("mouseover", handleHover);
}


setGridSizeButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter the grid size:"), 10);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100){
        gridSize = newSize;
        createGrid();
    } else {
        alert("Please enter a valid number greater than 0 and less or equal to 100.");
    }
});

resetGridButton.addEventListener("click", () => {
    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
        column.style.background = "";
        column.addEventListener("mouseover", handleHover);

    });
});


// colorSelector.addEventListener("click", () => {

// });
