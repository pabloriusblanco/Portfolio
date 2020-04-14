// function gifPreviewDinamico(previewArray, numero) {
//     let imagenPreviewDinamico = document.createElement("img");
//     let ImagenPreviewEstatico = previewArray[numero].children[2];
//     imagenPreviewDinamico.setAttribute("class", "preview");
//     imagenPreviewDinamico.style.position = "absolute";
//     // document.querySelector(".preview_estatico").style.display = "none";
//     if (numero == 0) {
//         imagenPreviewDinamico.setAttribute("src", "./img/podcast.gif");
//         previewArray[numero].insertBefore(imagenPreviewDinamico, ImagenPreviewEstatico)
//     }
// }

function gifPreviewDinamico(previewArray, numero) {
    let imagenPreviewDinamico = document.createElement("video");
    let videoSourcetag = document.createElement("source");
    let ImagenPreviewEstatico = previewArray[numero].children[2];
    imagenPreviewDinamico.setAttribute("class", "preview");
    imagenPreviewDinamico.setAttribute("overflow", "hidden");
    imagenPreviewDinamico.style.position = "absolute";
    imagenPreviewDinamico.autoplay = true;
    imagenPreviewDinamico.loop = true;
    // document.querySelector(".preview_estatico").style.display = "none";
    if (numero == 0) {
        videoSourcetag.setAttribute("src", "./img/Podcast test.mp4");
        videoSourcetag.setAttribute("type", "video/mp4");
        previewArray[numero].insertBefore(imagenPreviewDinamico, ImagenPreviewEstatico);
        imagenPreviewDinamico.append(videoSourcetag);
    }
    if (numero == 1) {
        videoSourcetag.setAttribute("src", "./img/Gifos.mp4");
        videoSourcetag.setAttribute("type", "video/mp4");
        previewArray[numero].insertBefore(imagenPreviewDinamico, ImagenPreviewEstatico);
        imagenPreviewDinamico.append(videoSourcetag);
    }
    
}