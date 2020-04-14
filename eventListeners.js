function listeners() {
    reproduccionGifs();
    hoversConectados();
    emailClipboard()
}

function reproduccionGifs() {
    let previews = Array.from(document.getElementsByClassName("contenedorgifproyecto"));
    for (let index = 0; index < 2; index++) {
        previews[index].addEventListener("click", function listenerStartGif() {
            startGif(index, previews);
            previews[index].removeEventListener("click", listenerStartGif);
        })
    }
}

function startGif(numero, previewArray) {
    previewArray[numero].children[0].children[0].classList.remove("slideDeArribaStart");
    previewArray[numero].children[0].children[0].classList.remove("slideDeArribaEnd");
    previewArray[numero].children[0].children[0].classList.add("slideDeArribaStart");
    previewArray[numero].children[1].style.display = "none"; /// REMUEVE EL BOTON PLAY
    setTimeout(() => {
        gifPreviewDinamico(previewArray, numero);
        previewArray[numero].children[0].children[0].classList.add("slideDeArribaEnd");
        setTimeout(() => {
            remueveGifPreview(numero, previewArray);
        }, 3000);
    }, 2000);
}

function remueveGifPreview(numero, previewArray) {
    previewArray[numero].addEventListener("click", function listenerRemueveGifPreview() {
        previewArray[numero].children[0].children[0].classList.remove("slideDeArribaStart");
        previewArray[numero].children[0].children[0].classList.remove("slideDeArribaEnd");
        previewArray[numero].removeEventListener("click", listenerRemueveGifPreview);
        previewArray[numero].children[0].children[0].classList.add("slideDeArribaStart");
        previewArray[numero].children[1].style.display = "none"; /// NO DEVUELVE EL BOTON PLAY
        setTimeout(() => {
            previewArray[numero].children[2].remove();
            previewArray[numero].children[0].children[0].classList.add("slideDeArribaEnd");
            reproduccionGifs();

        }, 2000);
    });
};



//////////////////////
/////// HOVERS ///////
//////////////////////

function hoversConectados() {
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
        if (playOnHover[index].children[0].style.display != "flex") { ////////////REVISAR
            playOnHover[index].addEventListener("mouseenter", function () {
                playOnHover[index].children[1].classList.add("videoOpacityHover");
            })
            playOnHover[index].addEventListener("mouseleave", function () {
                playOnHover[index].children[1].classList.remove("videoOpacityHover");
            })
        }
    }
}

////////////////////////
/////// CLIPBOARD ///////
////////////////////////

function emailClipboard() {
    let logoCopiar = document.querySelector(".emailboton_contenedor");
    logoCopiar.addEventListener("click", function listenerEmail() {
        logoCopiar.removeEventListener("click", listenerEmail);
        copiarTexto();
        document.querySelector(".textoCopiado").style.display = "block";
        document.querySelector(".textoCopiado").classList.add("pulsaOpacidad");
        document.querySelector(".botoncopiar").setAttribute("class", "botoncopiar desaparece1s") 
        setTimeout(() => {
            document.querySelector(".textoCopiado").style.display = "none";
            document.querySelector(".botoncopiar").setAttribute("class", "botoncopiar aparece1s")
            emailClipboard();
        }, 4000);   
    });
};


function copiarTexto() {
    const el = document.createElement('textarea');
    el.value = "pabloriusblanco@gmail.com";
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

