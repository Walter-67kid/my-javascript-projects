// Daily Quiz Application
// Math, Organ Anatomy & Space Quiz

// ==================== MATH QUIZ ====================

// Age group configurations for Math
const mathAgeGroups = {
    children: {
        name: 'Children',
        range: 'Ages 6-10',
        operations: ['+', '-'],
        numberRange: { min: 1, max: 20 },
        allowNegative: false
    },
    preteen: {
        name: 'Pre-Teens',
        range: 'Ages 11-13',
        operations: ['+', '-', '*', '/', '^'],
        numberRange: { min: 100, max: 999 },
        allowNegative: true,
        allowDecimals: false,
        maxMultiplication: 50,
        maxExponent: 4
    },
    teenager: {
        name: 'Teenagers',
        range: 'Ages 14-17',
        operations: ['+', '-', '*', '/', '^', 'sqrt'],
        numberRange: { min: 500, max: 9999 },
        allowNegative: true,
        allowDecimals: true,
        maxMultiplication: 100,
        maxExponent: 5,
        decimalPlaces: 2
    },
    adult: {
        name: 'Adults',
        range: 'Ages 18+',
        operations: ['+', '-', '*', '/', '^', 'sqrt', 'log'],
        numberRange: { min: 1000, max: 99999 },
        allowNegative: true,
        allowDecimals: true,
        maxMultiplication: 200,
        maxExponent: 6,
        decimalPlaces: 4
    }
};

// ==================== ORGAN ANATOMY QUIZ ====================

// Organ anatomy questions database (20 questions)
const anatomyQuestions = [
    {
        question: "Which organ is known as the 'powerhouse' of the cell?",
        answers: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
        correct: 0
    },
    {
        question: "What is the largest organ in the human body?",
        answers: ["Liver", "Skin", "Brain", "Lungs"],
        correct: 1
    },
    {
        question: "Which organ pumps blood throughout the body?",
        answers: ["Brain", "Lungs", "Heart", "Liver"],
        correct: 2
    },
    {
        question: "Which organ is responsible for filtering blood?",
        answers: ["Heart", "Kidney", "Stomach", "Pancreas"],
        correct: 1
    },
    {
        question: "Where is the bladder located in the human body?",
        answers: ["Head", "Chest", "Pelvic region", "Back"],
        correct: 2
    },
    {
        question: "Which organ produces insulin?",
        answers: ["Liver", "Kidney", "Pancreas", "Stomach"],
        correct: 2
    },
    {
        question: "What is the function of the lungs?",
        answers: ["Pump blood", "Digest food", "Gas exchange", "Filter waste"],
        correct: 2
    },
    {
        question: "Which organ stores bile?",
        answers: ["Pancreas", "Gallbladder", "Liver", "Spleen"],
        correct: 1
    },
    {
        question: "What organ removes carbon dioxide from the body?",
        answers: ["Heart", "Lungs", "Kidneys", "Brain"],
        correct: 1
    },
    {
        question: "Which organ is responsible for producing hemoglobin?",
        answers: ["Bone marrow", "Heart", "Lungs", "Stomach"],
        correct: 0
    },
    {
        question: "What is the function of the liver?",
        answers: ["Only digest food", "Produce bile, filter blood, detoxify", "Only pump blood", "Only produce hormones"],
        correct: 1
    },
    {
        question: "Which organ is part of the digestive system?",
        answers: ["Heart", "Lungs", "Small intestine", "Brain"],
        correct: 2
    },
    {
        question: "Where is the stomach located?",
        answers: ["Head", "Chest/Abdomen", "Legs", "Arms"],
        correct: 1
    },
    {
        question: "Which organ controls balance?",
        answers: ["Heart", "Inner ear", "Liver", "Lungs"],
        correct: 1
    },
    {
        question: "What is the function of the spleen?",
        answers: ["Produce insulin", "Filter blood", "Produce bile", "Digest food"],
        correct: 1
    },
    {
        question: "Which organ is responsible for thinking?",
        answers: ["Heart", "Brain", "Liver", "Kidneys"],
        correct: 1
    },
    {
        question: "What connects the mouth to the stomach?",
        answers: ["Intestine", "Esophagus", "Trachea", "Blood vessels"],
        correct: 1
    },
    {
        question: "Which organ stores urine?",
        answers: ["Kidney", "Ureter", "Bladder", "Urethra"],
        correct: 2
    },
    {
        question: "What is the function of the thyroid gland?",
        answers: ["Produce insulin", "Regulate metabolism", "Produce bile", "Filter blood"],
        correct: 1
    },
    {
        question: "Which organ protects the brain?",
        answers: ["Skull", "Spine", "Ribcage", "Pelvis"],
        correct: 0
    }
];

