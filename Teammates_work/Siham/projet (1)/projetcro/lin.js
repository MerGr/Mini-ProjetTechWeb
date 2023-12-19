function showSubmenu(submenuId) {
    var submenuToShow = document.getElementById(submenuId);
    if (submenuToShow) {
        submenuToShow.style.display = 'block';
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
    // quiz js 
const questions = [//validation des question
    {
      question: "What does the acronym 'GNU' stand for in Linux?",
      choices: ["GNU's Not Unix", "Global Network University", "Graphical Networking Utility", "General Network Usage"],
      correctAnswer: "GNU's Not Unix"
    },
    {
      question: "Who is the original creator of the Linux kernel?",
      choices: ["Richard Stallman", "Bill Gates", "Linus Torvalds", "Steve Jobs"],
      correctAnswer: "Linus Torvalds"
    },
    {
      question: "Which shell is the default command-line interpreter in most Linux systems?",
      choices: ["Bash", "Korn", "Zsh", "Tcsh"],
      correctAnswer: "Bash"
    },
    {
      question: "What is the package manager used in Ubuntu Linux?",
      choices: ["RPM", "Apt", "YUM", "DNF"],
      correctAnswer: "Apt"
    }
  ];

  const questionEl = document.getElementById("question");
  const choiceEls = Array.from(document.querySelectorAll("label"));
  const submitBtn = document.getElementById("submit");
  const resultsEl = document.getElementById("results");

  let currentQuestion = 0;
  let score = 0;

 function displayQuestion() {
 const currentQ = questions[currentQuestion];
 questionEl.textContent = currentQ.question;

  choiceEls.forEach((choice, index) => {
  choice.textContent = currentQ.choices[index];
});
}

function checkAnswer() {
const selectedOption = document.querySelector('input[name="answer"]:checked');

if (selectedOption) {
  if (selectedOption.nextElementSibling.textContent === questions[currentQuestion].correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
} else {
  alert("Please select an answer!");
}
}

function showResults() {
resultsEl.textContent = `You scored ${score} out of ${questions.length}!`;
submitBtn.style.display = "none";
}

submitBtn.addEventListener("click", checkAnswer);

displayQuestion();
function showResults() {
  if (score === questions.length) {
    // Si toutes les réponses sont correctes, affichez la vidéo
    const video = document.getElementById("gift-video");
    video.style.display = "block";
    resultsEl.textContent = "Congratulations! You got all the answers right!";
    submitBtn.style.display = "none";
  } else {
    // Si certaines réponses sont incorrectes, proposez de recommencer le quiz
    resultsEl.innerHTML = `You scored ${score} out of ${questions.length}.<br><button onclick="restartQuiz()">Try Again</button>`;
  }
}

function restartQuiz() {
  // Réinitialiser les valeurs et réafficher le quiz
  currentQuestion = 0;
  score = 0;
  resultsEl.textContent = "";
  submitBtn.style.display = "block";
  displayQuestion();
  const video = document.getElementById("gift-video");
  video.style.display = "none";
}
// le button
 // Récupérer le bouton pour lancer le quiz
 const quizButton = document.getElementById("quizButton");

 // Récupérer l'élément contenant le quiz
 const quizContainer = document.querySelector(".quiz-container");

 // Ajouter un écouteur d'événements pour le clic sur le bouton
 quizButton.addEventListener("click", function() {
     // Afficher le quiz lorsque le bouton est cliqué
     quizContainer.style.display = "block";
 });

 
 