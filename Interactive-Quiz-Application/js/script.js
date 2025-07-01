const quizQuestions = [
    {
        question: "Which programming language is often used for web development and runs in browsers?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS primarily control in web pages?",
        a: "Content structure",
        b: "Styling and layout",
        c: "Server-side logic",
        d: "Database management",
        correct: "b",
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<script>",
        b: "<css>",
        c: "<style>",
        d: "<link>",
        correct: "c",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<lb>",
        b: "<break>",
        c: "<br>",
        d: "<newline>",
        correct: "c",
    },
    {
        question: "Which property is used to change the background color of an element?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "background",
        correct: "c",
    },
];

const quizContainer = document.getElementById('quizApp');
const answerOptions = document.querySelectorAll('.answer-option');
const questionTextElement = document.getElementById('questionText');
const optionAText = document.getElementById('optionAText');
const optionBText = document.getElementById('optionBText');
const optionCText = document.getElementById('optionCText');
const optionDText = document.getElementById('optionDText');
const submitAnswerButton = document.getElementById('submitAnswerBtn');

let currentQuestionIndex = 0;
let userScore = 0;
let questionTimer; // Timer for each question (new feature)
const TIME_PER_QUESTION = 10; // seconds

// Create and append timer display element
const timerDisplay = document.createElement('div');
timerDisplay.id = 'timerDisplay';
timerDisplay.style.textAlign = 'center';
timerDisplay.style.fontSize = '1.5em';
timerDisplay.style.marginBottom = '20px';
timerDisplay.style.color = '#e74c3c';
quizContainer.insertBefore(timerDisplay, questionTextElement);

loadQuizQuestion();

function loadQuizQuestion() {
    deselectAnswerOptions();
    clearInterval(questionTimer); // Clear previous timer

    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuizData = quizQuestions[currentQuestionIndex];

        questionTextElement.innerText = currentQuizData.question;
        optionAText.innerText = currentQuizData.a;
        optionBText.innerText = currentQuizData.b;
        optionCText.innerText = currentQuizData.c;
        optionDText.innerText = currentQuizData.d;

        startQuestionTimer(); // Start timer for new question
    } else {
        displayQuizResults();
    }
}

function deselectAnswerOptions() {
    answerOptions.forEach(option => option.checked = false);
}

function getSelectedAnswer() {
    let answer = undefined;
    answerOptions.forEach(option => {
        if (option.checked) {
            answer = option.id.replace('option', '').toLowerCase();
        }
    });
    return answer;
}

function startQuestionTimer() {
    let timeLeft = TIME_PER_QUESTION;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;

    questionTimer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            currentQuestionIndex++;
            loadQuizQuestion(); // Move to next question if time runs out
        }
    }, 1000);
}

function displayQuizResults() {
    quizContainer.innerHTML = `
        <h2>You scored ${userScore} out of ${quizQuestions.length} questions correctly!</h2>
        <button class="submit-btn restart-btn" onclick="location.reload()">Restart Quiz</button>
    `;
}

submitAnswerButton.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();

    if (selectedAnswer) {
        if (selectedAnswer === quizQuestions[currentQuestionIndex].correct) {
            userScore++;
        }
        currentQuestionIndex++;
        loadQuizQuestion();
    }
});
