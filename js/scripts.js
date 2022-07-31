const container = document.querySelector('.container');
let div;

for (i = 0; i < 16; i++) {
    div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
}

container.addEventListener('mouseover', function(e) {
    if(e.target.classList.contains('grid')) {
        e.target.classList.add('grid-hover');
    }
});
container.addEventListener('mouseout', function(e) {
    if(e.target.classList.contains('grid')) {
        e.target.classList.remove('grid-hover');
    }
});