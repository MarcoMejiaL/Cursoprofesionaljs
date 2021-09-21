(function(){
let color = 'green'

function printColor(){
console.log(color);
}
printColor();
})();

/* funcion que se invoca inmediatamente */
function makeColorPrinter(color){
    let colorMensaje = `the color is ${color}`
return function(){
    console.log(colorMensaje);
}
}

let greenColorPrinter =makeColorPrinter('green')
console.log(greenColorPrinter())