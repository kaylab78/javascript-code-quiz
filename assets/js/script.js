var startEl = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var timeLeft = 40;
var introText = document.getElementById("intro-text");
var questionEl = document.getElementById("question");
var optionEl = document.getElementById("option");
var scoreText = document.getElementById("score-text");
var enterInitials = document.getElementById("enter-initials");

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
    } else {
        timerEl.textContent = "You've run out of time. Try again!";
    }
}

function timer() {
    timerEl.textContent = timeLeft + " Seconds Remaining";
    setInterval(countdown, 1000);
    introText.setAttribute("style", "display:none");
    startEl.setAttribute("style", "display: none");
    firstQuestion();
}

// First question appears. Intro text and start button disappear.
startEl.addEventListener("click", timer);
function firstQuestion() {
    questionH2.textContent = "Which is NOT a commonly used JavaScript data type?";
    questionEl.appendChild(questionH2);

    optionEl.appendChild(answerUl);

    li1.textContent = "String";
    answerUl.appendChild(li1);

    li2.textContent = "Boolean";
    answerUl.appendChild(li2);

    li3.textContent = "Alert";
    answerUl.appendChild(li3);

    li4.textContent = "Number";
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
    questionH2.textContent = "All done!";
    questionEl.appendChild(questionH2);
    answerUl.setAttribute("style", "display:none");
    scoreText.textContent = "Your final score is " + timeLeft + ".";
    enterInitials.textContent = "Enter initials to log your score: ";
}


// Click one of the answer options. Another question appears. (Event Listeners)

// When a question is answered incorrectly, time is subtracted from the clock. (Timers Intervals)

// Quiz is over when all questions are answered or the timer reaches 0.

// When the quiz is over, the user can save their score along with their initials. (Local storage)


/*
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

function startQuiz() {
    for (var i=0; i < 5; i++) {
        questionEl.innerHTML = quizQuestions[i].question;
        optionEl.innerHTML = "<li>" + quizQuestions[i].options[0] + "</li>" + "<li>" + quizQuestions[i].options[1] + "</li>" + "<li>" + quizQuestions[i].options[2] + "</li>" + "<li>" + quizQuestions[i].options[3] + "</li>";
    }
}
*/


/*
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
        options: ["Numbers", "Strings", "Booleans", "Other Arrays", "All of the Above"],
        answer: "All of the Above"
    },
    {
        question: "When being assigned to a variable, which of the following must string values be enclosed with?",
        options: ["Commas", "Curly Brackets", "Quotation Marks", "Parentheses"],
        answer: "Quotation Marks"
    }
];
console.log(quizQuestions[0]); 

function startQuiz() {
    for (var i=0; i < 5; i++) {
        mainEl.appendChild(quizQuestions[i]);
    }
}
*/
// optionEl.addEventListener("click", function());

// innerHTML