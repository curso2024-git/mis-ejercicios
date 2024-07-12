/*
Paises (Nombre, continente)
Actor (Nombre, país)
Películas (Título, Director, listado de los actores)

Crrear un objeto con 3 peliculas
*/

let estadosUnidos = {
    nombre: "Estados Unidos",
    continente: "America"
}

let harrisonFord = {
    nombre: "Harrison Ford",
    país: estadosUnidos
}

let markHamil = {
    nombre: "Mark Hamil",
    país: estadosUnidos
}

let starWarsEpisodioIV = {
    titulo: "StarvWars Episodio IV",
    director: "George Lucas",
    actores: [harrisonFord,markHamil]

}

let starWarsEpisodioV = {
    titulo: "StarvWars Episodio V",
    director: "George Lucas",
    actores: [harrisonFord,markHamil]

}

let starWarsEpisodioVI = {
    titulo: "StarvWars Episodio V",
    director: "George Lucas",
    actores: [harrisonFord,markHamil]

}

let sagaStarWars = [starWarsEpisodioIV, starWarsEpisodioV, starWarsEpisodioVI];

console.log(sagaStarWars);


