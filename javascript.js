const gridContainer = document.querySelector("#container");
gridContainer.className = "flex-container";

// Default grid size n = 16
let gridSize = 16;
// Dynamically create a default grid elements for a sketch
function createGrids(gridSize){
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.className = "flex-row";
        for (let j = 0; j < gridSize; j++){
            const grid = document.createElement("div");
            grid.className = "flex-item";
            // Change the color of the grids when we hover the grid elements
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = "grey";
            });
    
            row.appendChild(grid);
        }
        gridContainer.appendChild(row);
    }
};

// Created
createGrids(gridSize);

// function that clear up the grids
function removeGrids() {
    const grids = gridContainer.querySelectorAll(".flex-item");

    Array.from(grids).forEach(grid => {
        grid.remove();
    });
}

// button for adjusting the size of the grids
const sizebtn = document.querySelector("#size");

// Event happens when click the resizing the grid button
sizebtn.addEventListener("click", () => {
    gridSize = window.prompt("Please enter the size of the grid (n):");

    if (gridSize <= 0 || gridSize > 100 ){
        alert("Choose a valid range between 1 to 100.");
    } else {
        removeGrids();
        createGrids(gridSize);   
    }
});

const clearbtn = document.querySelector("#reset");

clearbtn.addEventListener("click", () => {
    removeGrids();
    createGrids(16);
})
