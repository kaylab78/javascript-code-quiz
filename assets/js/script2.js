var timeLeft = 40;
var timerEl = document.getElementById("timer");
var introEl = document.getElementById("intro");
var startEl = document.getElementById("startBtn");
var questionEl = document.getElementById("question");
var optionEl = document.getElementById("option");
var scoreEl = document.getElementById("score-text")
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var setInterval;
var currentIndex = 0;

// Click the start button. Timer starts and intro text disappears. 
function countdown() {
    timerEl.textContent = timeLeft + " Seconds Remaining";
    if (timeLeft > 0) {
        timeLeft--
    } else if (timeLeft < 0) {
        timeLeft = 0
    } else {
        timerEl.textContent = "You've run out of time. Try again!";
        // scoreDisplay();
    }
}

function timer() {
    timerEl.textContent = timeLeft + " Seconds Remaining";
    setInterval = setInterval(countdown, 1000);
    introEl.setAttribute("style", "display:none");
    startEl.setAttribute("style", "display: none");
}

startEl.addEventListener("click", timer);

var quizQuestions = [
    {
        question: "Which is NOT a commonly used JavaScript data type?",
        options: ["String", "Boolean", "Alert", "Number"],
        answer: "Alert"
    },
    {
        question: "The condition in an if/else statement is enclosed in which of the following?",
        options: ["Quotation Marks", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Curly Brackets"
    },
    {
        question: "Which of the following can be stored in arrays in JavaScript?",
        options: ["Numbers & Strings", "Booleans", "Other Arrays", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "When being assigned to a variable, which of the following must string values be enclosed with?",
        options: ["Commas", "Curly Brackets", "Quotation Marks", "Parentheses"],
        answer: "Quotation Marks"
    }
];

for (var i = 0; i < quizQuestions.length; i++) {
    var showQuestion = quizQuestions[i].question;
    var showChoices = quizQuestions[i].options;
}

function checkAnswer

// function showQuestion();
