const gridContainer = document.querySelector(".gridContainer");
const resetButton = document.querySelector('#gridReset');
const sliderSetting = document.querySelector('#sizeSlider');
const sliderValue = document.querySelector('#sizeSliderValue');

let defaultGridSize = 16;

function createGrid(rowMax, colMax) {
    for (var rows = 0; rows < rowMax; rows++) {
        for (var columns = 0; columns < colMax; columns++) {
            let cell = document.createElement("div")
            cell.classList.add('grid')
            cell.style.width = (600/rowMax) + 'px'
            cell.style.height = (600/rowMax) + 'px'
            cell.addEventListener('mouseover', colourCell)
            gridContainer.appendChild(cell);
        };
    };
};

resetButton.addEventListener("click", resetGrid);
sliderSetting.addEventListener('mousemove', updateGridSizeValue);
sliderSetting.addEventListener('mouseup', setGridSize);

function colourCell(e) {
    e.target.style.backgroundColor = "#000000"
}

function resetGrid() {
    gridContainer.textContent = ''
    createGrid(sizeSlider.value, sizeSlider.value)
}

function updateGridSizeValue(e) {
    sliderValue.innerHTML = `${e.target.value} x ${e.target.value}`
}

function setGridSize(e) {
    setGridSize = e.target.value
    gridContainer.textContent = ''
    createGrid(e.target.value, e.target.value)
}

createGrid(defaultGridSize, defaultGridSize)