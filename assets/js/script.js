var startEl = document.getElementById("startBtn");
var timerEl = document.getElementById("timer");
var mainEl = document.getElementById("main");
var timeLeft = 20;
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

// Once they click the start button, the timer starts and the first question appears. Intro text and start button disappear.
startEl.addEventListener("click", timer);

function firstQuestion() {
    questionH2.textContent = "Which is NOT a commonly used JavaScript data type?";
    questionEl.appendChild(questionH2);

    // Correct answer to the question.
    var answer = "Alert";

    optionEl.appendChild(answerUl);

    // Each answer option needs its own event listener, and then it has to be able to tell if that is the correct answer or not.
    li1.textContent = "String";
    li1.addEventListener("click", function(){
        if ("String" !== answer){
            timeLeft -= 10;           
            if (timeLeft <= 0){
                timeLeft = 0
            }   
            timerEl.textContent = timeLeft;    
            alert("Incorrect!")    
        } else {   
            alert("Correct!")
        }   
        secondQuestion();
    });
    answerUl.appendChild(li1);

    li2.textContent = "Boolean";
    li2.addEventListener("click", function(){
        if ("Boolean" !== answer){
            timeLeft -= 10;           
            if (timeLeft <= 0){
                timeLeft = 0
            }   
            timerEl.textContent = timeLeft;    
            alert("Incorrect!")    
        } else {   
            alert("Correct!")
        }    
        secondQuestion();
    });
    answerUl.appendChild(li2);

    li3.textContent = "Alert"
    li3.addEventListener("click", function(){
        if ("Alert" !== answer){
            timeLeft -= 10;           
            if (timeLeft <= 0){
                timeLeft = 0
            }   
            timerEl.textContent = timeLeft;    
            alert("Incorrect!")    
        } else {   
            alert("Correct!")
        }   
        secondQuestion();
    });
    answerUl.appendChild(li3);

    li4.textContent = "Number";
    li4.addEventListener("click", function(){
        if ("Number" !== answer){
            timeLeft -= 10;           
            if (timeLeft <= 0){
                timeLeft = 0
            }   
            timerEl.textContent = timeLeft;    
            alert("Incorrect!")    
        } else {   
            alert("Correct!")
        }   
        secondQuestion();
    });
    answerUl.appendChild(li4); 
}

// When the user clicks an answer in firstQuestion, the second question appears.
function secondQuestion() {
    questionH2.textContent = "The condition in an if/else statement is enclosed in which of the following?";
    questionEl.appendChild(questionH2);

    optionEl.appendChild(answerUl);

    // Correct answer
    var answer = "Curly Brackets";

    li1.textContent = "Quotation Marks";
    li1.addEventListener("click", function(){
        if ("Quotation Marks" !== answer){
            timeLeft -= 10;           
            if (timeLeft <= 0){
                timeLeft = 0
            }   
            timerEl.textContent = timeLeft;    
            alert("Incorrect!")    
        } else {   
            alert("Correct!")
        }   
        scoreDisplay();
    });
    answerUl.appendChild(li1);

    li2.textContent = "Curly Brackets";
    li2.addEventListener("click", function(){
        if ("Curly Brackets" !== answer){
            timeLeft -= 10;           
            if (timeLeft <= 0){
                timeLeft = 0
            }   
            timerEl.textContent = timeLeft;    
            alert("Incorrect!")    
        } else {   
            alert("Correct!")
        }   
        scoreDisplay();
    });
    answerUl.appendChild(li2);

    li3.textContent = "Parentheses";
    li3.addEventListener("click", function(){
        if ("Parentheses" !== answer){
            timeLeft -= 10;           
            if (timeLeft <= 0){
                timeLeft = 0
            }   
            timerEl.textContent = timeLeft;    
            alert("Incorrect!")    
        } else {   
            alert("Correct!")
        }    
        scoreDisplay();
    });
    answerUl.appendChild(li3);

    li4.textContent = "Square Brackets";
    li4.addEventListener("click", function(){
        if ("Square Brackets" !== answer){
            timeLeft -= 10;           
            if (timeLeft <= 0){
                timeLeft = 0
            }   
            timerEl.textContent = timeLeft;    
            alert("Incorrect!")    
        } else {   
            alert("Correct!")
        }    
        scoreDisplay();
    });
    answerUl.appendChild(li4); 
}

// When the user clicks an answer in the last question, their score displays on the screen and are able to enter their initials in order to log it to the High Scores page.
function scoreDisplay() {
    clearInterval(setInterval);
    questionH2.textContent = "All done!";
    questionEl.appendChild(questionH2);
    answerUl.setAttribute("style", "display:none");
    scoreText.textContent = "Your final score is " + timeLeft + ".";
    enterInitials.textContent = "Enter initials to log your score: ";
    initialsInput.innerHTML = "<label for='initials'></label><input type='text' name='initials' id='initialsInput'/><button class='btn'>Submit</button>"
}

function saveScore() {
    // text box, choose value,
    // get (to see what's in localStorage), make new object and add to it, push to local storage
}