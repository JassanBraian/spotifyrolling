class Album {
    constructor(nombre, descrip, imgUrl, esDestacada, categoria) {
        this.id = Date.now();
        this.nombre = nombre;
        this.descrip = descrip;
        this.imgUrl = imgUrl;
        this.esDestacada = esDestacada;
        this.categoria = categoria;
    }
}

export default Album;