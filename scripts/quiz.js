document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-button');
    const dataUrl = '/data/questions.json'; // Atualize o caminho conforme necessário

    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            questions = data.questions;
            showQuestion(questions[currentQuestionIndex]);
        });

    function showQuestion(question) {
        questionElement.textContent = question.question;
        answerButtons.innerHTML = '';
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('answer-btn');
            button.addEventListener('click', () => selectAnswer(answer));
            answerButtons.appendChild(button);
        });
    }

    function selectAnswer(answer) {
        const correct = answer.correct;
        if (correct) {
            score++;
        }
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
            if (button.textContent === answer.text) {
                button.classList.add(correct ? 'correct' : 'incorrect');
            }
        });
        nextButton.classList.remove('hidden');
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
            nextButton.classList.add('hidden');
        } else {
            showResult();
        }
    });

    function showResult() {
        quizContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        document.getElementById('score').textContent = score;
        document.getElementById('total').textContent = questions.length;
    }
});
