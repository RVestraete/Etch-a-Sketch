const body = document.querySelector('body');
const mainContainer = document.querySelector('#main-container');

const buttonContainer = document.createElement('.button-container');
mainContainer.appendChild(buttonContainer);

const button1 = document.createElement("button");
buttonContainer.appendChild(button1);

const gridSize = 10;
const cellCount = gridSize * gridSize;
const gridDimension = 500;

mainContainer.style.width = `${gridDimension}px`;
mainContainer.style.height = `${gridDimension}px`;

const cellSize = gridDimension / gridSize - 2;

for (let i = 0; i < cellCount; i++){

    const column = document.createElement("div");
    column.className = "column";
    column.className = "column";
    column.style.width = `${cellSize}px`;
    column.style.height = `${cellSize}px`;
    mainContainer.appendChild(column);
}

let color = [ "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
const columns = document.querySelectorAll(".column");

columns.forEach((column) => {
    column.addEventListener("mouseover", function handleHover() { 
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        column.style.background = "#" + randomColor; //color[(Math.floor(Math.random() * color.length))];
        column.removeEventListener("mouseover",handleHover)
    
    });
});