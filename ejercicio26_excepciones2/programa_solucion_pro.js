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

let paises = ["Francia", "Alemania", "Inglaterra", "Japón", "China"];
const MINIMO_VIAJEROS = 1;
const MAXIMO_VIAJEROS = 4;
const MINIMO_DIAS = 5;
const MAXIMO_DIAS = 10;

function organizarViajes(pais, viajeros, dias) {

    let errores = [];


    if (!(paises.map(pais => pais.toUpperCase())).includes(pais.toUpperCase())) {
        errores.push("El pais debe ser uno de la lista");
    }

    if (viajeros < MINIMO_VIAJEROS || viajeros > MAXIMO_VIAJEROS) {


        errores.push("Numero de viajeros debe ser un numero entre 1 y 4");

    }

    if (dias < MINIMO_DIAS || dias > MAXIMO_DIAS) {

        errores.push("Numero de dias debe ser un numero entre 5 y 10");

    }

    if (errores.length > 0) {
        throw new Error(errores.join("*"))
    }

    return `Se ha reservado un viaje a ${pais} de ${dias} días para ${viajeros} personas`;
}

try {
    organizarViajes("Dinamarca", 4, 12)

} catch (error) {
    console.error(error.message);
} finally {
    console.log("estamos en finally");
}
