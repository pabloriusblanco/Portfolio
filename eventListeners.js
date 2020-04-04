function listeners() {
    reproduccionGifs();
    hoversConectados();
}

function reproduccionGifs() {
    let previews =  Array.from(document.getElementsByClassName("contenedorgifproyecto"));
    for (let index = 0; index < previews.length; index++) {
        previews[index].addEventListener("click", function () {
            startGif(index, previews);
        })
    }
}

function startGif(numero, previewArray) {
        previewArray[numero].children[0].children[0].classList.add("slideDeArriba");
        previewArray[numero].children[0].style.display = "block";
        previewArray[numero].children[1].classList.add = "desaparece1s";
        setTimeout(() => {
            previewArray[numero].children[2].src = "/img/podcast.gif";
            setTimeout(() => {
                previewArray[numero].children[0].style.display = "none";
            }, 1000);
        }, 2000);
}

//////////////////////
/////// HOVERS ///////
//////////////////////

function hoversConectados(){
        let botonesLinks = Array.from(document.getElementsByClassName("contenedorlink"));
        for (let index = 0; index < botonesLinks.length; index++) {
            botonesLinks[index].addEventListener("mouseenter", function () {
                botonesLinks[index].children[0].classList.add("hoverIconos");
            })
            botonesLinks[index].addEventListener("mouseleave", function () {
                botonesLinks[index].children[0].classList.remove("hoverIconos");
            })            
        }
        
        let playOnHover = Array.from(document.getElementsByClassName("contenedorgifproyecto"));
        for (let index = 0; index < playOnHover.length; index++) {
            if (playOnHover[index].children[0].style.display != "block") { ////////////REVISAR
                playOnHover[index].addEventListener("mouseenter", function () {
                    playOnHover[index].children[1].classList.add("videoOpacityHover");
                })
                playOnHover[index].addEventListener("mouseleave", function () {
                    playOnHover[index].children[1].classList.remove("videoOpacityHover");
                })   
            }
        }
}