// ==================== SPACE QUIZ ====================

// Space questions database (25 questions)
const spaceQuestions = [
    {
        question: "What is the closest planet to the Sun?",
        answers: ["Venus", "Mercury", "Mars", "Earth"],
        correct: 1
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: ["Venus", "Jupiter", "Mars", "Saturn"],
        correct: 2
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Saturn", "Neptune", "Jupiter", "Uranus"],
        correct: 2
    },
    {
        question: "How many planets are in our solar system?",
        answers: ["7", "8", "9", "10"],
        correct: 1
    },
    {
        question: "What is the name of our galaxy?",
        answers: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"],
        correct: 1
    },
    {
        question: "What is the hottest planet in our solar system?",
        answers: ["Mercury", "Venus", "Mars", "Jupiter"],
        correct: 1
    },
    {
        question: "What planet has the most moons?",
        answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: 1
    },
    {
        question: "What is a star?",
        answers: ["A planet", "A ball of hot gas", "A moon", "An asteroid"],
        correct: 1
    },
    {
        question: "How long does it take for light from the Sun to reach Earth?",
        answers: ["About 8 minutes", "About 1 hour", "About 1 day", "Instantly"],
        correct: 0
    },
    {
        question: "What planet has rings around it?",
        answers: ["Mars", "Earth", "Neptune", "Saturn"],
        correct: 3
    },
    {
        question: "What is the coldest planet in our solar system?",
        answers: ["Neptune", "Uranus", "Pluto", "Saturn"],
        correct: 1
    },
    {
        question: "What is the Sun primarily made of?",
        answers: ["Liquid lava", "Hydrogen and Helium", "Rock and metal", "Ice"],
        correct: 1
    },
    {
        question: "How many Earth days does it take for the Moon to orbit Earth?",
        answers: ["7 days", "14 days", "27 days", "365 days"],
        correct: 2
    },
    {
        question: "What is an asteroid?",
        answers: ["A type of comet", "A small planet", "A rocky object between Mars and Jupiter", "A moon of Jupiter"],
        correct: 2
    },
    {
        question: "What causes day and night on Earth?",
        answers: ["The Moon orbits", "Earth rotates on its axis", "The Sun moves", "Clouds"],
        correct: 1
    },
    {
        question: "Which planet spins on its side?",
        answers: ["Jupiter", "Uranus", "Venus", "Mars"],
        correct: 1
    },
    {
        question: "What is a comet made of?",
        answers: ["Rock only", "Ice and dust", "Gas only", "Metal"],
        correct: 1
    },
    {
        question: "What is the name of the first human to walk on the Moon?",
        answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
        correct: 1
    },
    {
        question: "What planet has the Great Red Spot?",
        answers: ["Mars", "Saturn", "Jupiter", "Neptune"],
        correct: 2
    },
    {
        question: "What is a black hole?",
        answers: ["A dark planet", "A collapsed star with strong gravity", "A type of nebula", "A moon"],
        correct: 1
    },
    {
        question: "How long is one year on Mars (in Earth days)?",
        answers: ["88 days", "186 days", "365 days", "687 days"],
        correct: 3
    },
    {
        question: "What is the name of Saturn's largest moon?",
        answers: ["Europa", "Titan", "Ganymede", "Triton"],
        correct: 1
    },
    {
        question: "What is a nebula?",
        answers: ["A type of planet", "A cloud of gas and dust", "A type of star", "An asteroid belt"],
        correct: 1
    },
    {
        question: "Which planet has the shortest day?",
        answers: ["Earth", "Mars", "Jupiter", "Mercury"],
        correct: 2
    },
    {
        question: "What is the distance light travels in one year called?",
        answers: ["Light second", "Light minute", "Light year", "Light hour"],
        correct: 2
    }
];

