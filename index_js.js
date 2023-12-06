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

 // Get the elements
 var element1 = document.getElementsByClassName('navoption');
 var element2 = document.getElementsByClassName('chapbar');

 // Add event listener for mouseenter
 element1.addEventListener('mouseenter', function () {
   // Get the computed width of element1
   var element1Width = window.getComputedStyle(element1).width;

   // Convert the width to a number and calculate 2.5 times
   var newWidth = parseFloat(element1Width) * 2.5;

   // Set the width of element2
   element2.style.width = newWidth + 'px';
 });

 // Add event listener for mouseleave
 element1.addEventListener('mouseleave', function () {
   // Reset the width of element2 when the mouse leaves element1
   element2.style.width = '';
 });