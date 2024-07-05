var quizQuestions = [
    {
        qnum: "01",
        question: "To insert a JavaScript into an HTML page, which tag is used?",
        option1: " script tag",
        option2: " javascript tag",
        option3: " JS tag",
        option4: " link tag",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "02",
        question: "What does the typeof operator do in JavaScript?",
        option1: " Returns the data type of a variable",
        option2: " Checks if a variable is defined",
        option3: " Assigns a value to a variable",
        option4: " Concatenates two strings",
        correctAnswer: " Returns the data type of a variable"
    },
    {
        qnum: "03",
        question: "Which of the following is not a primitive data type in JavaScript?",
        option1: " Number",
        option2: " String",
        option3: " Boolean",
        option4: " Object",
        correctAnswer: " Object"
    },
    {
        qnum: "04",
        question: "Which of the following is not a comparison operator in JavaScript?",
        option1: " ==",
        option2: " ===",
        option3: " !=",
        option4: " =<",
        correctAnswer: " =<"
    },
    {
        qnum: "05",
        question: "What does the “NaN” value represent in JavaScript?",
        option1: " Not a Number",
        option2: " Null Value",
        option3: " Undefined Value",
        option4: " Boolean Value",
        correctAnswer: " Not a Number"
    },
    {
        qnum: "06",
        question: "What is the correct way to declare a variable in JavaScript?",
        option1: " var x = 5;",
        option2: " variable x = 5;",
        option3: " x = 5;",
        option4: " let x = 5;",
        correctAnswer: " let x = 5;"
    },
    {
        qnum: "07",
        question: "What is the output of the following code: <br> var x = 5 <br> console.log(x++);",
        option1: " 3",
        option2: " 5",
        option3: " 4",
        option4: " Error",
        correctAnswer: " 5"
    },
    {
        qnum: "08",
        question: "What does the “this” keyword refer to in JavaScript?",
        option1: " The current function",
        option2: " The parent object of the current object",
        option3: " The object that the function belongs to",
        option4: " The global object",
        correctAnswer: " The object that the function belongs to"
    },
    {
        qnum: "09",
        question: "What is the output of the following code: <br> var x = [1, 2, 3]; <br> console.log(x.length);",
        option1: " 4",
        option2: " 2",
        option3: " 1",
        option4: " 3",
        correctAnswer: " 3"
    },
    {
        qnum: "10",
        question: "What is the output of the following code: <br> console.log(typeof NaN);",
        option1: " Number",
        option2: " String",
        option3: " undefined",
        option4: " NaN",
        correctAnswer: " Number"
    },
    {
        qnum: "11",
        question: "To insert a JavaScript into an HTML page, which tag is used?",
        option1: " script tag",
        option2: " javascript tag",
        option3: " JS tag",
        option4: " link tag",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "12",
        question: "What does the typeof operator do in JavaScript?",
        option1: " Returns the data type of a variable",
        option2: " Checks if a variable is defined",
        option3: " Assigns a value to a variable",
        option4: " Concatenates two strings",
        correctAnswer: " Returns the data type of a variable"
    },
    {
        qnum: "13",
        question: "Which of the following is not a primitive data type in JavaScript?",
        option1: " Number",
        option2: " String",
        option3: " Boolean",
        option4: " Object",
        correctAnswer: " Object"
    },
    {
        qnum: "14",
        question: "Which of the following is not a comparison operator in JavaScript?",
        option1: " ==",
        option2: " ===",
        option3: " !=",
        option4: " =<",
        correctAnswer: " =<"
    },
    {
        qnum: "15",
        question: "What does the “NaN” value represent in JavaScript?",
        option1: " Not a Number",
        option2: " Null Value",
        option3: " Undefined Value",
        option4: " Boolean Value",
        correctAnswer: " Not a Number"
    },
    {
        qnum: "16",
        question: "What is the correct way to declare a variable in JavaScript?",
        option1: " var x = 5;",
        option2: " variable x = 5;",
        option3: " x = 5;",
        option4: " let x = 5;",
        correctAnswer: " let x = 5;"
    },
    {
        qnum: "17",
        question: "What is the output of the following code: <br> var x = 5 <br> console.log(x++);",
        option1: " 3",
        option2: " 5",
        option3: " 4",
        option4: " Error",
        correctAnswer: " 5"
    },
    {
        qnum: "18",
        question: "What does the “this” keyword refer to in JavaScript?",
        option1: " The current function",
        option2: " The parent object of the current object",
        option3: " The object that the function belongs to",
        option4: " The global object",
        correctAnswer: " The object that the function belongs to"
    },
    {
        qnum: "19",
        question: "What is the output of the following code: <br> var x = [1, 2, 3]; <br> console.log(x.length);",
        option1: " 4",
        option2: " 2",
        option3: " 1",
        option4: " 3",
        correctAnswer: " 3"
    },
    {
        qnum: "20",
        question: "What is the output of the following code: <br> console.log(typeof NaN);",
        option1: " Number",
        option2: " String",
        option3: " undefined",
        option4: " NaN",
        correctAnswer: " Number"
    },
]

let index = 0;
let score = 0;
let sec = 60;
let time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Time out",
        })
    }
}

function renderQuestion(increment = true) {
    sec = 60;
    const quizView = document.getElementById("quizView");
    const options = document.getElementsByName("options");
    const icon = document.getElementById("icon");
    const timer = document.getElementById("timer");


    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (options[i].value === quizQuestions[index - 1].correctAnswer) {    //decremented value of index "-1" as here I'm having index greater than the correct answer
                score++;
            }
        }
    }

    if (!quizQuestions[index]) {
        console.log("You Scored" + score);
        return;

    }

    quizView.innerHTML = `<div class="card">
            <div class="card-header">
                Question# <span id="questionNumber">${quizQuestions[index].qnum}</span>/20
              <i class="fa-solid fa-clock timer" style="color: #006400;"><span id="timer" class="m-2"></span></i>
            </div>
            <div class="card-body">
                <h5 class="card-title">${quizQuestions[index].question}</h5>
                <label class="m-1"><input type="radio" name="options" value="${quizQuestions[index].option1}">${quizQuestions[index].option1}</label>
                <br>
                <label class="m-1"><input type="radio" name="options" value="${quizQuestions[index].option2}" >${quizQuestions[index].option2}</label>
                <br>
                <label class="m-1"><input type="radio" name="options" value="${quizQuestions[index].option3}" >${quizQuestions[index].option3}</label>
                <br>
                <label class="m-1"><input type="radio" name="options" value="${quizQuestions[index].option4}" >${quizQuestions[index].option4}</label>
            </div>
        </div>`
    if (increment) {
        index++;
    }
}

renderQuestion();

function previousQuestion() {
    if (index > 0) {
        index--;
        renderQuestion(false); // Call renderQuestion() with increment = false
    }
}