// ==================== QUIZ STATE ====================

let currentSubject = null;
let currentAgeGroup = null;
let currentQuestion = null;
let score = 0;
let questionNumber = 0;
const totalQuestions = 10;

// Math quiz state
let mathQuestionHistory = [];

// Anatomy quiz state
let usedAnatomyQuestions = [];

// Space quiz state
let usedSpaceQuestions = [];

// ==================== DOM ELEMENTS ====================

// Subject selection
const subjectSelection = document.getElementById('subject-selection');
const ageSelection = document.getElementById('age-selection');
const quizSection = document.getElementById('quiz-section');
const anatomyQuizSection = document.getElementById('anatomy-quiz-section');
const spaceQuizSection = document.getElementById('space-quiz-section');
const resultsSection = document.getElementById('results-section');

// Math quiz elements
const quizTypeBadge = document.getElementById('quiz-type-badge');
const scoreDisplay = document.getElementById('score');
const questionNumDisplay = document.getElementById('question-num');
const questionNumberDisplay = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const backBtn = document.getElementById('back-btn');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');

// Anatomy quiz elements
const anatomyScoreDisplay = document.getElementById('anatomy-score');
const anatomyQuestionNumDisplay = document.getElementById('anatomy-question-num');
const anatomyQuestionNumberDisplay = document.getElementById('anatomy-question-number');
const anatomyQuestionText = document.getElementById('anatomy-question-text');
const anatomyAnswersDiv = document.getElementById('anatomy-answers');
const anatomyNextBtn = document.getElementById('anatomy-next-btn');
const anatomyRestartBtn = document.getElementById('anatomy-restart-btn');
const anatomyBackBtn = document.getElementById('anatomy-back-btn');
const anatomyFeedback = document.getElementById('anatomy-feedback');
const anatomyFeedbackText = document.getElementById('anatomy-feedback-text');

// Space quiz elements
const spaceScoreDisplay = document.getElementById('space-score');
const spaceQuestionNumDisplay = document.getElementById('space-question-num');
const spaceQuestionNumberDisplay = document.getElementById('space-question-number');
const spaceQuestionText = document.getElementById('space-question-text');
const spaceAnswersDiv = document.getElementById('space-answers');
const spaceNextBtn = document.getElementById('space-next-btn');
const spaceRestartBtn = document.getElementById('space-restart-btn');
const spaceBackBtn = document.getElementById('space-back-btn');
const spaceFeedback = document.getElementById('space-feedback');
const spaceFeedbackText = document.getElementById('space-feedback-text');

// New quiz button
const newQuizBtn = document.getElementById('new-quiz-btn');

// ==================== INITIALIZATION ====================

// Subject selection buttons
document.querySelectorAll('.subject-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const subject = btn.dataset.subject;
        selectSubject(subject);
    });
});

// Math age group buttons
document.querySelectorAll('.age-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const ageGroup = btn.dataset.age;
        startMathQuiz(ageGroup);
    });
});

// Back to subjects buttons
if (document.getElementById('back-to-subjects')) {
    document.getElementById('back-to-subjects').addEventListener('click', backToSubjects);
}
if (backBtn) backBtn.addEventListener('click', backToSubjects);
if (anatomyBackBtn) anatomyBackBtn.addEventListener('click', backToSubjects);
if (spaceBackBtn) spaceBackBtn.addEventListener('click', backToSubjects);

