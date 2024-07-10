document.body.style.backgroundColor = "sky";

function comprobarSensor1() {

    let valorSensor1 = document.getElementById("sensor1").value;
    console.log(valorSensor1);

    //return !(valorSensor1<10); //opcion 1
    
    let sensorOK;

    if(valorSensor1<10){
        sensorOK = false;
    //    document.querySelector("#marcador1").classList.remove("verde");
    //    document.querySelector("#marcador1").classList.add("rojo");

        document.querySelector("#marcador1").style.backgroundColor="red";

    }
    else {
        sensorOK = true;
        //document.querySelector("#marcador1").classList.remove("rojo");
        //document.querySelector("#marcador1").classList.add("verde");

        document.querySelector("#marcador1").style.backgroundColor="green";
    }


    return sensorOK;
}

function comprobarSensor2() {

    let valorSensor2 = document.querySelector("#sensor2").value;
    console.log(valorSensor2);
    
    // OPERACIONES TERNARIAS
    //let sensorOK = valorSensor2<10 ? false : true;

    if(valorSensor2<10){
        sensorOK = false;
        //document.querySelector("#marcador2").classList.remove("verde");
        //document.querySelector("#marcador2").classList.add("rojo");

        document.querySelector("#marcador2").style.backgroundColor="red";
    }
    else {
        sensorOK = true;
        document.querySelector("#marcador2").classList.remove("rojo");
        document.querySelector("#marcador2").classList.add("verde");

        document.querySelector("#marcador2").style.backgroundColor="green";
    }

    return sensorOK;


    
}

function comprueba() {
   
    if(comprobarSensor1() & comprobarSensor2()){

        alert( "Todo ok");

    }
    else {

        alert( "Error");

    }




}