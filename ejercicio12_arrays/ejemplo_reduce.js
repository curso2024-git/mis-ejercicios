let numeros = [3, 8, 9];

let resultado = numeros.reduce((n1, n2) => n1 + n2);
let resultado2 = numeros.reduce((n1, n2) => n1>n2 ? n1 : n2);   //DEVUELVE EL MAYOR

console.log(resultado);

console.log(resultado2);