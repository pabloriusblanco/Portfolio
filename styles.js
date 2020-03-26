function presentacionEstilos() {
    setTimeout(() => {
        let prbNombre = document.querySelector(".nombre_contenedor");
        prbNombre.classList.add("aparece1s");
        setTimeout(() => {
            let posiciones = document.querySelector(".posicionesseparador");
            posiciones.classList.add("hamaca_adelante");
            let logospresentacion = Array.from(document.getElementsByClassName("contenedor_logo_presentacion"));
            for (let index = 0; index < logospresentacion.length; index++) {
                setTimeout(() => {
                    logospresentacion[index].classList.add("bounce-in-right");
                }, 500 * index);
            }
        }, 1000);
    }, 1000);
};



