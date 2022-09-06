var startPage = document.querySelector(".main-page");
var questionBox = document.querySelector("#Question");
var startQuizButton = document.querySelector(".start-button");
var timerCountdown = document.querySelector(".timer");
var remainingTime = 6000;

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
    questionBox.style.display
}
