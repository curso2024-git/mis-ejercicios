class player {
    constructor(sprite, x, y, speed) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.speed = speed;

        //secuencia de ejecucion -> 1 2 4 5 3 
        //en el paso 5 no tenemos aun cargada la imagen

        console.log("paso 1");
        let imagen = new Image();   //objeto de la clase Image -> la instancia imagen -> Image [ clase de JS ]
        console.log("paso 2");
        imagen.onload = function () {   //funcion callback
            console.log("paso 3");
            console.log("Imagen vargada");  //carga de imagen es asincrona
            
            let c = document.querySelector("#myCanvas");
            let ctx = c.getContext("2d");
            ctx.drawImage(imagen, x, y, 100, 100);
            
            //ctx.drawImage(imagen, 0, 0);
            //ctx.fillStyle(imagen, 0, 0);


        };
        console.log("paso 4");
        imagen.src = `ìmages/${sprite}`;
        console.log("paso 5");


    }

    moverse(desplazamiento) {

        this.x = this.x + desplazamiento * this.speed;

    }

    disparar() {

        console.log("disparando ... ");

    }

    explotar() {

        console.log("explotando ... ");

    }

  


}