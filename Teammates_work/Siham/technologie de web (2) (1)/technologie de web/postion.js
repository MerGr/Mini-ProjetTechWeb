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
  // Fonction pour changer le style de la div container lors du clic sur un élément de la barre verticale
  function changeContainerStyle(chapitre) {
    // Obtenez la div container
    const container = document.querySelector('.container');

    // Réinitialisez les styles à chaque clic pour éviter les accumulations de styles
    container.style.backgroundColor = ''; // Réinitialisation de la couleur de fond

    // Changez le style en fonction du chapitre sélectionné
    switch (chapitre) {
        case 'chapitre1':
            container.style.backgroundColor = '#ffcccc'; // Nouvelle couleur de fond pour le chapitre 1
            break;
        case 'chapitre2':
            container.style.backgroundColor = '#ccffcc'; // Nouvelle couleur de fond pour le chapitre 2
            break;
        // Ajoutez des cas pour chaque chapitre selon vos préférences
        // ...
        case 'chapitre3':
        container.style.backgroundColor = '#31287C ';
        break;
        default:
            break;
    }
}
// vertical-bar
const sidebar = document.getElementById('sidebar');
    const verticalBar = document.getElementById('submenu1');

    function showVerticalBar() {
        verticalBar.style.display = 'block';
    }

    function keepVerticalBarVisible() {
        verticalBar.style.display = 'block';
    }

    function hideVerticalBar(e) {
        const relatedTarget = e.relatedTarget;
        if (relatedTarget !== sidebar && relatedTarget !== verticalBar) {
            verticalBar.style.display = 'none';
        }
    }

    sidebar.addEventListener('mouseleave', hideVerticalBar);
    verticalBar.addEventListener('mouseleave', hideVerticalBar);