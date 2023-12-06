
    function checkAnswers() {
        var q1Answer = document.getElementById('q1Answer').value.toLowerCase();
        var q2Answer = document.querySelector('input[name="q2"]:checked');
        var q3Answer = document.querySelector('input[name="q3"]:checked');

        var allCorrect = true;

        // Question 1
        if (q1Answer !== "madrid") {
            allCorrect = false;
        }

        // Question 2
        if (!q2Answer || q2Answer.value !== "a") {
            allCorrect = false;
        }

        // Question 3
        if (!q3Answer || q3Answer.value !== "b") {
            allCorrect = false;
        }

        // Afficher les résultats
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";

        if (allCorrect) {
            document.getElementById("quizResult").innerHTML = "Félicitations ! Vous avez réussi le quiz.";
            document.getElementById("mediaContainer").style.display = "block";
            // Afficher la vidéo (ou l'image)
            if (Math.random() < 0.5) {
                document.getElementById("videoElement").style.display = "block";
            } else {
                document.getElementById("imageElement").style.display = "block";
            }
        } else {
            document.getElementById("quizResult").innerHTML = "Dommage. Veuillez réessayer le quiz.";
        }
    }

    function retryQuiz() {
        document.getElementById("quizContainer").style.display = "block";
        document.getElementById("resultContainer").style.display = "none";
        document.getElementById('q1Answer').value = "";
        document.querySelector('input[name="q2"]').checked = false;
        document.querySelector('input[name="q3"]').checked = false;
        document.getElementById("mediaContainer").style.display = "none";
        document.getElementById("videoElement").style.display = "none";
        document.getElementById("imageElement").style.display = "none";
    }

