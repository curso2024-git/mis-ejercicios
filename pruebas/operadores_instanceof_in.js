let nombre = "n1";
console.log(typeof nombre);

let nombre2 = new String("n1");

if(nombre instanceof String){
    console.log("Soy String")
}

if(nombre2 instanceof String){
    console.log("Soy String")
}

class Pelicula {
    constructor(titulo, duracion){
        this.titulo;
        this.duracion;
    }
}

let p1 = new Pelicula("titanic",2,5)

console.log(p1 instanceof Pelicula);