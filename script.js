const body = document.querySelector('body');

const mainContainer = document.querySelector('#main-container');
mainContainer.setAttribute("style","position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%);");

for (i = 0; i < 16; i++){
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("style","display: flex; flex-direction: row;");
    mainContainer.appendChild(row);


    for(j = 0; j < 16; j++){

        const column = document.createElement("div");
        column.className = "column";
        column.setAttribute("style","flex-basis: 100%; margin: 1px; border-radius: 4px; border: 2px solid grey; padding: 15px;");
        row.appendChild(column);
        }
}

let color = [ "#3C9EE7", "#E7993C", "#E73C99", "#3CE746", "#E7993C"];
const columns = document.querySelectorAll(".column");

columns.forEach((column) => {
    column.addEventListener("mouseover", function handleHover() { 
        column.style.background = color[(Math.floor(Math.random() * color.length))];
        column.removeEventListener("mouseover",handleHover)
    
    });
});