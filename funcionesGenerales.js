function funcionesGenerales() {
    listeners();
}

function listeners() {
    reproduccionGifs();
    hoversConectados();
}

function reproduccionGifs() {
    let proyectos =  Array.from(document.getElementsByClassName("contenedorgifproyecto"));
    for (let index = 0; index < proyectos.length; index++) {
        proyectos[index].addEventListener("click", function () {
            console.log("proyecto" + index)
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