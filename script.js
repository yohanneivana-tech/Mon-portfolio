/* ================================
   1 — ANIMATION REVEAL AU SCROLL
================================ */

const revealElements = document.querySelectorAll('.reveal');

function checkVisibility() {
    revealElements.forEach(function(element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 80) {
            element.classList.add('Visible');
        }
    });
}

/* ================================
   2 — ONGLET + IMAGE DYNAMIQUE
================================ */

const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
const image = document.getElementById("about-img");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        // Active le bon bouton
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Affiche le bon contenu
        const tab = btn.getAttribute("data-tab");
        contents.forEach(c => {
            c.classList.remove("active");
            if (c.id === tab) c.classList.add("active");
        });
        // Change l'image avec un fade
        const newImg = btn.getAttribute("data-img");

        if (newImg) {
            image.style.opacity = 0;

            setTimeout(() => {
                image.src = newImg;
                image.style.opacity = 1;
            }, 200);
        }
    });
});