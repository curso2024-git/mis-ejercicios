const alumnos = new Map([
    ["Alberto",38],
    ["Oscar",40],
    ["Lara",29],
]);

console.log(alumnos.get("Oscar"));

//Definir un Map que tenga por clave el titulo de la pelicula
//y por valor un objeto con los atributos : director, genero, año y duración
//El Map tendrá tres peliculas

let datoPeli1 = {
    director : "xx",
    genero : "Terror",
    anyo : 1980,
    duración : 2.5
}

const peliculas = new Map([
    ["El exorcista", datoPeli1],
    ["Titanic", {
            director : "yy",
            genero : "Drama",
            anyo : 1990,
            duración : 3.0
        }
    ],
    ["La guerra de las galacias",{
            director : "zz",
            genero : "Ficción",
            anyo : 1985,
            duración : 2.5
        }
    ]

]);

//console.log(datoPeli1);

//console.log(peliculas.get("El exorcista").genero);

//console.log(peliculas.get("Titanic").genero);

for (let [k,v] of peliculas) {
    console.log(`${k}\n`,`Director: ${v.director}\nGenero: ${v.genero}`);
    
}


const peliculasToObject = peliculas => Object.fromEntries(peliculas.entries());