// Math quiz handlers
submitBtn.addEventListener('click', checkMathAnswer);
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkMathAnswer();
});
nextBtn.addEventListener('click', nextMathQuestion);
restartBtn.addEventListener('click', restartMathQuiz);

// Anatomy quiz handlers
anatomyNextBtn.addEventListener('click', nextAnatomyQuestion);
anatomyRestartBtn.addEventListener('click', restartAnatomyQuiz);

// Space quiz handlers
spaceNextBtn.addEventListener('click', nextSpaceQuestion);
spaceRestartBtn.addEventListener('click', restartSpaceQuiz);

// New quiz (back to subjects)
newQuizBtn.addEventListener('click', backToSubjects);

// ==================== SUBJECT SELECTION ====================

function selectSubject(subject) {
    currentSubject = subject;
    
    if (subject === 'math') {
        subjectSelection.classList.add('hidden');
        ageSelection.classList.remove('hidden');
    } else if (subject === 'anatomy') {
        startAnatomyQuiz();
    } else if (subject === 'space') {
        startSpaceQuiz();
    }
}

function backToSubjects() {
    subjectSelection.classList.remove('hidden');
    ageSelection.classList.add('hidden');
    quizSection.classList.add('hidden');
    anatomyQuizSection.classList.add('hidden');
    spaceQuizSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    currentSubject = null;
    currentAgeGroup = null;
}

// ==================== MATH QUIZ ====================

function startMathQuiz(ageGroup) {
    currentAgeGroup = ageGroup;
    score = 0;
    questionNumber = 0;
    mathQuestionHistory = []; // Reset question history for new quiz
    
    // Update UI
    quizTypeBadge.textContent = '🧮 ' + mathAgeGroups[ageGroup].name;
    scoreDisplay.textContent = score;
    
    // Show quiz section, hide others
    ageSelection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    
    // Generate first question
    generateMathQuestion();
}

function generateMathQuestion() {
    const config = mathAgeGroups[currentAgeGroup];
    let operation;
    let question;
    let isUnique = false;
    let attempts = 0;
    
    // Keep generating until we get a unique question
    while (!isUnique && attempts < 100) {
        operation = config.operations[Math.floor(Math.random() * config.operations.length)];
        
        switch(operation) {
            case '+':
                question = generateAddition(config);
                break;
            case '-':
                question = generateSubtraction(config);
                break;
            case '*':
                question = generateMultiplication(config);
                break;
            case '/':
                question = generateDivision(config);
                break;
            case '^':
                question = generatePower(config);
                break;
            case 'sqrt':
                question = generateSquareRoot(config);
                break;
        }
        
        // Check if this question is unique
        const questionKey = question.text;
        if (!mathQuestionHistory.includes(questionKey)) {
            isUnique = true;
            mathQuestionHistory.push(questionKey);
        }
        attempts++;
    }
    
    currentQuestion = question;
    questionNumber++;
    
    // Update UI
    questionNumDisplay.textContent = questionNumber;
    questionNumberDisplay.textContent = `Q${questionNumber}`;
    questionText.textContent = question.text;
    answerInput.value = '';
    answerInput.focus();
    
    // Reset feedback and buttons
    feedback.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
    answerInput.disabled = false;
}

function generateAddition(config) {
    const a = getRandomNumber(config.numberRange.min, config.numberRange.max);
    const b = getRandomNumber(config.numberRange.min, config.numberRange.max);
    const answer = a + b;
    
    return {
        text: `${a} + ${b} = ?`,
        answer: answer,
        displayAnswer: answer
    };
}

