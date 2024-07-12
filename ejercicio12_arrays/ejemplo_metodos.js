//CONCAT

let dat1 = ["1","15","4"];
let dat2 = ["0","33","2"];
let datConcat = dat1.concat(dat2);

console.log(datConcat);

//INCLUDES

console.log(datConcat.includes("15"));  //DEVUELVE TRUE/FALSE -> SI EL VALOR EXISTE

//JOIN

let datos = datConcat.join("-");
console.log(datos); //TEXTO -> 1-15-4-0-33-2



