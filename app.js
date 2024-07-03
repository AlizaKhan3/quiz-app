var quizQuestions = [
    {
        qnum: "01",
        question: "HTML stands for ?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "02",
        question: "HTML stands for 2222222?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "03",
        question: "HTML stands for 33333333333 ?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "04",
        question: "HTML stands for 44444444444?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "05",
        question: "HTML stands for ?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "06",
        question: "HTML stands for ?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "07",
        question: "HTML stands for ?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "08",
        question: "HTML stands for ?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "09",
        question: "HTML stands for ?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
    {
        qnum: "10",
        question: "HTML stands for ?",
        option1: "HyperText Machine Language",
        option2: "HyperText Markup Language",
        option3: "HyperText Man-Made Language",
        option4: "HyperText & Links Markup Language",
        correctAnswer: "HyperText Markup Language"
    },
]


var index = 0;

function renderQuestion(increment = true) {
    var quizView = document.getElementById("quizView");

    quizView.innerHTML = `<div class="card">
            <div class="card-header">
                Question# <span id="questionNumber">${quizQuestions[index].qnum}</span>
            </div>
            <div class="card-body">
                <h5 class="card-title">${quizQuestions[index].question}</h5>
                <label class="m-1"><input type="radio" name="options" id="options">${quizQuestions[index].option1}</label>
                <br>
                <label class="m-1"><input type="radio" name="options" id="options">${quizQuestions[index].option2}</label>
                <br>
                <label class="m-1"><input type="radio" name="options" id="options">${quizQuestions[index].option3}</label>
                <br>
                <label class="m-1"><input type="radio" name="options" id="options">${quizQuestions[index].option4}</label>
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