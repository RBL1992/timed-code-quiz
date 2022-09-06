var startPage = document.querySelector(".main-page");
var questionBox = document.querySelector("#Question");
var startQuizButton = document.querySelector(".start-button");
var timerCountdown = document.querySelector(".timer");
var remainingTime = 6000;
var questionIndex = 0; 
var currentQuestion = document.querySelector('#New-Question') 
var answerChoices = document.querySelector('#list-of-avaible-answers')

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


function startQuiz(){
    var viewableQuestion = questions[questionIndex];

    currentQuestion.textContent = viewableQuestion.question;


    for(var i = 0; i < viewableQuestion.choices.length; i++){
        var choice = viewableQuestion.choices[i];
        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class','choice');
        choiceBtn.setAttribute('value', choice);

        choiceBtn.textContent = i + 1 + '.' + choice;

        answerChoices.appendChild(choiceBtn);

    }

}
