// Sidebar mobile click outside

var touchmobile = window.matchMedia('(hover: none), (touch:coarse), (hover: on-demand), (-moz-touch-enabled:1), (max-width: 768 px)');
if (touchmobile.matches){
	window.addEventListener('mouseup',function(event){
		var bar = document.getElementById('sidebar');
		if(event.target != bar && event.target.parentNode != bar){
		    bar.style.transform = 'translateX(-50%)';
		}
	  });  
}
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

//

// Media Modal

document.querySelectorAll('img.media').forEach(img => {
    img.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = img.getAttribute('src');
    }
});

document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}
