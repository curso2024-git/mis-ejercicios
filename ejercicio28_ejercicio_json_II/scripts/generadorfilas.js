function crearFila(imagen, address, description, title, subcategoria, postcode) {
    //<div class="monumento">
    let divMonumento = document.createElement("div");
    divMonumento.classList.add("monumento");
    document.querySelector("#monumentos").appendChild(divMonumento);
    //<div class="imagen">
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen");
    divMonumento.appendChild(divImagen);
    //<img src="./images/r1.jpg">
    let imgMonumento = document.createElement("img");
    imgMonumento.src = imagen;
    divImagen.appendChild(imgMonumento);
    //<div class="descripcion">
    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion");
    divMonumento.appendChild(divDescripcion);
    //<div class="address">Alfredo's bbq</div>
    let divAddress = document.createElement("div");
    divAddress.classList.add("address");
    divAddress.appendChild(document.createTextNode(address));
    divDescripcion.appendChild(divAddress);
    //<div class="description">Americano</div>
    let divDescription = document.createElement("div");
    divDescription.classList.add("description");
    divDescription.appendChild(document.createTextNode(description));
    divDescripcion.appendChild(divDescription);
    //<div class="precio">30€</div>
    let divTitle = document.createElement("div");
    divTitle.classList.add("title");
    divTitle.appendChild(document.createTextNode(title));
    divDescripcion.appendChild(divTitle);
    //<div class="subcategoria">30€</div>
    let divSubcategoria = document.createElement("div");
    divSubcategoria.classList.add("subcategoria");
    divSubcategoria.appendChild(document.createTextNode(subcategoria));
    divDescripcion.appendChild(divSubcategoria);
    let divPostCode = document.createElement("div");
    divPostCode.classList.add("postcode");
    divPostCode.appendChild(document.createTextNode(postcode));
    divDescripcion.appendChild(divPostCode);
    //<hr>
    document.querySelector("#monumentos").appendChild(document.createElement("hr"));
}
/*
<div class="monumento">
    <div class="imagen">
        <img src="./images/r1.jpg">
    </div>
    <div class="descripcion">
        <div class="address">Alfredo's bbq</div>
        <div class="description">Americano</div>
        <div class="title">30€</div>
        <div class="subcategoria">30€</div>
        <div><hr/></div>
    </div>
</div>
*/