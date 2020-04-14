let ContenedorTipeo;
tipeoOnLoad();

function tipeoOnLoad() {
    window.onload = function () {
        ContenedorTipeo = document.getElementById("textopredeterminado");
        let tipeador = startDeTipeo(ContenedorTipeo);
        tipeador.type();
        observadores();
        funcionesGenerales();
        document.querySelector(".comienzotexto_contenedor").style.display = "flex";
        document.querySelector(".saltar_contenedor").style.display = "flex";
        document.querySelector(".saltar_contenedor").setAttribute("class", "saltar_contenedor opacidad1");
        document.querySelector(".saltar_contenedor").addEventListener("click", function () {
            skip();
        })
    };
}


function startDeTipeo(parametro) {     ///Borra contenido de html
    let HTML = parametro.innerHTML;
    parametro.innerHTML = "";

    ///Definición de variables a utilizar con scope local
    var posicionDelCursor = 0,
        vacio = "",
        sobreEscribirTag = false,
        tagAbierto = false,
        velocidadDeTipeo = 100,
        velocidadDeTipeoTemporal = 0;

    var funcionDeTipeo = function () {

        if (sobreEscribirTag === true) {
            vacio += HTML[posicionDelCursor];
        }

        if (HTML[posicionDelCursor] === "<") { //comienza el evaluador de longitud de los tag
            velocidadDeTipeoTemporal = 0;
            if (tagAbierto) {
                tagAbierto = false;
                sobreEscribirTag = true;
            } else {
                vacio = "";
                tagAbierto = true;
                sobreEscribirTag = true;
                vacio += HTML[posicionDelCursor];
            }
        }
        if (!sobreEscribirTag && tagAbierto) {
            vacio.innerHTML += HTML[posicionDelCursor];
        }
        if (!sobreEscribirTag && !tagAbierto) {
            if (HTML[posicionDelCursor] === " ") {
                velocidadDeTipeoTemporal = 0;
            }
            else {
                velocidadDeTipeoTemporal = (Math.random() * velocidadDeTipeo) - 10 //35 velocidad bastante real
            }
            parametro.innerHTML += HTML[posicionDelCursor];
        }
        if (sobreEscribirTag === true && HTML[posicionDelCursor] === ">") { //comienza el borrado de los tags 
            velocidadDeTipeoTemporal = (Math.random() * velocidadDeTipeo) - 10; //35 velocidad bastante real
            sobreEscribirTag = false;
            if (tagAbierto) {
                var nuevoSpan = document.createElement("span");
                parametro.appendChild(nuevoSpan);
                nuevoSpan.innerHTML = vacio;
                vacio = nuevoSpan.firstChild;
            }
        }

        posicionDelCursor += 1; //suma posiciones con iteracion
        if (posicionDelCursor < HTML.length - 1) {
            setTimeout(funcionDeTipeo, velocidadDeTipeoTemporal);
        }
        if (posicionDelCursor + 1 > HTML.length - 1 && document.querySelector(".saltar_contenedor").className != "saltar_contenedor hacia_arriba") { ///FINAL
            skip();
        }

    };

    return {
        type: funcionDeTipeo
    };
};

function skip() {
    document.querySelector(".saltar_contenedor").setAttribute("class", "saltar_contenedor hacia_arriba");
    setTimeout(() => {
        document.querySelector(".fondorojo").setAttribute("class", "fondorojo opacidad0a1");
        setTimeout(() => {
            document.querySelector(".fondorojo").setAttribute("class", "fondorojo opacidad3");
            document.querySelector(".mainbody").style.display = "flex";
            document.querySelector(".comienzo_contenedor").style.display = "none";
            document.querySelector(".mainbody").setAttribute("class", "mainbody aparece3");
            presentacionEstilos();
            setTimeout(() => {
                document.querySelector(".cortina").style.display = "none";
            }, 3000);
        }, 1000);
    }, 1000);
}
