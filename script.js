
    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            // Retire l'état actif des boutons
            btn.forEach(b => b.classList.remove("active"));

            // Retire l'état actif des contenus
            contents.forEach(c => c.classList.remove("active"));

            // Active le bouton cliqué
            btn.classList.add("active");

            // Active le contenu correspondant
            document.getElementById(button.dataset.tab).classList.add("active");
        });
    });