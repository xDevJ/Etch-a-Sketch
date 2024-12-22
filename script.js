// created box to fit squares to create grid
const container = document.querySelector("#container");
const div = document.createElement('div');
const button = document.querySelector("button");

container.appendChild(div);
div.setAttribute('id', 'grid');

div.style.width = ("400px");
div.style.height = ("400px");
div.style.background = ("white");











// create squares to fit inside box for grid

NumberOfSquares = (16 * 16);

function createInteractiveGrid(){
    for(let i = 0; i < NumberOfSquares; i++){
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
button.addEventListener('click', getSquares);

function getSquares(){
    prompt("Choose Grid");
    
}






