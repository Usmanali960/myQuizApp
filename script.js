let myQuiz = [
    {
        question: "Who is the prime minister of pakistan?",
        answer: [
            { text: "Imran Khan", correct: true },
            { text: "Zardari", correct: false },
            { text: "Shahbaz Sharif", correct: false },
            { text: "Nawaz Sharif", correct: false },
        ],
    },
    {
        question: "Who can save the pakistan?",
        answer: [
            { text: "Zardari", correct: false },
            { text: "Shahbaz Sharif", correct: false },
            { text: "Imran Khan", correct: true },
            { text: "Nawaz Sharif", correct: false },
        ],

    },
    {
        question: "Who will be the next prime minister of pakitan?",
        answer: [
            { text: "Zardari", correct: false },
            { text: "Imran Khan", correct: true },
            { text: "Shahbaz Sharif", correct: false },
            { text: "Nawaz Sharif", correct: false },
        ],

    },
    {
        question: "Who will be the next 5 year prime minister od pakistan?",
        answer: [
            { text: "Zardari", correct: false },
            { text: "Shahbaz Sharif", correct: false },
            { text: "Nawaz Sharif", correct: false },
            { text: "Imran Khan", correct: true },
        ],

    }
];

let quizQuestion = document.querySelector("#question")
let answerButtons = document.querySelector(".app")
let nextButton = document.querySelector(".next")


let questionIndex = 0;
let score = 0;

function startQuiz() {
    questionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuiz()
}

function showQuiz() {
    removeState()
    let currenQuestion = myQuiz[questionIndex]
    let questionNo = questionIndex + 1;
    quizQuestion.innerHTML = `${questionNo}.${currenQuestion.question}`

    currenQuestion.answer.forEach(answer => {
        let button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        quizQuestion.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener("click", checkAnswer)
    })

}
function removeState() {
    nextButton.style.display = "none"
    if (answerButtons.firstChild) {
        answerButtons.remove(answerButtons.firstChild)
    }
}

function checkAnswer(e) {
    let isButton = e.target;

    let isTrue = isButton.dataset.correct === "true"
    if (isTrue) {
        isButton.classList.add("correct")
        score++
    } else {
        isButton.classList.add("incorrect")
    }

    Array.from(quizQuestion.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

function showScore() {
    removeState()
    quizQuestion.innerHTML = `Your score is ${score} is out of ${myQuiz.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleTheNextButton() {
    questionIndex++
    if (questionIndex < myQuiz.length) {
        showQuiz()
    } else {
        showScore()
        nextButton.style.width = "150px"
    }
}


nextButton.addEventListener("click", () => {
    if (questionIndex < myQuiz.length) {
        handleTheNextButton()
    } else {
        startQuiz()
    }
})

startQuiz()



