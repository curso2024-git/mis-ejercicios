let nombre = "Mostoles";
let poblacion = "22000";
let codigoPostal = 28010;

nombre = nombre + "incrementado";
poblacion = parseInt(poblacion) + 10000;
console.log(nombre);
console.log(poblacion);
console.log(typeof codigoPostal);   //number
codigoPostal = codigoPostal.toString();
console.log(typeof codigoPostal);   //string

let entero = 3;
let decimal = 3.5;
let strEntero = "4";
let strDecimal = "4.8";

console.log(parseFloat(entero));    //3
console.log(parseInt(decimal));     //3
console.log(parseFloat(decimal));   //3.5
console.log(parseFloat(strEntero));    //4
console.log(parseInt(strDecimal));     //4
console.log(parseFloat(strDecimal));    //4.8


console.log("cadena de caracteres \"\"");
console.log("cadena de caracteres \\\"");

 