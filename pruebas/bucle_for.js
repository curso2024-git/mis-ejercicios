//for (let i = 0; i < 10; i++) {
//    console.log(i);
//}

function saludar() {
    console.log("HOLA");
}

for (let i = 0; i < 10; i++,saludar()) {
    console.log(i);
}

for (let i = 0; i < 10; i++,()=>console.log("ADIOS")) { //no va
    console.log(i);
}

//for(;;){}   //ejecucion infinitaquit
