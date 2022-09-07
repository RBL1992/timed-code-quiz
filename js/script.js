var startPage = document.querySelector(".main-page");
var questionBox = document.querySelector("#Question");
var startQuizButton = document.querySelector(".start-button");
var timerCountdown = document.querySelector(".timer");
var remainingTime = 100;
var questionIndex = 0;
var currentQuestion = document.querySelector('#New-Question');
var answerChoices = document.querySelector('#list-of-avaible-answers');
var initialsBox = document.querySelector('.initialsInput');
var endOfQuizScreen = document.querySelector('.end-screen');

questionBox.addEventListener('click', nextQuestion);

startQuizButton.addEventListener("click", countDown);
function countDown() {
    startPage.style.display = "none";
    questionBox.style.display = "block";
    var countDown = setInterval(function () {
        if (remainingTime > 1) {
            timerCountdown.textContent = remainingTime + ' seconds remaining';
            remainingTime--;
        } else if (remainingTime === 1) {
            timerCountdown.textContent = remainingTime + ' second remaining';
            remainingTime--;
        } else {
            timerCountdown.textContent = '';
            clearInterval(countDown);
        }
    }, 1000);
    startQuiz();
}


function startQuiz() {
    var viewableQuestion = questions[questionIndex];

    currentQuestion.textContent = viewableQuestion.question;


    for (var i = 0; i < viewableQuestion.choices.length; i++) {
        var choice = viewableQuestion.choices[i];
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'choice');
        choiceBtn.setAttribute('value', choice);

        choiceBtn.textContent = i + 1 + '. ' + choice;

        answerChoices.appendChild(choiceBtn);

    }

}

function nextQuestion(event) {
    var isChoiceBtn = event.target.classList.contains('choice');
    var choice = event.target
    // console.log(isChoiceBtn);

    if (isChoiceBtn) {

        if (choice.value !== questions[questionIndex].answer) {
            remainingTime -= 15;
        }

        if (remainingTime < 0) {
            remainingTime = 0;
        }
        remainingTime.textContent = remainingTime;

        // questionIndex++;

        // if (remainingTime <= 0 || questionIndex === questions.length) {
        //     endQuiz();
        // } else {
        //     // nextQuestion(); am i calling the wrong function?
        // }  Remove first question
    }
}

function saveScore() {
    var initials = initialsBox.value;

    if (initials !== '') {
        var score = JSON.parse(window.localStorage.getItem('HIGH SCORES')) || [];

        var newScore = {
            score: remainingTime,
            initials: initials,
        };

        score.push(newScore);
        window.localStorage.setItem('score', JSON.stringify(score));

        window.localStorage.href = 'highscoresHistory.html';

    }
}

function checkForSubmission(event) {
    if (event.key === 'Enter') {
        saveScore();
    }
}