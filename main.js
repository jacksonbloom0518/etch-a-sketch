
//creates div container that is horizontal //
var containerHorizontal = document.createElement('div');
containerHorizontal.style.display = 'flex';
containerHorizontal.style.flexDirection = 'row';
containerHorizontal.style.justifyContent = 'center'
containerHorizontal.style.flexWrap = 'wrap';
containerHorizontal.style.margin = "150px"

//function for 1 box in div container
function createDiv() {
var div = document.createElement('div')

div.style.width = 'calc(100% / 16 - 2px)';
div.style.height = '100px';
div.style.border = '1px solid gold';

//when mouse goes over div it colors black //
div.addEventListener ('mouseover', () =>
{div.style.backgroundColor = 'purple';
});


return div;
}

// loops div so there are 16 //
var i=0;
while (i< 256){
    var divElement  = createDiv();
    containerHorizontal.appendChild(divElement);
    i++
}
// calls it to the body
document.body.appendChild(containerHorizontal);

