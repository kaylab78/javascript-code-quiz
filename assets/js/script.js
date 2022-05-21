var startEl = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var timeLeft = 75;
var introText = document.getElementById("intro-text");
var question = document.getElementById("question");

var questionOne = document.createElement("h2");
var questionOneText = document.createTextNode("Which is NOT a commonly used JavaScript data type?");

questionOne.appendChild(questionOneText);

// Click the start button. Timer starts. 
function countdown() {
    timerEl.textContent=timeLeft + " Seconds Remaining";
    if (timeLeft > 0) {
        timeLeft--
    } else {
        timerEl.textContent = "You've run out of time. Try again!";
    }
}

function timer() {
    timerEl.textContent=timeLeft + " Seconds Remaining";
    setInterval(countdown, 1000);
    startQuiz();
}

// First question appears. (Event Listeners)
function startQuiz() {
    question.appendChild(questionOne);
}

startEl.addEventListener("click", timer);





var quizQuestions = [
    {
        question: "Which is NOT a commonly used JavaScript data type?",
        options: ["string", "boolean", "alert", "number"],
        answer: "alert"
    },
    {
        question: "Question 2",
        options: ["1", "2", "3"],
        answer: "2"
    }
];



// Click one of the answer options. Another question appears. (Event Listeners)



// When a question is answered incorrectly, time is subtracted from the clock. (Timers Intervals)

// Quiz is over when all questions are answered or the timer reaches 0.

// When the quiz is over, the user can save their score along with their initials. (Local storage)