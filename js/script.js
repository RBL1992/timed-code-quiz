var startButton = document.getElementById("#start-quiz");
// console.log(startButton);

function timer(){
    var remainingTime = 2400;
    var countDown = setInterval(function() {

        if (remainingTime > 1) {
            startButton.textContent = remainingTime + 'seconds remaining';
            remainingTime--;
        } else if (remainingTime === 1){
            startButton.textContent = remainingTime + 'second remaining';
            remainingTime--;
        } else {
            // timer class
            startButton.textContent = '';
            clearInterval(countDown);
        }
        
    }, 1000);

}