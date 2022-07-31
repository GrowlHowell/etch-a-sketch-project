const container = document.querySelector('.container');
let div;
let btn = document.getElementById('grid-resize');

const randomColor = function() {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

let gridSize = function(size) {
    for (i = 0; i < size; i++) {
        div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

gridSize(16);

const resizeGrid = function() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let selection = prompt("How many grid squares would you like?");
    while (selection > 100) {
        selection = prompt("Please select a number up to 100.");
        if (selection < 100) {
            return selection;
        }
    }
    gridSize(selection);
};

btn.addEventListener('click', function() {
    resizeGrid();
})

container.addEventListener('mouseover', function(e) {
    if(e.target.classList.contains('grid')) {
        e.target.style.backgroundColor = randomColor();
    }
});
// container.addEventListener('mouseout', function(e) {
//     if(e.target.classList.contains('grid')) {
//         e.target.style.backgroundColor = 'white';
//     }
// });