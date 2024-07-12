class Serie {
    constructor(titulo, numeroTemporadas) {

        this.titulo = titulo;
        this.numeroTemporadas = numeroTemporadas;

    }

}

toString(){

    return this.nombre + ":::" + this.numeroTemporadas;
}

let from = new Serie("From", 3);


