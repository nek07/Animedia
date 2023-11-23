const questions = [
    {
        question: "What is the name of the school in 'My Hero Academia'?",
        options: ["U.A. High School", "Shiketsu High School", "Yuuei High School", "Hero Academy"],
        correctIndex: 0
    },
    {
        question: "Who is the author of 'Attack on Titan'?",
        options: ["Hajime Isayama", "Eiichiro Oda", "Masashi Kishimoto", "Kohei Horikoshi"],
        correctIndex: 0
    },
    {
        question: "Which anime features a character named Edward Elric who uses alchemy?",
        options: ["Naruto", "Fullmetal Alchemist", "Death Note", "Hunter x Hunter"],
        correctIndex: 1
    },
    {
        question: "In 'Dragon Ball Z', what is the name of Goku's son?",
        options: ["Vegeta", "Trunks", "Gohan", "Krillin"],
        correctIndex: 2
    },
    {
        question: "What is the name of the mysterious notebook in 'Death Note'?",
        options: ["Soul Note", "Dark Note", "Death Note", "Shinigami Note"],
        correctIndex: 2
    },
    {
        question: "In 'Sword Art Online', players get trapped in a virtual reality MMORPG. What is the name of the game?",
        options: ["World of Warcraft", "Elder Scrolls Online", "Aincrad", "Alfheim Online"],
        correctIndex: 2
    },
    {
        question: "Who is known as the 'Strongest Hero' in 'One Punch Man'?",
        options: ["Genos", "Saitama", "Speed-o'-Sound Sonic", "Mumen Rider"],
        correctIndex: 1
    },
    {
        question: "What is the name of the fox demon in 'Naruto'?",
        options: ["Kurama", "Shukaku", "Matatabi", "Isobu"],
        correctIndex: 0
    },
    {
        question: "In 'Hunter x Hunter', what is Gon Freecss's primary goal?",
        options: ["Become the Hokage", "Find the One Piece", "Catch 'Em All", "Become a Hunter"],
        correctIndex: 3
    },
    {
        question: "Which anime features a group of students trying to assassinate their alien teacher?",
        options: ["My Hero Academia", "Assassination Classroom", "Blue Exorcist", "Parasyte"],
        correctIndex: 1
    },
   
];


let currentQuestion = 0;
let userAnswers = [];
const questionElement = document.getElementById("question");
const optionsContainer = document.querySelector(".options-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

function loadQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${currentQ.question}`;

    optionsContainer.innerHTML = "";
    currentQ.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.setAttribute("onclick", "selectOption(this)");
        optionsContainer.appendChild(button);
    });

    nextBtn.style.display = "none";
}

function selectOption(selectedOption) {
    const options = Array.from(optionsContainer.children);
    const selectedIdx = options.indexOf(selectedOption);
    userAnswers[currentQuestion] = selectedIdx;

    options.forEach((option, index) => {
        if (index === selectedIdx) {
            option.style.backgroundColor = "#4CAF50";
        } else {
            option.style.backgroundColor = "";
        }
    });

    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let score = 0;
    questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correctIndex) {
            score++;
        }
    });

    resultContainer.textContent = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();