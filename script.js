// created box to fit squares to create grid
const container = document.querySelector("#container");
const div = document.createElement('div');
const button = document.querySelector("button");
div.style.width = ('400px');
div.style.width = ('400px');
container.appendChild(div);
div.setAttribute('id', 'grid');

let numberOfSquares = (16 * 16);



// create squares to fit inside box for grid



function createInteractiveGrid(){
    for(let i = 0; i < numberOfSquares; i++){
        const squares = document.createElement('div');
        squares.style.width = ('17.9px');
        squares.style.height = ('17.9px');
        div.appendChild(squares);
        squares.setAttribute("id", "box");
        squares.style.border = ('1px', 'solid');
        
        
     // hover effect when mouse enters box and leaves box color changes like a trail.
        
        squares.addEventListener("mousemove", e => {
            e.target.style.backgroundColor = ("red");
        })
        
    
    }
    
   
    
}
createInteractiveGrid()

// to get number of squares when user inputs from prompt

button.addEventListener('click', getSquares, {once : true});
function getSquares(){
    
    const number = prompt("Choose Grid");
    let numberOfNewSquares = (number * number);
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'new-grid');
    container.appendChild(newDiv);
    newDiv.style.width = ('960px');
    newDiv.style.height = ('');
    container.removeChild(div);
    
    
    for(let j = 0; j < numberOfNewSquares; j++){
        
        const grid = document.createElement('div');
        grid.style.width = ('17.9px');
        grid.style.height = ('17.9px');
    
        grid.style.border = ('1px', 'solid');
        
        
        grid.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = ('blue');
        })
        newDiv.appendChild(grid);
    }
    
    
    
}
