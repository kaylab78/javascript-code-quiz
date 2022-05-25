// print scores (getting something from local storage, JSON.parse)
// sort scores (.sort)
// clear scores (localStorage.remove(highscores))

var scoreListEl = document.getElementById("scoreList");
var clearEl = document.getElementById("clear");

function clearScores() {
    clearEl.addEventListener("click", function(){
        localStorage.removeItem();
    });
}