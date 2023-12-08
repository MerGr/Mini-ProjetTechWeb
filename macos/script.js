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
}, {
    threshold: 0.1
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


// Quiz
const quizzes = [
    [
        { question: "When did the Apple I come out?", options: ["1979", "1978", "1977", "1976"], correctAnswer: "1976" },
    ],
    [
        { question: "What was Classic Mac OS partially based on?", options: ["Xerox PARC Alto", "DOS", "Unix"], correctAnswer: "Xerox PARC Alto" },
    ],
];

let currentQuiz = 1;
let currentQuestion = 0;

function loadQuestion() {
    const questionContainer = document.getElementById(`question-${currentQuiz}`);
    questionContainer.innerHTML = `
        <p>${quizzes[currentQuiz - 1][currentQuestion].question}</p>
        ${quizzes[currentQuiz - 1][currentQuestion].options.map((option, index) => `
        <label>
            <input type="radio" name="option" value="${option}" />
            ${option}
        </label>
    `).join('')}
        <div class="inputcontainer" id="input-${currentQuiz}">
            <button onclick="checkAnswer(${currentQuiz})">Submit Answer</button>
        </div>
    `;
}

function checkAnswer(quizNumber) {
    const questionContainer = document.getElementById(`question-${quizNumber}`);
    const selectedOption = document.querySelector(`#quiz-${quizNumber} input[name="option"]:checked`);
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === quizzes[quizNumber - 1][currentQuestion].correctAnswer) {
            currentQuestion++;
            if (currentQuestion === quizzes[quizNumber - 1].length) {
                // Tout Correcte
                document.getElementById(`quiz-${quizNumber}`).classList.add('fade-out');
            } else {
                // Continue
                loadQuestion();
            }
        } else {
            // Faux
            questionContainer.innerHTML = 
            `<h2 id="red">WRONG!</h2>
            <button onclick="restartQuiz(${quizNumber})">Restart Quiz</button>`;
        }
    }
}

function restartQuiz(quizNumber) {
    currentQuestion = 0;
    currentQuiz = quizNumber;
    loadQuestion();
}

window.onload = function () {

    loadQuestion();
    document.getElementsByClassName(`quiz`).style.display = 'flex';
};
