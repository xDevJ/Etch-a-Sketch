const container = document.querySelector("#container");
container.setAttribute('class', 'align');
const button = document.querySelector('button');


let numberOfSquares = (16 * 16);

function makeGrid(){
    
    console.log(container.clientWidth)

    for(let i = 0; i < numberOfSquares; i++){
       const defaultBoxes = document.createElement('div')
       
       defaultBoxes.style.width =   `${container.clientWidth / 16}px`;
       defaultBoxes.setAttribute('id','df-boxes');
       defaultBoxes.style.height = `${container.clientWidth / 16}px`;
       defaultBoxes.style.backgroundColor = ('white');
       container.appendChild(defaultBoxes);
        
       defaultBoxes.addEventListener('mouseover', function(){
            defaultBoxes.style.backgroundColor = ('black');
       })

       
    }
    
}
makeGrid();

function ChooseGrid(){
    button.addEventListener('click', function(){
        const numInput = prompt("Choose size of grid!");
        let numberOfSquares = parseInt(numInput * numInput);
        const message = document.querySelector('#message');
        
      
    // defining totalSquares    
      const totalSquares = (container.clientWidth / numInput);
        
       


        if(numInput < 0 || numInput > 100 ){
            message.textContent = ("number has to be between 0 and 100");
        } else if( numInput > 0 || numInput < 100){
            message.textContent = ('Lets Sketch!');
            
            container.innerHTML = '';
        }else {
            message.textContent = ("Not a number, Try Again!");
            console.log(message);
            
        }
    
        for(let j = 0; j < numberOfSquares; j++){
            
           const newBoxes = document.createElement('div');
           newBoxes.setAttribute('id', 'new-boxes');
           newBoxes.style.width = (`${totalSquares}px`);
           newBoxes.style.height = (`${totalSquares}px`);
           newBoxes.style.backgroundColor = ('white');
           
          
           container.appendChild(newBoxes);
           
           newBoxes.addEventListener('mouseover', function(){
                newBoxes.style.backgroundColor = ('black');
            })
        }
    });
    
    

}
ChooseGrid();