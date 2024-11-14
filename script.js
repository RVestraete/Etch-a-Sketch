const body = document.querySelector('body');
const mainContainer = document.querySelector('#main-container');

const button1 = document.createElement("button");
mainContainer.appendChild(button1);

const gridSize = 16;
const cellCount = gridSize * gridSize;
const gridDimension = 960;

for (i = 0; i < gridSize; i++){
    const row = document.createElement("div");
    row.className = "row";
    mainContainer.appendChild(row);


    for(j = 0; j < gridSize; j++){

        const column = document.createElement("div");
        column.className = "column";
        row.appendChild(column);
        }
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