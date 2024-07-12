


/*
creacion de objetos -> sin tener clases de por medio
*/


let enemigo1 = {
    sprite: "imagen.jpg",
    x: 1,
    y: 0,
    estado: "enformacion",
    saludar(nombre){
        console.log("Hello " + nombre);
    }

}

console.log(enemigo1.saludar("dd"));
console.log(typeof enemigo1);   //object
console.log(enemigo1 instanceof Object);


//creacion de clase con funciones

function Enemigo(sprite, x, y, estado) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.estado = estado;

    //saludar(nombre){
    //    console.log("Hi " + nombre);
    //}
}

let enemigo2 = new Enemigo("imgen.jpg", 1, 0, "enformacion");   //instanciacion

//console.log(enemigo2.saludar("ww"))

console.log(typeof enemigo2);
console.log(enemigo2 instanceof Enemigo);

//creacion de clase con CLASS

class Superenemigo {
    constructor(prite, x, y, estado) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        //cuando se construye un enemigo -> el estado siempre es "enformacion"
        this.estado = "enformacion";

    }

    saludar(nombre){
        console.log("Hello " + nombre);
    }
}

let enemigo3 = new Enemigo("imgen.jpg", 1, 0);   //instanciacion

console.log(typeof enemigo3);

