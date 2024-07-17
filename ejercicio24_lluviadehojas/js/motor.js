const RATIO = 0.016;
const VELOCIDAD = 0.50;
var y = -50;
var x = 200;

setInterval(() => {

    y += VELOCIDAD;

    document.querySelector("#gato1").style.top = `${y}px`
    document.querySelector("#gato1").style.left = `${x}px`  //nueva
    if (y > window.innerHeight) {
        y = -100;
        x = Math.random() * window.innerWidth;
    }
}, RATIO)       //ejecuta cada 0.016 segundos