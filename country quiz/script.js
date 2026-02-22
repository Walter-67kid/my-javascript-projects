// Country Quiz Game
const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,flags,region,subregion,population,cca3';

// Game State
let countriesData = [];
let currentQuestion = 0;
let score = 0;
let questions = [];
let isAnswered = false;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');
const questionType = document.getElementById('question-type');
const questionText = document.getElementById('question-text');
const questionMedia = document.getElementById('question-media');
const optionsContainer = document.getElementById('options-container');
const finalScoreValue = document.getElementById('final-score-value');
const resultMessage = document.getElementById('result-message');
const resultEmoji = document.getElementById('result-emoji');

// Question Types
const QUESTION_TYPES = {
    CAPITAL: 'capital',
    FLAG: 'flag',
    GEOGRAPHY: 'geography',
    POPULATION: 'population'
};

// Initialize Game
async function init() {
    try {
        const response = await fetch(API_URL);
        countriesData = await response.json();
        // Filter out countries without required data
        countriesData = countriesData.filter(c => 
            c.capital && c.capital.length > 0 &&
            c.flags && c.flags.svg &&
            c.population > 0 &&
            c.region && c.cca3
        );
        
        startBtn.addEventListener('click', startQuiz);
        playAgainBtn.addEventListener('click', resetQuiz);
    } catch (error) {
        console.error('Error fetching country data:', error);
        alert('Failed to load country data. Please check your internet connection and refresh.');
    }
}

function startQuiz() {
    generateQuestions();
    currentQuestion = 0;
    score = 0;
    showScreen(quizScreen);
    displayQuestion();
}

function generateQuestions() {
    questions = [];
    const shuffledCountries = [...countriesData].sort(() => Math.random() - 0.5);
    const selectedCountries = shuffledCountries.slice(0, 10);
    
    selectedCountries.forEach(country => {
        const questionTypes = Object.values(QUESTION_TYPES);
        const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
        
        questions.push({
            country: country,
            type: randomType,
            correctAnswer: getCorrectAnswer(country, randomType)
        });
    });
}

function getCorrectAnswer(country, type) {
    switch (type) {
        case QUESTION_TYPES.CAPITAL:
            return country.capital[0];
        case QUESTION_TYPES.FLAG:
            return country.name.common;
        case QUESTION_TYPES.GEOGRAPHY:
            return country.region;
        case QUESTION_TYPES.POPULATION:
            return country.name.common;
    }
}

function displayQuestion() {
    isAnswered = false;
    const question = questions[currentQuestion];
    
    // Update progress
    questionCounter.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
    scoreDisplay.textContent = `Score: ${score}`;
    progressFill.style.width = `${((currentQuestion) / questions.length) * 100}%`;
    
    // Set question type label and text
    questionType.textContent = getQuestionTypeLabel(question.type);
    questionText.innerHTML = getQuestionText(question);
    
    // Handle media (flags)
    if (question.type === QUESTION_TYPES.FLAG) {
        questionMedia.innerHTML = `<img src="${question.country.flags.svg}" alt="Flag" class="flag-large">`;
    } else {
        questionMedia.innerHTML = '';
    }
    
    // Generate options
    const options = generateOptions(question);
    renderOptions(options, question.correctAnswer);
}

function getQuestionTypeLabel(type) {
    switch (type) {
        case QUESTION_TYPES.CAPITAL:
            return '🏛️ Capital City';
        case QUESTION_TYPES.FLAG:
            return '🚩 Identify Flag';
        case QUESTION_TYPES.GEOGRAPHY:
            return '🗺️ Geography';
        case QUESTION_TYPES.POPULATION:
            return '👥 Population';
    }
}

function getQuestionText(question) {
    switch (question.type) {
        case QUESTION_TYPES.CAPITAL:
            return `What is the capital of <strong>${question.country.name.common}</strong>?`;
        case QUESTION_TYPES.FLAG:
            return `Which country does this flag belong to?`;
        case QUESTION_TYPES.GEOGRAPHY:
            return `Which continent is <strong>${question.country.name.common}</strong> located in?`;
        case QUESTION_TYPES.POPULATION:
            return `Which country has a larger population?`;
    }
}

