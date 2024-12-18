// created box to fit squares to create grid

const container = document.querySelector("#container");
const div = document.createElement('div');
container.appendChild(div);
div.setAttribute('id', 'grid');

div.style.width = ("400px");
div.style.height = ("400px");
div.style.background = ("white");
div.style.border = ("1px", "solid");

// create squares to fit inside box for grid

NumberOfSquares = (16 * 16);


function createGrid(){
    
    for(let i = 0; i < NumberOfSquares; i++){
        const squares = document.createElement('div');
        squares.style.width = ('17.9px');
        squares.style.height = ('17.9px');
        squares.setAttribute('class', 'box');
        div.appendChild(squares);
        squares.style.border = ('1px', 'solid');

    }
    
}
createGrid();



