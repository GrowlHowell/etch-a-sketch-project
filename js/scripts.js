const container = document.querySelector('.container');
let div;

const randomColor = function() {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    return color;
}

for (i = 0; i < 16; i++) {
    div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

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