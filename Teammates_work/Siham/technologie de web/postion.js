function showSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.width = "200px";
    }
}

function showSubmenu(submenuId) {
    var submenuToShow = document.getElementById(submenuId);
    if (submenuToShow) {
        submenuToShow.style.display = "block";
    }
}

function hideSubmenu() {
    var elements = document.querySelectorAll(".hideable");
    elements.forEach(function (element) {
        element.style.display = "none";
    });
}
