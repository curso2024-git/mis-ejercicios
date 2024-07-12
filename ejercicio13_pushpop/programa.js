const DELAY_CREACION = 3000;

const DELAY_CONSUMO = 5000;

//setInterval(crearTarea, 5000, 5000);

setInterval(crearTarea, DELAY_CREACION);
setInterval(consumirTarea, DELAY_CONSUMO);€

let cola = [];
let contador = 0;

console.log(Array.isArray(cola));   //DEVUELVE TRUE

function crearTarea(){

    console.log("Creando tarea ... ");
    //cola.push("Tarea"+cola.length); //COLA -> AÑADE AL FINAL DE LA LISTA
    //cola.unshift("Tarea"+cola.length); //COLA -> AÑADE AL PRINCIPIO DE LA LISTA

    contador++;

    //cola.push(`Tarea${+cola.length}`); //COLA -> AÑADE AL FINAL DE LA LISTA -> CON INTERPOLACION 
    //MODIFICAMOS CON EL CONTADOR
    cola.push(`Tarea${contador}`); //COLA -> AÑADE AL FINAL DE LA LISTA -> CON INTERPOLACION 

    mostrarCola();

}

function consumirTarea() {
    //cola.pop(); //OBTIENE EL ULTIMO ELEMENTO DE LA LISTA Y LO ELIMINA -> CONSUME LA ULTIMA
    let tarea = cola.shift(); //OBTIENE EL PRIMER ELEMENTO DE LA LISTA Y LO ELIMINA CONSUME LA PRIMERA
    console.log(`Realizamos la tarea ${tarea}`);
    mostrarCola();
}


function mostrarCola() {

    let textoHTML = "";

    cola.map(tarea => {

        textoHTML+=`<div class='tarea'>${tarea}</div>`;

    });

    document.querySelector("body").innerHTML = textoHTML;

    
}

if(cola.length > 3){
    clearInterval;
}