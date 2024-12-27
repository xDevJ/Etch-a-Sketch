const container = document.querySelector("#container");
const div = document.createElement("div");
div.style.width = ('400px');
div.style.height = ('400px');
div.style.backgroundColor = ('orange');
div.setAttribute('id', 'box');
container.appendChild(div);


const button = document.querySelector('button');


let numberOfSquares = (16 * 16);

function makeGrid(){
    
    for(let i = 0; i < numberOfSquares; i++){
       const boxes = document.createElement('div');
       boxes.setAttribute('id', 'boxes');
       boxes.style.border = ('1px', 'solid')
       boxes.style.width = ('17.9px');
       boxes.style.height = ('17.9px');
       boxes.style.backgroundColor = ('white');
       div.appendChild(boxes);
        
       boxes.addEventListener('mouseover', function(){
            boxes.style.backgroundColor = ('black');
       })
    }
    console.log(div.clientWidth)
}
makeGrid();

function ChooseGrid(){
    button.addEventListener('click', function(){
        const numInput = prompt("Choose size of grid!");
        let numberOfSquares = parseInt(numInput * numInput);
        const message = document.querySelector('.message');
        console.log(numInput);
        

        if(numInput < 0 || numInput > 100 ){
            message.textContent = ("number has to be between 0 and 100");
        } else if( numInput > 0 || numInput < 100){
            message.textContent = ('Lets Sketch!');
            
            div.innerHTML = '';
        }else {
            message.textContent = ("Not a number, Try Again!");
            console.log(message);
            
        }
    
        for(let j = 0; j < numberOfSquares; j++){
            
           const newBoxes = document.createElement('div');
           newBoxes.setAttribute('id', 'newboxes');
           newBoxes.style.border = ('1px', 'solid');
           newBoxes.style.width = ('16.9px');
           newBoxes.style.height = ('16.9px');
           newBoxes.style.backgroundColor = ('white');
           
           div.appendChild(newBoxes);
           
           newBoxes.addEventListener('mouseover', function(){
                newBoxes.style.backgroundColor = ('black');
            })
        }
    });
    
    

}
ChooseGrid();
