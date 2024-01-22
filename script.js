const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function defaultGrid() {
    makeRows(16);
    makeColumns(16);
    
    
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function makeColumns (cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

defaultGrid();

function changeSquareColor() {
    this.classList.add("hover");
    this.setAttribute("id", "filled");
}

let cell = document.querySelectorAll(".cell");

function addMouseover () {
    cell.forEach(function(cell) {
        cell.addEventListener("mouseover", changeSquareColor);
    });
}

addMouseover();



function clearBoard() {
    const clear = document.getElementById("clear");
    
    

    clear.addEventListener("click", () => {
        console.log("here")
        const selected = document.getElementById("filled");
        const classes = selected.classList;
        classes.remove("hover");
        selected.textContent = classes;
        
        console.log("here2")
    })
   


    
};

clearBoard();