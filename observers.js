function observadores() {
    const imgproyectos = document.querySelectorAll(".contenedorgifproyecto");

    const conScrollOpciones = {
        root: null, //es el viewport
        threshold: 0.25,
        rootMargin: "0%"
    };
    
    const apareceConScroll = new IntersectionObserver(function (entries, conScrollOpciones) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            }
            else {
                entry.target.classList.add("opacidad_escala")
                entry.target.children[1].style.display = "flex";
                apareceConScroll.unobserve(entry.target);
            }
        });
    });
    
    imgproyectos.forEach(gif => {
        apareceConScroll.observe(gif);
    });
     
}



