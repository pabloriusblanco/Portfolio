function gifPreviewDinamico(previewArray, numero) {
    let imagenPreviewDinamico = document.createElement("img");
    let ImagenPreviewEstatico = previewArray[numero].children[2];
    imagenPreviewDinamico.setAttribute("class", "preview");
    imagenPreviewDinamico.style.position = "absolute";
    // document.querySelector(".preview_estatico").style.display = "none";
    if (numero == 0) {
        imagenPreviewDinamico.setAttribute("src", "./img/podcast.gif");
        previewArray[numero].insertBefore(imagenPreviewDinamico, ImagenPreviewEstatico)
    }
}