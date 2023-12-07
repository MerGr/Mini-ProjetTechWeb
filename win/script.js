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

// Quiz
const quizzes = [
    [
        { question: "Before MS-DOS, what was Microsoft's prior OS called?", options: ["Xerox", "Xenix", "MS-Unix", "NT"], correctAnswer: "Xenix" },
    ],
    [
        { question: "What was the predecessor to Excel?", options: ["Lotus 1-2-3", "Microsoft Spreadsheets", "TableDraw"], correctAnswer: "Lotus 1-2-3" },
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
            questionContainer.innerHTML = `<h2 id="red">WRONG!</h2>
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