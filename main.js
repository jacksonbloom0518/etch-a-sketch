
//set var at top
let numholder = 256

//how many divs button //
const divsButton = document.createElement('button')
divsButton.textContent = 'CLICK HERE TO START'
divsButton.addEventListener('click', () => {
    let gridNum = prompt('How many grids do you want?')
  
    //turns response into a number //
    gridNum = parseInt(gridNum)
    //runs loop for number of grids //
    if (gridNum > 0 && gridNum <1000) {
        numholder = gridNum;

        divContainer.innerHTML = '';

        let i = 0;
while (i < numholder) {
    divElement = createDiv ();
    divContainer.appendChild(divElement);
    i++;
}
//sets alert message if number isn't right //
    } else (alert('ERROR NUMBER MUST BE BETWEEN 1-999!'))

})

// created button container for buttons //
var btnContainer = document.createElement('div')
btnContainer.style.display = 'flex';
btnContainer.style.justifyContent = 'center';
btnContainer.appendChild(divsButton);
btnContainer.style.padding = '20px'


//creates div container that is horizontal //
var divContainer = document.createElement('div');
divContainer.style.display = 'flex';
divContainer.style.flexDirection = 'row';
divContainer.style.justifyContent = 'center'
divContainer.style.flexWrap = 'wrap';

//function for 1 box in div container

function createDiv () {
    var div1 = document.createElement('div');
    div1.style.border = ('1px solid black');
    div1.style.width = 'calc(100% / 16 - 2px)';
    div1.style.height = '55px';

    //WRROOOONNNGGG//
    // divContainer.appendChild('div1') //
    //when mouse goes over div it colors red //

    div1.addEventListener('mouseover', () =>{
        div1.style.backgroundColor = 'red'
    })

    return div1
}
// calls it to the body
document.body.appendChild(btnContainer)
document.body.appendChild(divContainer)

