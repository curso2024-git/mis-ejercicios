const fs = require('node:fs');

function writeLog(logline) {
    fs.writeFile('./log.txt', logline, err => {
        if (err) {
            console.error(err);
        } else {
            console.log("Log escrito satisfactoriamente")
        }
    });
}

function sumar(sumando1, sumando2) {
    //1. Que recibamos 2 argumentos
    if (sumando1 === undefined || sumando2 === undefined) {
        throw new Error("Los dos sumandos son obligatorios");
    };
    //2. Que los 2 argumentos sen numeros
    if (!(typeof sumando1 === "number") || !(typeof sumando2 === "number")) {
        throw new Error("Los dos sumandos deben ser números");
    };

    return sumando1 + sumando2;
}

//console.log(sumar(2, "3"));
console.log(2 + true);  //result 3 -> true vale 1

try {
    console.log("paso 1");
    let resultado = sumar(8);
    console.log("paso 2");
    console.log(resultado);
    console.log("paso 3");
} catch (e) {
    //No es correcto
    //console.error(e);

    //O se concatena con texto
    console.error("Ha ocurrido un error: " + e);
    //O se usa el metodo -> message
    console.error(e.message);
    writeLog(e.message);

} finally {     //EL BLOQUE FINALLY SIEMPRE SE EJECUTA
    console.log("hemos terminado el proceso");
}