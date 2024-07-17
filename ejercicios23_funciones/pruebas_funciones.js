function elevar(base = 2, exponente = 2) {

    return base ** exponente;

}

console.log(elevar(3));
console.log(elevar());
console.log(elevar(4));
console.log(elevar(undefined, 5));

//asignacion de funciones a variables

let miFuncion = function () {
    console.log("Hola sooy una funcion asignada a una variable")
}

miFuncion();

//uso de larticula THIS

function Alumno(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saluda = () => {
        console.log("HOla soy " + this.nombre);
    }

}

const alumno1 = new Alumno("Adela", 18);
alumno1.saluda();

//variable arguments -> Array con todos los argumentos que llegan
function hazAlgo(a1, a2, a3) {

    console.log(arguments.length);
    console.log(arguments[0]);

}


hazAlgo("uno", 2);  //tener en cuenta los espacios entre elementos de los parametros

//parametro rest
function sumar(...sumando) { //...[muchas cosas] -> recibe un numero indeterminado de parametros -> sumando = nombre del array
    let total = 0;
    sumando.forEach(numero => {
        //console.log(numero)
        total += numero;

    });
    return total;
}

//otra version de sumar
function sumarII(...sumando) { //...[muchas cosas] -> recibe un numero indeterminado de parametros -> sumando = nombre del array

    return sumando.reduce((x, y) => x + y);

}


sumar(1);
sumar(3, 4);
sumar(3, 8, 10, 3, 4);
//sumar(3, 8, "diez", 3, 4);

sumarII(3, 8, 10, 3, 4);

console.log(sumar(3, 8, 10, 3, 4));

console.log(sumarII(3, 8, 10, 3, 4));










