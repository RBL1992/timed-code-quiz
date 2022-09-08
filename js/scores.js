var highScores = document.querySelector('.new-score');

var highScoresList = JSON.parse(window.localStorage.getItem('history')) || [];

for (var i = 0; i < highScoresList.length; i++){
    var newScore = document.createElement('li');
    newScore.textContent = highScoresList[i].initials + " " + highScoresList[i].score
    highScores.appendChild(newScore);
}
