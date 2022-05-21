var startEl = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var timeLeft = 75;
var timeMessage = "You've run out of time. Try again!"
var introText = document.getElementById("intro-text");


// Click the start button. Timer starts. 
function timer() {
    timerEl.textContent="Time: " + timeLeft;
    setInterval(countdown, 1000);
}

function countdown() {
    timerEl.textContent="Time: " + timeLeft;
    if (timeLeft > 0) {
        timeLeft--
    } else {
        timerEl.textContent = timeMessage;
    }
}

startEl.addEventListener("click", timer);

// First question appears. (Event Listeners)

var quizQuestions = [
    {
        id: 1,
        question: "Question 1",
        options: ["1", "2", "3"],
        answer: 1
    },
    {
        id: 1,
        question: "Question 2",
        options: ["1", "2", "3"],
        answer: 2
    }
];

// Click one of the answer options. Another question appears. (Event Listeners)



// When a question is answered incorrectly, time is subtracted from the clock. (Timers Intervals)

// Quiz is over when all questions are answered or the timer reaches 0.

// When the quiz is over, the user can save their score along with their initials. (Local storage)