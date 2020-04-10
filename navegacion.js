//////////////VARIABLES////////////
let subtitulos;

////////////FUNCION STARTUP////////////
function navegacion() {
    navegacionPresentacion();
    navegacionIrAlPrincipio();
    navegacionIrAlCV();
}

////////////FUNCIONES NAVEGACION////////////
function navegacionPresentacion() {
    let navpresentacion = Array.from(document.getElementsByClassName("logospresentacion"));
    subtitulos = Array.from(document.getElementsByClassName("textosubtitulo"));
    for (let index = 0; index < 3; index++) {
        navpresentacion[index].addEventListener("click", function () {
            subtitulos[index].scrollIntoView({behavior: "smooth"});
        });
    };
};

function navegacionIrAlPrincipio() {
    let princioBoton = document.querySelector(".boton_gototop");
    princioBoton.addEventListener("click", function () {
       document.querySelector(".mainbody").scrollIntoView({behavior: "smooth"});
    });
};


function navegacionIrAlCV() {
    let acaBoton = document.querySelector(".acaBoton");
    acaBoton.addEventListener("click", function () {
       document.querySelector(".Cv_pdf").scrollIntoView({behavior: "smooth", block: "center"});
    });
};