var startEl = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var timeLeft = 75;
var introText = document.getElementById("intro-text");
var question = document.getElementById("question");
var option = document.getElementById("option");

// Question 1
var questionOne = document.createElement("h2");

var answerArea = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

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
    introText.setAttribute("style", "display:none");
    startEl.setAttribute("style", "display: none");

    questionOne.textContent = "Which is NOT a commonly used JavaScript data type?";
    question.appendChild(questionOne);

    option.appendChild(answerArea);

    li1.textContent = "String";
    answerArea.appendChild(li1);

    li2.textContent = "Boolean"
    answerArea.appendChild(li2);

    li3.textContent = "Alert"
    answerArea.appendChild(li3);

    li4.textContent = "Number"
    answerArea.appendChild(li4);
}

startEl.addEventListener("click", timer);





// var quizQuestions = [
//     {
//         question: "Which is NOT a commonly used JavaScript data type?",
//         options: ["string", "boolean", "alert", "number"],
//         answer: "alert"
//     },
//     {
//         question: "Question 2",
//         options: ["1", "2", "3"],
//         answer: "2"
//     }
// ];



// Click one of the answer options. Another question appears. (Event Listeners)



// When a question is answered incorrectly, time is subtracted from the clock. (Timers Intervals)

// Quiz is over when all questions are answered or the timer reaches 0.

// When the quiz is over, the user can save their score along with their initials. (Local storage)