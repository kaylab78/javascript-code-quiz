var startEl = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var timeLeft = 40;
var introText = document.getElementById("intro");
var questionEl = document.getElementById("question");
var optionEl = document.getElementById("option");
var scoreText = document.getElementById("score-text");
var enterInitials = document.getElementById("initials");
var setInterval;
var feedback = document.getElementById("feedback");
var initialsInput = document.getElementById("initialsInput");

// Question and answer option elements
var questionH2 = document.createElement("h2");
var answerUl = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Click the start button. Timer starts. 

function countdown() {
    timerEl.textContent = timeLeft + " Seconds Remaining";
    if (timeLeft > 0) {
        timeLeft--
    } else if (timeLeft < 0) {
        timeLeft = 0
    } else {
        timerEl.textContent = "You've run out of time. Try again!";
        scoreDisplay();
    }
}

function timer() {
    timerEl.textContent = timeLeft + " Seconds Remaining";
    setInterval = setInterval(countdown, 1000);
    introText.setAttribute("style", "display:none");
    startEl.setAttribute("style", "display: none");
    firstQuestion();
}

function getAnswer(answer) {
    if (this.value !== answer) {
        timeLeft -= 10
        if (timeLeft <= 0) {
            timeLeft = 0
        }
        feedback.textContent = "Incorrect!"
    } else {
        feedback.textContent = "Correct!"
    }
}

// Once they click the start button, first question appears. Intro text and start button disappear.

function firstQuestion() {
    questionH2.textContent = "Which is NOT a commonly used JavaScript data type?";
    questionEl.appendChild(questionH2);

    optionEl.appendChild(answerUl);

    var answer = "Alert";

    li1.textContent = "String";
    li1.setAttribute("value", "String");
    li1.addEventListener("click", function() {
        getAnswer(answer);
    });
    answerUl.appendChild(li1);

    li2.textContent = "Boolean";
    li2.setAttribute("value", "Boolean");
    li2.addEventListener("click", function() {
        getAnswer(answer);
    });    
    answerUl.appendChild(li2);

    li3.textContent = "Alert";
    li3.getAttribute("value", "Alert");
    li3.addEventListener("click", function() {
        getAnswer(answer);
    });
    answerUl.appendChild(li3);

    li4.textContent = "Number";
    li4.getAttribute("value", "Number");
    li4.addEventListener("click", function() {
        getAnswer(answer);
    });
    answerUl.appendChild(li4);

    answerUl.addEventListener("click", secondQuestion);
}


// When the user clicks an answer in firstQuestion, the second question appears.
function secondQuestion() {
    questionH2.textContent = "The condition in an if/else statement is enclosed in which of the following?";
    questionEl.appendChild(questionH2);

    optionEl.appendChild(answerUl);

    li1.textContent = "Quotation Marks";
    answerUl.appendChild(li1);

    li2.textContent = "Curly Brackets";
    answerUl.appendChild(li2);

    li3.textContent = "Parentheses";
    answerUl.appendChild(li3);

    li4.textContent = "Square Brackets";
    answerUl.appendChild(li4);

    answerUl.addEventListener("click", thirdQuestion);
}

// When the user clicks an answer in secondQuestion, the third question appears.
function thirdQuestion() {
    questionH2.textContent = "Which of the following can be stored in arrays in JavaScript?";
    questionEl.appendChild(questionH2);

    optionEl.appendChild(answerUl);

    li1.textContent = "Numbers & Strings";
    answerUl.appendChild(li1);

    li2.textContent = "Booleans";
    answerUl.appendChild(li2);

    li3.textContent = "Other Arrays";
    answerUl.appendChild(li3);

    li4.textContent = "All of the Above";
    answerUl.appendChild(li4);

    answerUl.addEventListener("click", fourthQuestion);
}

// When the user clicks an answer in thirdQuestion, the last question appears.
function fourthQuestion() {
    questionH2.textContent = "When being assigned to a variable, which of the following must string values be enclosed with?";
    questionEl.appendChild(questionH2);

    optionEl.appendChild(answerUl);

    li1.textContent = "Commas";
    answerUl.appendChild(li1);

    li2.textContent = "Curly Brackets";
    answerUl.appendChild(li2);

    li3.textContent = "Quotation Marks";
    answerUl.appendChild(li3);

    li4.textContent = "Parentheses";
    answerUl.appendChild(li4);

    answerUl.addEventListener("click", scoreDisplay);
}

// When the user clicks an answer in fourthQuestion, their score displays on the screen and are able to enter their initials in order to log it to the High Scores page.
function scoreDisplay() {
    clearInterval(setInterval);
    questionH2.textContent = "All done!";
    questionEl.appendChild(questionH2);
    answerUl.setAttribute("style", "display:none");
    scoreText.textContent = "Your final score is " + timeLeft + ".";
    enterInitials.textContent = "Enter initials to log your score: ";
    initialsInput.innerHTML = "<label for='initials'></label><input type='text' name='initials' id='initialsInput'/>"
}

function saveScore() {
    // text box, choose value,
    // get (to see what's in localStorage), make new object and add to it, push to local storage
}

startEl.addEventListener("click", timer);