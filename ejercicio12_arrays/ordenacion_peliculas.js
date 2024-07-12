/*
Peliculas:
- Titulo
- Duracion
- Nacionalidad
- clasificación (1-5) -> buena / mala -> valoracion de 1 a 5

- creamos 3 instancias ( objetos )
- Obtener las películas del género ¿Terror? ordenadas por clasificación
*/

class Peliculas{

    constructor(titulo, duracion, genero, nacionalidad, calificacion){

        this.titulo = titulo;
        this.duracion = duracion;
        this.genero = genero
        this.nacionalidad = nacionalidad;
        this.clasificacion = calificacion;

    }
}

let peli1 = new Peliculas("A sangre fria",2.0,"acción","Madrid",2);
let peli2 = new Peliculas("Al final de la escalera",3.0,"terror","Barcelona",3);
let peli3 = new Peliculas("Aguila Roja",2.3,"aventura","Valladolid",4);
let peli4 = new Peliculas("El exorcista",2.5,"terror","EEUU",4);

let pelis = [];

pelis.push(peli1);
pelis.push(peli2);
pelis.push(peli3);
pelis.push(peli4);

//console.log(pelis.filter((peli) => peli.genero === 'terror' )) //.sort((peli) => .calificacion-p.calificacion));

let pelisTerror = pelis
    .filter((peli) => peli.genero === 'terror' )
    .sort((p1,p2) => p1.calificacion-p2.calificacion);

let pelisTerror2 = pelis
    .filter((peli) => peli.genero === 'terror' )
    .sort((p1,p2) => p1.calificacion-p2.calificacion).reverse();

console.log(pelisTerror);

//CON REVERSE
console.log(pelisTerror2);












