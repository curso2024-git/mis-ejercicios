class Vehiculo {
    constructor(nombre, precio, consumo){
        console.log("Constructor...");
        this.nombre = nombre;
        this.precio = precio;
        this.consumo = consumo;
    }

}

let jcCar = new Vehiculo("Seat Ibiza",10_000,5.3);
let fpCar = new Vehiculo("Kia Ceed",9_500,6.4);
let laraCar = new Vehiculo("Mercedes",35_500,8.5);

let vehiculos = [];

vehiculos.push(jcCar);
vehiculos.push(fpCar);
vehiculos.push(laraCar);

console.log(laraCar);
console.log(vehiculos);

//vehiculos.sort((v1, v2) => v1.precio-v2.precio);
vehiculos.sort((v1, v2) => v1.consumo-v2.consumo);
//vehiculos.sort((v1, v2) => v1.consumo-v2.consumo).reverse();
console.log(vehiculos);

//let x = [3, -2, 5, 8, 4, 100];
//x.sort((a,b) => a-b);   //RESTA AL SEGUNDO 
//console.log(x);