function generateSubtraction(config) {
    let a = getRandomNumber(config.numberRange.min, config.numberRange.max);
    let b = getRandomNumber(config.numberRange.min, config.numberRange.max);
    
    if (!config.allowNegative && a < b) {
        [a, b] = [b, a];
    }
    
    const answer = a - b;
    
    return {
        text: `${a} - ${b} = ?`,
        answer: answer,
        displayAnswer: answer
    };
}

function generateMultiplication(config) {
    const maxMult = config.maxMultiplication || 50;
    const a = getRandomNumber(2, maxMult);
    const b = getRandomNumber(2, maxMult);
    const answer = a * b;
    
    return {
        text: `${a} × ${b} = ?`,
        answer: answer,
        displayAnswer: answer
    };
}

function generateDivision(config) {
    const maxDiv = Math.min(config.numberRange.max, 12);
    const b = getRandomNumber(1, maxDiv);
    const answer = getRandomNumber(1, maxDiv);
    const a = b * answer;
    
    return {
        text: `${a} ÷ ${b} = ?`,
        answer: answer,
        displayAnswer: answer
    };
}

function generatePower(config) {
    const maxExp = config.maxExponent || 4;
    const baseMax = config.allowDecimals ? 15 : 20;
    const a = getRandomNumber(2, baseMax);
    const exp = getRandomNumber(2, maxExp);
    const answer = Math.pow(a, exp);
    
    return {
        text: `${a}^${exp} = ?`,
        answer: answer,
        displayAnswer: answer
    };
}

function generateSquareRoot(config) {
    const maxSqrt = config.allowDecimals ? 15 : 12;
    const answer = getRandomNumber(2, maxSqrt);
    const a = answer * answer;
    
    return {
        text: `√${a} = ?`,
        answer: answer,
        displayAnswer: answer
    };
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkMathAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    
    if (isNaN(userAnswer)) {
        showMathFeedback('Please enter a valid number!', false);
        return;
    }
    
    const isCorrect = Math.abs(userAnswer - currentQuestion.answer) < 0.0001;
    
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
        showMathFeedback(`✅ Correct! The answer is ${currentQuestion.displayAnswer}`, true);
    } else {
        showMathFeedback(`❌ Wrong! The correct answer is ${currentQuestion.displayAnswer}`, false);
    }
    
    submitBtn.classList.add('hidden');
    answerInput.disabled = true;
    
    if (questionNumber < totalQuestions) {
        nextBtn.classList.remove('hidden');
        nextBtn.focus();
    } else {
        showMathResults();
    }
}

function showMathFeedback(message, isCorrect) {
    feedbackText.textContent = message;
    feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'wrong');
    feedback.classList.remove('hidden');
}

function nextMathQuestion() {
    generateMathQuestion();
}

function showMathResults() {
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('wrong-count').textContent = totalQuestions - score;
    
    const percentage = (score / totalQuestions) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '🌟 Perfect Score! You are a math genius!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You are great at math!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep practicing!';
    } else if (percentage >= 40) {
        message = '📚 Not bad! Practice makes perfect!';
    } else {
        message = '💪 Keep trying! You can do better!';
    }
    
    document.getElementById('result-message').textContent = message;
    newQuizBtn.textContent = 'Back to Subjects';
}

function restartMathQuiz() {
    startMathQuiz(currentAgeGroup);
}

// ==================== ANATOMY QUIZ ====================

function startAnatomyQuiz() {
    score = 0;
    questionNumber = 0;
    usedAnatomyQuestions = []; // Reset for new quiz
    
    // Shuffle the entire question bank for a fresh random selection
    const shuffledQuestions = shuffleArray([...anatomyQuestions]);
    
    // Update UI
    anatomyScoreDisplay.textContent = score;
    
    // Show quiz section, hide others
    subjectSelection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    anatomyQuizSection.classList.remove('hidden');
    
    // Generate first question from shuffled array
    generateAnatomyQuestion(shuffledQuestions);
}

