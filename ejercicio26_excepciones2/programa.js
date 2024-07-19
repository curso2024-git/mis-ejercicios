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

    //otra forma con map
    //En 1 paso
    if (!(paises.map(pais => pais.toUpperCase())).includes(pais.toUpperCase())) {
        throw new Error("El pais debe ser uno de la lista");
    }

    //En varios pasos
    //Usamos const en vez de let
    const paisesMayusculas = pais.map(pais => pais.toUpperCase());
    const paisBuscadoMayuscula = pais.toUpperCase();

    if (!paisesMayusculas.includes(paisBuscadoMayuscula)) {
        throw new Error("El pais debe ser uno de la lista");
    }


    //if (!paises.includes(pais)) {
    //    throw new Error("El pais debe ser uno de la lista");
    //}

    //recomendable trabajar con constantes no con -> hard code
    //if (viajeros < MINIMO_VIAJEROS || viajeros > MAXIMO_VIAJEROS)     -> opcion profe

    if (!(viajeros >= 1 && viajeros <= 4)) {

        throw new Error("Numero de viajeros debe ser un numero entre 1 y 4");

    }

    //if ( dias < MINIMO_DIAS || dias > MAXIMO_DIAS)    -> opcion profe

    if (!(dias >= 5 && dias <= 10)) {

        throw new Error("Numero de dias debe ser un numero entre 5 y 10");

    }

}

try {
    organizarViajes("Dinamarca", 4, 12)

} catch (error) {
    console.error(error.message);
} finally {
    console.log("estamos en finally");
}

