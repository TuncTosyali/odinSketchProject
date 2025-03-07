function drawGrid(size) {
    const container = document.querySelector("#container");
    for (let i = 0; i < size; i++) {
        const newRow = document.createElement("div");
        for (let j = 0; j < size; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("myDiv");
            newRow.appendChild(newDiv);
        }
        newRow.classList.add("aRow");
        container.appendChild(newRow);
    }
    const allBoxes = document.querySelectorAll(".myDiv");
    allBoxes.forEach((eachBox) => {
        eachBox.addEventListener("mousemove", (evt) => {
            evt.target.style.backgroundColor = "red";
        });
    });
}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", (evnt) => {
    const container = document.querySelector("#container");
    container.remove();
    const newContainer = document.createElement("div");
    newContainer.id = "container";
    const wholePage = document.querySelector("#wholePage");
    wholePage.appendChild(newContainer);
    let newSize = 0;
    while (newSize < 2 || newSize > 100) {
        newSize = prompt("new size between 2-100");
        newSize = Number(newSize);
    }
    drawGrid(newSize);
});

document.addEventListener("DOMContentLoaded", drawGrid(16));
