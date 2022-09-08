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

        // First time score entered - []
        // Second time score entered - [newScore]
        var scoresHistory = [];
        if(window.localStorage.getItem('history')) {
         scoresHistory = JSON.parse(window.localStorage.getItem('history'));
        }
        // var scoresHistory = JSON.parse(window.localStorage.getItem('history') || []);
         
        var newScore = {
            score: remainingTime,
            initials: initials,
        };
        // console.log(newScore);
        scoresHistory.push(newScore);
        // Saving to local storage 1st enry - [newScore]
        //Second time saving to local storage, prior entry, and new entry [newScore1, newScore2]
        window.localStorage.setItem('history', JSON.stringify(scoresHistory));
        initialsBox.value = '';
        window.location.href = 'highscoresHistory.html';

    }
}

initialBtn.addEventListener('click', function(){
    endGame();
});