function generateOptions(question) {
    const correctAnswer = question.correctAnswer;
    let options = [correctAnswer];
    
    // Get random wrong answers
    const wrongCountries = countriesData
        .filter(c => c.name.common !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    
    if (question.type === QUESTION_TYPES.POPULATION) {
        // For population questions, we need to compare with another country
        const otherCountry = wrongCountries[0];
        const options1 = [question.country.name.common, otherCountry.name.common];
        
        // Determine correct answer based on actual populations
        const isFirstLarger = question.country.population > otherCountry.population;
        
        return {
            options: options1,
            compareInfo: {
                country1: question.country,
                country2: otherCountry,
                correctIsFirst: isFirstLarger
            }
        };
    }
    
    wrongCountries.forEach(c => {
        let wrongAnswer;
        switch (question.type) {
            case QUESTION_TYPES.CAPITAL:
                wrongAnswer = c.capital[0];
                break;
            case QUESTION_TYPES.FLAG:
                wrongAnswer = c.name.common;
                break;
            case QUESTION_TYPES.GEOGRAPHY:
                wrongAnswer = c.region;
                break;
        }
        if (wrongAnswer && !options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    });
    
    // Shuffle options
    options = options.sort(() => Math.random() - 0.5);
    
    return { options };
}

function renderOptions(optionsData, correctAnswer) {
    optionsContainer.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    if (optionsData.compareInfo) {
        // Special rendering for population questions
        const { country1, country2, correctIsFirst } = optionsData.compareInfo;
        
        questionText.innerHTML = `Which country has a larger population?<br>
            <div class="compare-countries">
                <div class="country-option">${country1.name.common} <span class="pop-hint">(Population: ${formatNumber(country1.population)})</span></div>
                <div class="vs">VS</div>
                <div class="country-option">${country2.name.common} <span class="pop-hint">(Population: ${formatNumber(country2.population)})</span></div>
            </div>`;
        
        const options = correctIsFirst ? [country1.name.common, country2.name.common] : [country2.name.common, country1.name.common];
        
        options.forEach((option, index) => {
            const btn = createOptionButton(option, letters[index], index === 0);
            btn.addEventListener('click', () => handleAnswer(btn, option, options[0]));
            optionsContainer.appendChild(btn);
        });
    } else {
        optionsData.options.forEach((option, index) => {
            const btn = createOptionButton(option, letters[index], option === correctAnswer);
            btn.addEventListener('click', () => handleAnswer(btn, option, correctAnswer));
            optionsContainer.appendChild(btn);
        });
    }
}

function createOptionButton(text, letter, isCorrect) {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.correct = isCorrect;
    btn.innerHTML = `<span class="option-letter">${letter}</span> ${text}`;
    return btn;
}

function handleAnswer(selectedBtn, selectedAnswer, correctAnswer) {
    if (isAnswered) return;
    isAnswered = true;
    
    const isCorrect = selectedAnswer === correctAnswer;
    
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
        // Highlight correct answer
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
            }
        });
    }
    
    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    // Update score display
    scoreDisplay.textContent = `Score: ${score}`;
    
    // Move to next question or show results
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    showScreen(resultScreen);
    progressFill.style.width = '100%';
    
    finalScoreValue.textContent = `${score}/${questions.length}`;
    
    // Set result message and emoji based on score
    if (score === 10) {
        resultEmoji.textContent = '🏆';
        resultMessage.textContent = 'Perfect score! You are a geography genius!';
    } else if (score >= 8) {
        resultEmoji.textContent = '🌟';
        resultMessage.textContent = 'Excellent! You really know your countries!';
    } else if (score >= 6) {
        resultEmoji.textContent = '👍';
        resultMessage.textContent = 'Good job! Keep learning and improve!';
    } else if (score >= 4) {
        resultEmoji.textContent = '📚';
        resultMessage.textContent = 'Not bad! There\'s room for improvement.';
    } else {
        resultEmoji.textContent = '💪';
        resultMessage.textContent = 'Keep practicing! You\'ll get better!';
    }
}

function resetQuiz() {
    showScreen(startScreen);
    currentQuestion = 0;
    score = 0;
    questions = [];
}

function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Add CSS for population comparison
const style = document.createElement('style');
style.textContent = `
    .compare-countries {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
        padding: 20px;
        background: #F9FAFB;
        border-radius: 12px;
    }
    .country-option {
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--text-primary);
    }
    .pop-hint {
        font-size: 0.85rem;
        font-weight: 400;
        color: var(--text-secondary);
    }
    .vs {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--accent-color);
        padding: 4px 16px;
        background: white;
        border-radius: 20px;
    }
`;
document.head.appendChild(style);

// Start the game
init();
