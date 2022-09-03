var startButton = document.getElementById("#start-quiz");
var startQuizButton = document.querySelector("#start-quiz");

startQuizButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(startQuizButton);

    function timer() {
        document.getElementById(".timer").innerHTML = "Remaining time:" + remainingTime;
        var remainingTime = 2400;
        var countDown = setInterval(function () {
            if (remainingTime > 1) {
                startButton.textContent = remainingTime + 'seconds remaining';
                remainingTime--;
            } else if (remainingTime === 1) {
                startButton.textContent = remainingTime + 'second remaining';
                remainingTime--;
            } else {
                startButton.textContent = '';
                clearInterval(countDown);
            }
        }(timer(), 1000));
    };        
});
