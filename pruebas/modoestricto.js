//"use strict"    //RECOMENDABLE USARLO A NIVEL GLOBAL -> APLICADO A AMBITO GLOBAL DA ERRORES
nombre = "N1";  //MODO ESTRICTO PROVOCA ERROR
console.log(nombre);

function prueba(){
    "use strict"
    num = 3;  //MODO ESTRICTO PROVOCA ERROR
    console.log(num);

}

prueba();
