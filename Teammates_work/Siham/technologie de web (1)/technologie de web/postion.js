function showSubmenu(submenuId) {
    var submenuToShow = document.getElementById(submenuId);
    if (submenuToShow) {
        submenuToShow.style.display = 'block';
    }
}
const container = document.getElementById('infinite-scroll');

        container.addEventListener('scroll', function() {
            // Vérifier si l'utilisateur atteint le bas de la zone de défilement
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                // Ajouter ici du contenu supplémentaire pour simuler le défilement infini
                addChapters(5); // Par exemple, ajoute 5 nouveaux chapitres à chaque défilement vers le bas
            }
        });

        function addChapters(count) {
            for (let i = 0; i < count; i++) {
                const newChapter = document.createElement('div');
                newChapter.innerHTML = `<p>Nouveau chapitre ${i + 1}</p>`; // Ajoutez le contenu pour chaque nouveau chapitre
                container.appendChild(newChapter);
            }
        }
  /* changer le mode */
  function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    // Change le thème
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
    }
}