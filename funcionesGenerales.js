function funcionesGenerales() {
    listeners();
    navegacion();
}

function listeners() {
    reproduccionGifs();
    hoversConectados();
}

function reproduccionGifs() {
    let previews =  Array.from(document.getElementsByClassName("videoOpacity"));
    for (let index = 0; index < previews.length; index++) {
        previews[index].addEventListener("click", function () {
            console.log("previews" + index)
        })
    }
}

function hoversConectados(){
        let botonesLinks = Array.from(document.getElementsByClassName("contenedorlink"));
        let mouseOverEvento = new Event('mouseover');
        for (let index = 0; index < botonesLinks.length; index++) {
            botonesLinks[index].addEventListener("mouseenter", function () {
                botonesLinks[index].children[0].classList.add("hoverIconos");
            })
            botonesLinks[index].addEventListener("mouseleave", function () {
                botonesLinks[index].children[0].classList.remove("hoverIconos");
            })
            
        }
}