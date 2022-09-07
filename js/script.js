var startPage = document.querySelector(".main-page");
var questionBox = document.querySelector("#Question");
var startQuizButton = document.querySelector(".start-button");
var timerCountdown = document.querySelector(".timer");
var remainingTime = 100;
var questionIndex = 0;
var currentQuestion = document.querySelector('#New-Question');
var answerChoices = document.querySelector('#list-of-avaible-answers');
var initialsBox = document.querySelector('.initials-input');
var endOfQuizScreen = document.querySelector('.end-screen');
var countDown;
var initialBtn = document.querySelector('#submit-button');

questionBox.addEventListener('click', nextQuestion);
initialBtn.addEventListener('click', function(){
    // 
    endGame();
});

startQuizButton.addEventListener("click", timer);
function timer() {
    startPage.style.display = "none";
    questionBox.style.display = "block";
    countDown = setInterval(function () {
        if (remainingTime > 1) {
            timerCountdown.textContent = remainingTime + ' seconds remaining';
            remainingTime--;
        } else if (remainingTime === 1) {
            timerCountdown.textContent = remainingTime + ' second remaining';
            remainingTime--;
        } else {
            timerCountdown.textContent = '';
            endGame();
            clearInterval(countDown);
        }
    }, 1000);
    startQuiz();
}


function startQuiz() {
    // clear the board... and render next question in []
    currentQuestion.innerHTML = "";
    answerChoices.innerHTML = "";
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
        //wrong choice
        if (choice.value !== questions[questionIndex].answer) {
            remainingTime -= 15;
        }
        // correct choice
        if (choice.value == questions[questionIndex].answer){
            questionIndex++;
            //we are out of questions so end game
            if (questionIndex >= questions.length) {
                endGame();
            } else {
                startQuiz();
            }
        }
    }
}

function endGame() {
    // alert('working');
    clearInterval(countDown);
    currentQuestion.innerHTML = "";
    answerChoices.innerHTML = "";
    endOfQuizScreen.style.display = "block";
    var initials = initialsBox.value;

    if (initials !== '') {
        var score = JSON.parse(window.localStorage.getItem('score')) || [];

        var newScore = {
            score: remainingTime,
            initials: initials,
        };

        score.push(newScore);
        window.localStorage.setItem('score', JSON.stringify(score));

        window.location.href = 'highscoresHistory.html';

    }
}

// function checkForSubmission(event) {
//     if (event.key === 'Enter') {
//         saveScore();
//     }
// }