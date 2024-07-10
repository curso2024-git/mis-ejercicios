console.log("HOLA");

let dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];

console.log(dias[0]);
console.log(dias.length);
console.log(dias[dias.length-1]);
console.log(dias[7]);

dias[6]="sunday";
console.log(dias[dias.length-1]);
dias[20]="veinte";
console.log(dias[20]);
console.log(dias[19]);
console.log(dias);
console.log(dias.length);

//for(let i=0;i<dias.length;i++){

//    console.log(`DIA: ${dias[i]}`);

//}

//RECORREMOS EL ERRAY CON UN FOREACH
//dias.forEach(dia => console.log(`DIA: ${dia}`));

dias.forEach(function(d) { console.log(d.toLowerCase())});

//Recorremos el array con un foreach -> funcion flecha
dias.forEach((d) => { console.log(d.replaceAll('a','@'))});

//Recorremos el array con un foreach -> funcion flecha
dias.forEach((d) => { console.log(d.replaceAll('e','3'))});

let nombres = Array("Pedro","Ana","Arturo","Susana");
nombres[nombres.length]="Victor";
nombres.push("Nía");

nombres.forEach((n) => {console.log(n.toLocaleUpperCase())});

nombres.forEach(function convertir(nombre)  {console.log(nombre.toUpperCase())});

nombres.forEach((nombre) => console.log(nombre.toLowerCase()));    //funcion flecha

//METODO FILTER

console.log(nombres);
let nombresEmpiezanPorA = nombres.filter(nombre => nombre.startsWith('A'));

console.log(nombresEmpiezanPorA);

let nombresMayoresDeCuatro = nombres.filter(nombre => nombre.length > 4);

console.log(nombresMayoresDeCuatro);

//MAS DE 4 LETRAS Y QUE CONTENGAN LA LETRA A

let nombresMayoresDeCuatroConA = nombres.filter(nombre => nombre.length > 4 && nombre.includes('A'));
let resultado1 = nombres.filter((nombre) => nombre.length > 4 && nombre.toUpperCase().includes('A'));

console.log(nombresMayoresDeCuatroConA);
console.log(resultado1);

//METODO MAP -> MODIFICAMOS
//OBTENER EL ARRAY EN MAYUSCULAS
let nombresMayuscula = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayuscula);
console.log(nombres)

//OBTENER UNA COPIA DEL ARRAY SUSTITUYENDO LAS 'a' POR '@'
let nombresConArroba = nombres.map((nombre) => nombre.replaceAll('a','@'));
console.log(nombresConArroba);

//MAP Y FILTER

//DADO EL ARRAY DE NOMBRES EN UNA UNICA LINEA VAMOS A CAMBIAR LAS 'n' POR 'N' Y OBTENER UN ARRAY CON LOS 
//NOMBRES DE MENOS DE 4 CARACTERES
let nombresMapFilter = nombres.map((nombre) => nombre.replaceAll('n','N')).filter(nombre => nombre.length < 4);
console.log(nombresMapFilter);


//FIND -> DEVUELVE EL PRIMER ELEMENTO QUE CUMPLE LA CONDICION
const ages = [3, 11, 7, 9];
let result1 = ages.find((age) => age > 5);
console.log(result1);

//SORT -> ORDENAR
let num = [3, 11, 7, 9];
let numOrdenados = num.sort();
console.log(numOrdenados);


//SOME -> INDICA SI HAY ELEMENTOS QUE CUMPLEN UNA CONDICION -> DEVUELVE -> true / false
let hayNombresLargos = nombres.some(nombre => nombre.length > 3);
console.log(hayNombresLargos);














































