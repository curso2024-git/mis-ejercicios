const URL = "http://localhost";
const PORT = "5500";
const RECURSO = "datos.json";

function getVideojuegos(url, port, recurso) {

    const promise = fetch(`${URL}:${PORT}/${RECURSO}`);
    promise.then(response => response.text())
        .then(data => {
            mostrarDatos(data)
        })

    //client.open("GET","http://localhost:5500/datos.json");
    //client.open("GET", `${URL}:${PORT}/${RECURSO}`);  //abriendo peticion GET

    //client.send();  //envio de la peticion

}

function mostrarDatos(datos) {

    let musicas = JSON.parse(datos);

    musicas.forEach(musica => {        

    let ficha = `<div class="musica">
      <div class="titulo">${musica.titulo}</div>
      <div class="genero">${musica.genero}</div>
      <div class="portada">
          <img src="${musica.portada}" alt="">
      </div>
      </div>`;

        document.querySelector("#musicas").innerHTML+=ficha; 

    });



}

function mostrarPaginaError(codigo){

    document.querySelector("#musicas").innerHTML = `HA OCURRIDO UN ERROR : ${codigo}`

}


//llamada a la funcion con hard code

getVideojuegos(`${URL}`, `${PORT}`, `${RECURSO}`);

//getVideojuegos("http://localhost", 5500, "datos.json");

