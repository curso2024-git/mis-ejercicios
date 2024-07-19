/*
Crear un array con el nombre de 5 paises.
Crear una funcion con el nombre organizarViaje que reciba como argumentos : 
- Nombre de pais (debe ser uno de la lista)
- Numero de viajeros (pax) (debe ser un numero >=1 y <=4).
- Numero de días (debe ser un numero >=5 y <=10).

La función devolverá el texto : "Se ha reservado un viaje a xxx de yyy días para zzz personas".
Si no se cumple alguna de las condiciones lanzar una excepcion (Error).
*/

//usando constantes
//const PAISES = ["Francia", "Alemania", "Inglaterra", "Japón", "China"];

//x = ErrorViaje(); -> x instanceof ErrorViaje ademas x instanceof de Error

class ErrorViaje extends Error {
    constructor(message) {  //constructor de error puede o no recibir parametros
        super(message)
        this.errores = [];
    }

    addError(e) {
        this.errores.push(e);
    }
}



let paises = ["Francia", "Alemania", "Inglaterra", "Japón", "China"];
const MINIMO_VIAJEROS = 1;
const MAXIMO_VIAJEROS = 4;
const MINIMO_DIAS = 5;
const MAXIMO_DIAS = 10;

function organizarViajes(pais, viajeros, dias) {

    let errorViaje = new ErrorViaje();


    if (!(paises.map(pais => pais.toUpperCase())).includes(pais.toUpperCase())) {

        errorViaje.addError("El pais debe ser uno de la lista");

    }

    if (viajeros < MINIMO_VIAJEROS || viajeros > MAXIMO_VIAJEROS) {


        errorViaje.addError("Numero de viajeros debe ser un numero entre 1 y 4");

    }

    if (dias < MINIMO_DIAS || dias > MAXIMO_DIAS) {

        errorViaje.addError("Numero de dias debe ser un numero entre 5 y 10");

    }

    if (errores.length > 0) {
        throw new Error(errores.join("*"))
    }

    return `Se ha reservado un viaje a ${pais} de ${dias} días para ${viajeros} personas`;
}

try {
    organizarViajes("Dinamarca", 4, 12)

} catch (error) {

    errores.forEach(error => {

    });

    console.error(error.message);
} finally {
    console.log("estamos en finally");
}