function generateAnatomyQuestion(shuffledQuestions) {
    // Get random unused question from shuffled array
    if (usedAnatomyQuestions.length >= totalQuestions || usedAnatomyQuestions.length >= shuffledQuestions.length) {
        showAnatomyResults();
        return;
    }
    
    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * shuffledQuestions.length);
    } while (usedAnatomyQuestions.includes(questionIndex));
    
    usedAnatomyQuestions.push(questionIndex);
    currentQuestion = shuffledQuestions[questionIndex];
    questionNumber++;
    
    // Update UI
    anatomyQuestionNumDisplay.textContent = questionNumber;
    anatomyQuestionNumberDisplay.textContent = `Q${questionNumber}`;
    anatomyQuestionText.textContent = currentQuestion.question;
    
    // Generate answer buttons - shuffle answers for randomness
    const answerPairs = currentQuestion.answers.map((answer, index) => ({
        answer: answer,
        isCorrect: index === currentQuestion.correct
    }));
    const shuffledAnswers = shuffleArray(answerPairs);
    
    anatomyAnswersDiv.innerHTML = '';
    shuffledAnswers.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'anatomy-answer-btn';
        btn.textContent = item.answer;
        btn.dataset.correct = item.isCorrect;
        btn.addEventListener('click', () => checkAnatomyAnswer(btn, item.isCorrect, currentQuestion.answers[currentQuestion.correct]));
        anatomyAnswersDiv.appendChild(btn);
    });
    
    // Reset feedback and buttons
    anatomyFeedback.classList.add('hidden');
    anatomyNextBtn.classList.add('hidden');
}

function checkAnatomyAnswer(btn, isCorrect, correctAnswer) {
    const buttons = document.querySelectorAll('.anatomy-answer-btn');
    
    // Disable all buttons
    buttons.forEach(b => b.disabled = true);
    
    // Highlight correct and wrong answers
    if (isCorrect) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        // Show the correct answer
        buttons.forEach(b => {
            if (b.dataset.correct === 'true') {
                b.classList.add('correct');
            }
        });
    }
    
    if (isCorrect) {
        score++;
        anatomyScoreDisplay.textContent = score;
        anatomyFeedbackText.textContent = '✅ Correct!';
        anatomyFeedback.className = 'feedback correct';
    } else {
        anatomyFeedbackText.textContent = `❌ Wrong! The correct answer is: ${correctAnswer}`;
        anatomyFeedback.className = 'feedback wrong';
    }
    
    anatomyFeedback.classList.remove('hidden');
    
    if (questionNumber < totalQuestions) {
        anatomyNextBtn.classList.remove('hidden');
        anatomyNextBtn.focus();
    } else {
        setTimeout(showAnatomyResults, 1500);
    }
}

function nextAnatomyQuestion() {
    // Get a fresh shuffled copy of questions
    const shuffledQuestions = shuffleArray([...anatomyQuestions]);
    generateAnatomyQuestion(shuffledQuestions);
}

function showAnatomyResults() {
    anatomyQuizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('wrong-count').textContent = totalQuestions - score;
    
    const percentage = (score / totalQuestions) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '🫀🌟 Perfect Score! You are an anatomy expert!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You know your organs well!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep learning anatomy!';
    } else if (percentage >= 40) {
        message = '📚 Not bad! Study more organs!';
    } else {
        message = '💪 Keep trying! The human body is complex!';
    }
    
    document.getElementById('result-message').textContent = message;
    newQuizBtn.textContent = 'Back to Subjects';
}

function restartAnatomyQuiz() {
    startAnatomyQuiz();
}

// ==================== SPACE QUIZ ====================

function startSpaceQuiz() {
    score = 0;
    questionNumber = 0;
    usedSpaceQuestions = []; // Reset for new quiz
    
    // Shuffle the entire question bank for a fresh random selection
    const shuffledQuestions = shuffleArray([...spaceQuestions]);
    
    // Update UI
    spaceScoreDisplay.textContent = score;
    
    // Show quiz section, hide others
    subjectSelection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    spaceQuizSection.classList.remove('hidden');
    
    // Generate first question from shuffled array
    generateSpaceQuestion(shuffledQuestions);
}

