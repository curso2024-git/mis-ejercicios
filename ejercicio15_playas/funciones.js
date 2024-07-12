
let playas = new Array();
//let playas = [];

document.querySelector("#agregar").addEventListener("click", (event) => {
    let nombre = document.querySelector("#nombre").value;
    let pais = document.querySelector("#pais").value;
    let fotografia = document.querySelector("#fotografia").value;

    let playa = {
        nombre: nombre,
        pais: pais,
        fotografia: fotografia
    } 

    playas.push(playa);
    crearDivs();

})

function crearDivs(){

    let textPlayas = "";

    playas.map((playa) => {

        textPlayas+=`<div id="playa">
            <div class="playa-nombre">${playa.nombre}</div>
            <div class="playa-pais">${playa.pais}</div>
            <div class="playa-img">
                <img src="${playa.fotografia}">
            </div>
        </div>`;

    });

    document.querySelector("#paraisos").innerHTML=textPlayas;

    document.querySelector("#nombre").value = "";
    document.querySelector("#pais").value = "";
    document.querySelector("#fotografia").value ="";
}