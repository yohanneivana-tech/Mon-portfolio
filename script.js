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

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // vérifie au chargement

/* ================================
   2 — ONGLET + IMAGE DYNAMIQUE
================================ */

const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

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
        
    });
});

/* ================================
   3 — BURGER MENU MOBILE
================================ */

const toggle = document.getElementById('nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Ferme le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
     });

}    
/* ================================
   CNIL — Liste des documents
================================ */
const cnilCard = document.getElementById('cnilCard');

function openDocList() {
    cnilCard.classList.add('list-open');
}

function closeDocList() {
    cnilCard.classList.remove('list-open');
}

/* Quand le curseur quitte la carte → tout remet à zéro */
cnilCard.addEventListener('mouseleave', function() {
    cnilCard.classList.remove('list-open');
});