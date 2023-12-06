// Theme switcher

var toggle = document.getElementById("themebttn");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

var currentTheme = document.documentElement.getAttribute("data-theme");
if (currentTheme === "light"){
    toggle.innerHTML="🌙";
}
else {
    toggle.innerHTML="☀️";
}


toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    toggle.innerHTML="🌙";

    if (currentTheme === "light") {
        targetTheme = "dark";
        toggle.innerHTML="☀️";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

//

//Fade in, Fade out

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenelmts = document.querySelectorAll('.hidden');
hiddenelmts.forEach((el) => observer.observe(el));