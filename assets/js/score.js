// sort scores (.sort)

var scoreListEl = document.getElementById("scoreList");
var clearEl = document.getElementById("clear");

function printScores () {
    var data = JSON.parse(localStorage.getItem("highScore"));
    scoreListEl.textContent = data;
};

function sortScores();

function clearScores() {
    clearEl.addEventListener("click", function(){
        localStorage.removeItem();
    });
}