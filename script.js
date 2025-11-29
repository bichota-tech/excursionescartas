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
