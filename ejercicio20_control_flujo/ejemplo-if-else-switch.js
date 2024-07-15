//********************
//If - else if - else 
//********************

let salario = 10_000;

if (salario < 20_000) {
    console.log("Salario insuficiente");
}
else if (salario < 30_000) {
    console.log("No está mal");
}
else {
    console.log("Está bien");
}

//***************
let edad = 50;
let estadoCivil = "Soltero";
let idiomas = ["Inglés", "Español", "Francés", "Chino"];
let permisoConducir = true;
let movilidadGeografica = false;

//Tiene que ser mayor de edad, estar soltero, hablar Inglés, tener permiso de conducir y
//disponer de movilidad geográfica

if (edad >= 18 && estadoCivil === "Soltero" && idiomas.includes("Inglés") && permisoConducir === true && movilidadGeografica === false) {

    console.log("Cumple las condiciones");

} else {
    console.log("No cumple las condiciones");
}

// variante cool
let esMayordeEdad = edad >= 18
let esSoltero = estadoCivil === "Soltero"
let sabeIngles = idiomas.includes("Inglés")

if (esMayordeEdad && esSoltero && sabeIngles && permisoConducir && !movilidadGeografica) {

    console.log("Aceptado");

} else {
    console.log("Descartado");
}

//********************
//switch 
//********************

let tipoContrato = 1;

if (tipoContrato == 1) {
    console.log("tipo1");
}
else if (tipoContrato == 2) {
    console.log("tipo2");
}
else if (tipoContrato == 3) {
    console.log("tipo3");
}
else {
    console.log("No existe el tipo indicado");
}


switch (tipoContrato) {
    case 1:
        console.log("tipo1");
        //break;    //solo una prueba
    case 2:
        console.log("tipo2");
        break;
    case 3:
        console.log("tipo3");
        break;
    default:
        console.log("No existe el tipo indicado");

}



