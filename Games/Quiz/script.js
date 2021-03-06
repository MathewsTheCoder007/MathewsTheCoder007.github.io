const quizData = [
    {
        question: "Who built World Wide Web(WWW)",
        a: "Bill Gates",
        b: "Tim Berners Lee",
        c: "Charles Babbage",
        d: "Steve Jobs",
        correct: "b",
    },
    {
        question: "Who built Google",
        a: "Mark Zuckerberg",
        b: "Larry Page",
        c: "Jeff Bezos",
        d: "Sunar Pichai",
        correct: "b",
    },
    {
        question: "Which among these is a cryptocurrency",
        a: "RFID",
        b: "Dogecoin",
        c: "Gold",
        d: "Franc",
        correct: "b",
    },
    {
        question: "The only primate species which humans belong to",
        a: "Homo Habilis",
        b: "Homo Erectus",
        c: "Homo Sapiens",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which is the most selling game of all time",
        a: "Fortnite",
        b: "Player's Unknown BattleGround(pubg)",
        c: "MineCraft",
        d: "Tetris",
        correct: "c",
    },
    {
        question: "Most visited website",
        a: "Google.com",
        b: "YouTube.com",
        c: "Facebook.com",
        d: "Baidu.com",
        correct: "a",
    },
    {
        question: "Who is founder of Pokemon",
        a: "Jackie Chan",
        b: "Satoshi Tajiri",
        c: "Satoshi Nakamoto",
        d: "Jack Ma",
        correct: "b",
    },
    {
        question: "Who built Bitcoin",
        a: "Jackie Chan",
        b: "Satoshi Tajiri",
        c: "Satoshi Nakamoto",
        d: "Jack Ma",
        correct: "c",
    },
    {
        question: "Who is founder of Alibaba Group",
        a: "Jeff Bezos",
        b: "Mukesh Ambani",
        c: "Satoshi Nakamoto",
        d: "Jack Ma",
        correct: "d",
    },
    {
        question: "Who is founder of T-series",
        a: "Mukesh Ambani",
        b: "Vignesh Sundaresan",
        c: "Bhushan Kumar",
        d: "Gulshan Kumar",
        correct: "d",
    },
    {
        question: "Most downloaded mobile game",
        a: "Among Us",
        b: "Clash of Clans",
        c: "Garena Free Fire",
        d: "Pokemon Go",
        correct: "c",
    },
    {
        question: "Which is the biggest religion",
        a: "Islam",
        b: "Christianity",
        c: "Hinduism",
        d: "Buddhism",
        correct: "b",
    },
    {
        question: "Who own 2000 Miss World",
        a: "Aishwarya Rai",
        b: "Manushi Chhillar",
        c: "Priyanka Chopra",
        d: "Gina Tolleson",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});