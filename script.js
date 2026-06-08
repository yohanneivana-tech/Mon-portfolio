
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

// Lance la vérification au scroll et au chargement de la page
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

/* ================================
   2 — ONGLETS + IMAGE DYNAMIQUE
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
        if (newImg && image) {
            image.style.opacity = 0;
            setTimeout(() => {
                image.src = newImg;
                image.style.opacity = 1;
            }, 200);
        }
    });
});

/* ================================
   PROJETS — Slider
================================ */

/* Stocke le numéro de l'image actuelle pour chaque projet */
var indexSlider = {};

/* Ouvre le slider d'un projet */
function ouvrirSlider(id) {
    document.getElementById('slider-' + id).classList.add('ouvert');
    /* Ferme la vidéo si elle est ouverte */
    var panneau = document.getElementById('video-' + id);
    if (panneau) panneau.classList.remove('ouvert');
}

/* Ferme le slider */
function fermerSlider(id) {
    document.getElementById('slider-' + id).classList.remove('ouvert');
}

/* Va à une image précise (par numéro) */
function allerA(id, numero) {
    var images = document.querySelectorAll('#images-' + id + ' .slide-img');
    var total = images.length;

    /* Boucle si on dépasse la fin ou le début */
    if (numero >= total) numero = 0;
    if (numero < 0) numero = total - 1;

    /* Cache toutes les images */
    images.forEach(function(img) {
        img.classList.remove('active');
    });

    /* Affiche seulement celle choisie */
    images[numero].classList.add('active');

    /* Met à jour le compteur ex: "2 / 3" */
    document.getElementById('compteur-' + id).textContent = (numero + 1) + ' / ' + total;

    /* Sauvegarde l'index actuel */
    indexSlider[id] = numero;
}

/* Image suivante */
function slideSuiv(id) {
    var actuel = indexSlider[id] || 0;
    allerA(id, actuel + 1);
}

/* Image précédente */
function slidePrec(id) {
    var actuel = indexSlider[id] || 0;
    allerA(id, actuel - 1);
}

/* ================================
   PROJETS — Vidéo (BK seulement)
================================ */

function ouvrirVideo(id) {
    document.getElementById('video-' + id).classList.add('ouvert');
    /* Ferme le slider si ouvert */
    document.getElementById('slider-' + id).classList.remove('ouvert');
}

function fermerVideo(id) {
    var panneau = document.getElementById('video-' + id);
    panneau.classList.remove('ouvert');
    /* Met la vidéo en pause */
    var vid = panneau.querySelector('video');
    if (vid) vid.pause();
}

/* Touche Échap pour tout fermer */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.card-slider.ouvert, .card-video.ouvert').forEach(function(p) {
            p.classList.remove('ouvert');
            var vid = p.querySelector('video');
            if (vid) vid.pause();
        });
    }
});