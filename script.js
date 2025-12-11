const btnHamburguer = document.getElementById("hamburguer");
const navMenu = document.getElementById("nav-menu");

// --- Abrir / cerrar menú ---
btnHamburguer.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    btnHamburguer.setAttribute("aria-expanded", isOpen);
});

// --- Cerrar al hacer clic en un enlace ---
navMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navMenu.classList.remove("active");
        btnHamburguer.setAttribute("aria-expanded", "false");
    }
});

// --- Cerrar al clicar fuera ---
document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !btnHamburguer.contains(e.target)) {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            btnHamburguer.setAttribute("aria-expanded", "false");
        }
    }
});

//Observador para disparar animaciones al entraral viewport

function initViewportAnimations(){
    const elementos = document.querySelectorAll("[data-anim]");
    const opciones = {
        root:null,
        rootMargin:"0px",
        threshold:0.15 //ajustable para cuando mostrar la animacion
    };
    const observer = new IntersectionObserver ((entradas, obs)=>{
        entradas.forEach((entrada)=>{
            if(entrada.isIntersecting){
                const el = entrada.target;//lee el tipo de animacion desde el HTML
                const animacion = el.dataset.anim;
                el.classList.add(animacion); //evita que se repita la animacion al hacer scroll
                obs.unobserve(el);
            }
        });
    }, opciones);
    elementos.forEach(el=>observer.observe(el));
}
document.addEventListener("DOMContentLoaded", initViewportAnimations);