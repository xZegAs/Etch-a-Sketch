let parentNode = document.querySelector('.grid');

function createGrid(size) {
    for (let i =0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('flex', 'row');
        parentNode.appendChild(row);

        for (let j = 0; j < size; j++) {
            let col = document.createElement('div');
            col.classList.add('flex');
            row.appendChild(col);
        }

    }
}

let grid = document.querySelector('.grid');
grid.addEventListener('mouseover', (event) => {
    let target = event.target;
    if (target !== grid && !target.classList.contains('row')){
        target.style.backgroundColor = randomColor();
        target.style.opacity = (parseFloat(target.style.opacity) || 0) + 0.2;
    }
});

function randomColor() {
    return `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
}

let resize = document.querySelector('.resize');
resize.addEventListener('click', () => {
    createGrid(getSize());
});

function getSize() {
    let size = prompt('Enter the size of the grid (1-100)');
    while (true) {
        if (size < 1 || size > 100) {
            size = prompt('Enter the size of the grid (1-100)');
        } else {
            parentNode.replaceChildren();
            return size;
        }
    }
}

createGrid(16);