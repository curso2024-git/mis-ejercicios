
let cliente1 = {
    nombre: "Nombre cliente",
    direccion: "Calle Melancolia",
    telefono: "+3463046593"
}

console.log(cliente1);
console.log(typeof cliente1);

let factura1 = new Object();

factura1.numero = 1;
factura1.emisor = "Empresa Emisora";
factura1.cliente = cliente1;    //"Nombre de Cliente";
factura1.importe = 300;

console.log(factura1);
console.log(typeof factura1);