function generateSpaceQuestion(shuffledQuestions) {
    // Get random unused question from shuffled array
    if (usedSpaceQuestions.length >= totalQuestions || usedSpaceQuestions.length >= shuffledQuestions.length) {
        showSpaceResults();
        return;
    }
    
    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * shuffledQuestions.length);
    } while (usedSpaceQuestions.includes(questionIndex));
    
    usedSpaceQuestions.push(questionIndex);
    currentQuestion = shuffledQuestions[questionIndex];
    questionNumber++;
    
    // Update UI
    spaceQuestionNumDisplay.textContent = questionNumber;
    spaceQuestionNumberDisplay.textContent = `Q${questionNumber}`;
    spaceQuestionText.textContent = currentQuestion.question;
    
    // Generate answer buttons - shuffle answers for randomness
    const answerPairs = currentQuestion.answers.map((answer, index) => ({
        answer: answer,
        isCorrect: index === currentQuestion.correct
    }));
    const shuffledAnswers = shuffleArray(answerPairs);
    
    spaceAnswersDiv.innerHTML = '';
    shuffledAnswers.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'anatomy-answer-btn';
        btn.textContent = item.answer;
        btn.dataset.correct = item.isCorrect;
        btn.addEventListener('click', () => checkSpaceAnswer(btn, item.isCorrect, currentQuestion.answers[currentQuestion.correct]));
        spaceAnswersDiv.appendChild(btn);
    });
    
    // Reset feedback and buttons
    spaceFeedback.classList.add('hidden');
    spaceNextBtn.classList.add('hidden');
}

function checkSpaceAnswer(btn, isCorrect, correctAnswer) {
    const buttons = document.querySelectorAll('#space-answers .anatomy-answer-btn');
    
    // Disable all buttons
    buttons.forEach(b => b.disabled = true);
    
    // Highlight correct and wrong answers
    if (isCorrect) {
        btn.classList.add('correct');
    } else {
        btn.classList.add('wrong');
        // Show the correct answer
        buttons.forEach(b => {
            if (b.dataset.correct === 'true') {
                b.classList.add('correct');
            }
        });
    }
    
    if (isCorrect) {
        score++;
        spaceScoreDisplay.textContent = score;
        spaceFeedbackText.textContent = '✅ Correct!';
        spaceFeedback.className = 'feedback correct';
    } else {
        spaceFeedbackText.textContent = `❌ Wrong! The correct answer is: ${correctAnswer}`;
        spaceFeedback.className = 'feedback wrong';
    }
    
    spaceFeedback.classList.remove('hidden');
    
    if (questionNumber < totalQuestions) {
        spaceNextBtn.classList.remove('hidden');
        spaceNextBtn.focus();
    } else {
        setTimeout(showSpaceResults, 1500);
    }
}

function nextSpaceQuestion() {
    // Get a fresh shuffled copy of questions
    const shuffledQuestions = shuffleArray([...spaceQuestions]);
    generateSpaceQuestion(shuffledQuestions);
}

function showSpaceResults() {
    spaceQuizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = score;
    document.getElementById('wrong-count').textContent = totalQuestions - score;
    
    const percentage = (score / totalQuestions) * 100;
    let message = '';
    
    if (percentage === 100) {
        message = '🚀🌟 Perfect Score! You are a space expert!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You know your space facts!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep exploring space!';
    } else if (percentage >= 40) {
        message = '📚 Not bad! Learn more about the universe!';
    } else {
        message = '💪 Keep trying! Space is full of wonders!';
    }
    
    document.getElementById('result-message').textContent = message;
    newQuizBtn.textContent = 'Back to Subjects';
}

function restartSpaceQuiz() {
    startSpaceQuiz();
}

// ==================== UTILITY FUNCTIONS ====================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
