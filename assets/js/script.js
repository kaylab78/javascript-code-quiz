var startEl = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var timeLeft = 75;

// Click the start button. Timer starts. First question appears. (Event Listeners)
function timer() {
    timerEl.textContent=timeLeft;
}

startEl.addEventListener("click", timer);
// function timer() {


//     var timeInterval = setInterval(function () {
//         timerEl.textContent = "Time: " + timeLeft
//     }, 1000);
// }

// startEl.addEventListener("click", function() {

// });



// Click one of the answer options. Another question appears. (Event Listeners)



// When a question is answered incorrectly, time is subtracted from the clock. (Timers Intervals)

// Quiz is over when all questions are answered or the timer reaches 0.

// When the quiz is over, the user can save their score along with their initials. (Local storage)