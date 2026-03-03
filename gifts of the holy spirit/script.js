/**
 * GIFTS OF THE HOLY SPIRIT - INTERACTIVE JAVASCRIPT
 * Enhanced functionality for all sections
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoader();
    initNavigation();
    initScrollAnimations();
    initGiftCards();
    initQuiz();
    initJournal();
    initDailyVerse();
    initSearch();
    initToast();
});

// ========================================
// LOADER
// ========================================
function initLoader() {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2000);
}

// ========================================
// NAVIGATION FUNCTIONALITY
// ========================================
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') 
            ? 'rotate(45deg) translate(5px, 5px)' : '';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '';
        spans[2].style.transform = navMenu.classList.contains('active') 
            ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in, .gift-card, .prayer-card, .section-header, .saint-item, .cultivate-card, .fruit-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ========================================
// GIFT CARDS INTERACTIVITY
// ========================================
function initGiftCards() {
    const giftCards = document.querySelectorAll('.gift-card');

    giftCards.forEach(card => {
        // Click to flip
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        // Keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('flipped');
            }
        });
    });
}

// ========================================
// QUIZ FUNCTIONALITY
// ========================================
const quizData = {
    currentQuestion: 0,
    answers: [],
    questions: [
        {
            question: "When faced with a difficult moral decision, I tend to:",
            options: [
                { text: "Seek God's guidance through prayer and scripture", gift: "wisdom" },
                { text: "Look at what the Church teaches about similar situations", gift: "understanding" },
                { text: "Ask for advice from spiritually mature people", gift: "counsel" },
                { text: "Trust my conscience even if it's challenging", gift: "fortitude" }
            ]
        },
        {
            question: "When someone is struggling with their faith, I usually:",
            options: [
                { text: "Help them see God in their situation", gift: "wisdom" },
                { text: "Explain Church teaching in a way they can understand", gift: "knowledge" },
                { text: "Walk alongside them with patience and compassion", gift: "piety" },
                { text: "Encourage them to keep going despite difficulties", gift: "fortitude" }
            ]
        },
        {
            question: "In my prayer life, I most experience God as:",
            options: [
                { text: "A loving Father who guides my every step", gift: "piety" },
                { text: "The source of all truth and understanding", gift: "understanding" },
                { text: "The one who gives me wisdom to discern", gift: "wisdom" },
                { text: "The one who strengthens me in weakness", gift: "fortitude" }
            ]
        },
        {
            question: "When I read Scripture, I primarily seek:",
            options: [
                { text: "How to apply it to my daily life", gift: "understanding" },
                { text: "The deeper spiritual meaning beyond the literal", gift: "wisdom" },
                { text: "Knowledge about God's plan for creation", gift: "knowledge" },
                { text: "Guidance for making important decisions", gift: "counsel" }
            ]
        },
        {
            question: "When others need spiritual guidance, I feel called to:",
            options: [
                { text: "Help them understand Church teaching clearly", gift: "knowledge" },
                { text: "Lead them into a deeper relationship with God", gift: "wisdom" },
                { text: "Show them how to pray and worship", gift: "piety" },
                { text: "Help them find the courage to follow Christ", gift: "fortitude" }
            ]
        },
        {
            question: "The quality I most admire in spiritual leaders is:",
            options: [
                { text: "Their ability to discern God's will", gift: "wisdom" },
                { text: "Their deep understanding of faith", gift: "understanding" },
                { text: "Their courage to stand for truth", gift: "fortitude" },
                { text: "Their humble devotion to God", gift: "piety" }
            ]
        },
        {
            question: "When facing persecution for my faith, I would:",
            options: [
                { text: "Stand firm because I know the truth", gift: "fortitude" },
                { text: "Pray for the courage to remain faithful", gift: "fear" },
                { text: "Seek wisdom on how to respond", gift: "wisdom" },
                { text: "Trust that God will see me through", gift: "piety" }
            ]
        }
    ],
    giftDescriptions: {
        wisdom: {
            title: "Wisdom",
            latin: "Sapientia",
            description: "You seem to be gifted with the spirit of Wisdom, the first and highest gift of the Holy Spirit. This gift enables you to see all things in relation to God and to judge all situations from God's perspective. You have a deep desire to seek God's will in all things and to grow in divine contemplation.",
            verse: '"Blessed are those who find wisdom, who gain understanding." - Proverbs 3:13'
        },
        understanding: {
            title: "Understanding",
            latin: "Intellectus",
            description: "You seem to be gifted with the spirit of Understanding. This gift helps you comprehend the truths of our faith and apply them to your daily life. You have the ability to grasp the deeper meaning of Scripture and Church teachings, and to help others understand these truths.",
            verse: '"The Lord gives wisdom; from his mouth come knowledge and understanding." - Proverbs 2:6'
        },
        counsel: {
            title: "Counsel",
            latin: "Consilium",
            description: "You seem to be gifted with the spirit of Counsel. This gift provides supernatural guidance in difficult moral situations. You have the ability to know what God wants you to do and the courage to follow His will, even when it's challenging.",
            verse: '"I will instruct you and teach you in the way you should go." - Psalm 32:8'
        },
        fortitude: {
            title: "Fortitude",
            latin: "Fortitudo",
            description: "You seem to be gifted with the spirit of Fortitude. This gift gives you the courage to stand firm in your faith, even in the face of persecution or difficulty. You have the strength to overcome obstacles and remain faithful to God's commands.",
            verse: '"Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." - Joshua 1:9'
        },
        knowledge: {
            title: "Knowledge",
            latin: "Scientia",
            description: "You seem to be gifted with the spirit of Knowledge. This gift enables you to understand the created world in light of divine truth. You have insight into the relationship between God and His creation, and can help others see God's hand in all things.",
            verse: '"Hold on to instruction, do not let it go; guard it well, for it is your life." - Proverbs 4:13'
        },
        piety: {
            title: "Piety",
            latin: "Pietas",
            description: "You seem to be gifted with the spirit of Piety. This gift fills you with reverence for God and filial love for Him as your Father. You have a deep devotion to worship and serve God with love, and you inspire others to do the same.",
            verse: '"Serve the Lord with fear and celebrate his rule with trembling." - Psalm 2:11'
        },
        fear: {
            title: "Fear of the Lord",
            latin: "Timor Domini",
            description: "You seem to be gifted with the spirit of Fear of the Lord. This gift keeps you in awe of God's greatness and protects you from sin. It's not a fearful servile fear, but a joyful reverence that motivates you to live a holy life in God's presence.",
            verse: '"The fear of the Lord is the beginning of wisdom; all who follow his precepts have good understanding." - Proverbs 9:10'
        }
    }
};

function initQuiz() {
    // Quiz is initialized but starts hidden
}

function startQuiz() {
    document.getElementById('quizIntro').style.display = 'none';
    document.getElementById('quizQuestions').style.display = 'block';
    document.getElementById('quizResult').style.display = 'none';
    
    quizData.currentQuestion = 0;
    quizData.answers = [];
    
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quizQuestions');
    const question = quizData.questions[quizData.currentQuestion];
    
    let html = `
        <div class="question-container">
            <div class="question-number">Question ${quizData.currentQuestion + 1} of ${quizData.questions.length}</div>
            <div class="question-text">${question.question}</div>
            <div class="question-options">
    `;
    
    question.options.forEach((option, index) => {
        const isSelected = quizData.answers[quizData.currentQuestion] === index;
        html += `
            <button class="option-btn ${isSelected ? 'selected' : ''}" 
                    onclick="selectOption(${index})">
                ${option.text}
            </button>
        `;
    });
    
    html += `
            </div>
        </div>
        <div class="quiz-nav">
            <button class="quiz-nav-btn" onclick="prevQuestion()" 
                    ${quizData.currentQuestion === 0 ? 'disabled' : ''}>
                ← Previous
            </button>
            <button class="quiz-nav-btn" onclick="nextQuestion()">
                ${quizData.currentQuestion === quizData.questions.length - 1 ? 'See Results →' : 'Next →'}
            </button>
        </div>
    `;
    
    container.innerHTML = html;
}

function selectOption(index) {
    quizData.answers[quizData.currentQuestion] = index;
    renderQuestion();
}

function prevQuestion() {
    if (quizData.currentQuestion > 0) {
        quizData.currentQuestion--;
        renderQuestion();
    }
}

function nextQuestion() {
    // Check if current question is answered
    if (quizData.answers[quizData.currentQuestion] === undefined) {
        showToast('Please select an option before continuing.');
        return;
    }
    
    if (quizData.currentQuestion < quizData.questions.length - 1) {
        quizData.currentQuestion++;
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quizQuestions').style.display = 'none';
    document.getElementById('quizResult').style.display = 'block';
    
    // Count each gift
    const counts = {};
    quizData.answers.forEach((answerIndex, qIndex) => {
        const gift = quizData.questions[qIndex].options[answerIndex].gift;
        counts[gift] = (counts[gift] || 0) + 1;
    });
    
    // Find the dominant gift
    let dominantGift = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    const result = quizData.giftDescriptions[dominantGift];
    
    document.getElementById('resultContent').innerHTML = `
        <h4>${result.title} (${result.latin})</h4>
        <p>${result.description}</p>
        <p style="margin-top: 1rem; font-style: italic; color: var(--light-gold);">${result.verse}</p>
    `;
}

function restartQuiz() {
    document.getElementById('quizIntro').style.display = 'block';
    document.getElementById('quizQuestions').style.display = 'none';
    document.getElementById('quizResult').style.display = 'none';
    
    quizData.currentQuestion = 0;
    quizData.answers = [];
}

// ========================================
// JOURNAL / REFLECTION FUNCTIONALITY
// ========================================
function initJournal() {
    // Load saved journal entries
    loadJournal();
    loadJournalHistory();
}

function showReflectionPrompt(prompt) {
    const textarea = document.getElementById('journalEntry');
    textarea.value += '\n\n' + prompt + '\n';
    textarea.focus();
    textarea.scrollTop = textarea.scrollHeight;
}

function saveJournal() {
    const entry = document.getElementById('journalEntry').value;
    if (!entry.trim()) {
        showToast('Please write something before saving.');
        return;
    }
    
    const timestamp = new Date().toLocaleString();
    
    // Get existing entries
    let entries = JSON.parse(localStorage.getItem('holySpiritJournal') || '[]');
    
    // Add new entry
    entries.push({
        timestamp: timestamp,
        content: entry
    });
    
    // Save to localStorage
    localStorage.setItem('holySpiritJournal', JSON.stringify(entries));
    
    // Visual feedback
    showToast('Entry saved successfully!');
    loadJournalHistory();
}

function loadJournal() {
    const entries = JSON.parse(localStorage.getItem('holySpiritJournal') || '[]');
    if (entries.length > 0) {
        // Load the most recent entry
        const latestEntry = entries[entries.length - 1];
        // Only load if there's content
        if (latestEntry.content) {
            document.getElementById('journalEntry').value = latestEntry.content;
        }
    }
}

function loadJournalHistory() {
    const entries = JSON.parse(localStorage.getItem('holySpiritJournal') || '[]');
    const historyList = document.getElementById('historyList');
    
    if (entries.length === 0) {
        historyList.innerHTML = '<p style="color: var(--text-light); font-size: 0.9rem;">No previous entries yet.</p>';
        return;
    }
    
    // Show last 5 entries (reversed)
    const recentEntries = entries.slice(-5).reverse();
    
    historyList.innerHTML = recentEntries.map((entry, index) => `
        <div class="history-item" onclick="loadEntry(${entries.length - 1 - index})">
            <span class="history-date">${entry.timestamp}</span>
            <span class="history-preview">${entry.content.substring(0, 50)}...</span>
        </div>
    `).join('');
}

function loadEntry(index) {
    const entries = JSON.parse(localStorage.getItem('holySpiritJournal') || '[]');
    if (entries[index]) {
        document.getElementById('journalEntry').value = entries[index].content;
    }
}

function clearJournal() {
    if (confirm('Are you sure you want to clear your journal? This cannot be undone.')) {
        document.getElementById('journalEntry').value = '';
        localStorage.removeItem('holySpiritJournal');
        showToast('Journal cleared.');
        loadJournalHistory();
    }
}

function exportJournal() {
    const entries = JSON.parse(localStorage.getItem('holySpiritJournal') || '[]');
    if (entries.length === 0) {
        showToast('No entries to export.');
        return;
    }
    
    let text = 'MY JOURNAL - GIFTS OF THE HOLY SPIRIT\n';
    text += '=====================================\n\n';
    
    entries.forEach((entry, index) => {
        text += `Entry ${index + 1} - ${entry.timestamp}\n`;
        text += `${entry.content}\n`;
        text += '-----------------------------------\n\n';
    });
    
    // Create download
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'holy-spirit-journal.txt';
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('Journal exported successfully!');
}

// ========================================
// PRAYER FUNCTIONALITY
// ========================================
function toggleFavorite(button) {
    button.classList.toggle('favorited');
    
    if (button.classList.contains('favorited')) {
        button.textContent = 'Saved ✓';
    } else {
        button.textContent = 'Save to Favorites';
    }
    
    // Save favorites to localStorage
    const prayerCards = document.querySelectorAll('.prayer-card');
    const favorites = [];
    prayerCards.forEach((card, index) => {
        if (card.querySelector('.prayer-button').classList.contains('favorited')) {
            favorites.push(index);
        }
    });
    localStorage.setItem('holySpiritFavorites', JSON.stringify(favorites));
}

// Load favorites on page load
function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('holySpiritFavorites') || '[]');
    const prayerCards = document.querySelectorAll('.prayer-card');
    
    favorites.forEach(index => {
        if (prayerCards[index]) {
            const button = prayerCards[index].querySelector('.prayer-button');
            button.classList.add('favorited');
            button.textContent = 'Saved ✓';
        }
    });
}

// Initialize favorites
loadFavorites();

// Prayer filter
function filterPrayers(category) {
    const buttons = document.querySelectorAll('.prayer-filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const cards = document.querySelectorAll('.prayer-card');
    cards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else if (category === 'favorites') {
            const isFavorite = card.querySelector('.prayer-button').classList.contains('favorited');
            card.classList.toggle('hidden', !isFavorite);
        } else {
            const cardCategory = card.getAttribute('data-category');
            card.classList.toggle('hidden', cardCategory !== category);
        }
    });
}

// Speak prayer (text-to-speech)
function speakPrayer(button) {
    const prayerCard = button.closest('.prayer-card');
    const prayerText = prayerCard.querySelector('.prayer-text').innerText;
    
    // Stop any current speech
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        button.textContent = '🔊';
        return;
    }
    
    const utterance = new SpeechSynthesisUtterance(prayerText);
    utterance.rate = 0.8;
    utterance.onstart = () => {
        button.textContent = '⏹️';
    };
    utterance.onend = () => {
        button.textContent = '🔊';
    };
    
    window.speechSynthesis.speak(utterance);
    showToast('Listening to prayer...');
}

// Share prayer
function sharePrayer(button) {
    const prayerCard = button.closest('.prayer-card');
    const prayerTitle = prayerCard.querySelector('.prayer-title').innerText;
    const prayerText = prayerCard.querySelector('.prayer-text').innerText;
    
    const shareText = `${prayerTitle}\n\n${prayerText}\n\nShared from: Gifts of the Holy Spirit`;
    
    if (navigator.share) {
        navigator.share({
            title: prayerTitle,
            text: shareText
        }).catch(() => {});
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('Prayer copied to clipboard!');
        });
    }
}

// Print prayer
function printPrayer(button) {
    const prayerCard = button.closest('.prayer-card');
    const prayerTitle = prayerCard.querySelector('.prayer-title').innerText;
    const prayerText = prayerCard.querySelector('.prayer-text').innerHTML;
    
    const printContent = `
        <h2 style="font-family: Cinzel, serif; color: #1a365d; text-align: center; margin-bottom: 1rem;">${prayerTitle}</h2>
        <div style="font-size: 1rem; line-height: 1.8;">${prayerText}</div>
        <p style="margin-top: 2rem; text-align: center; font-style: italic; color: #666;">- From Gifts of the Holy Spirit -</p>
    `;
    
    document.getElementById('printContent').innerHTML = printContent;
    document.getElementById('printModal').classList.add('active');
}

function closePrintModal() {
    document.getElementById('printModal').classList.remove('active');
}

function confirmPrint() {
    window.print();
    closePrintModal();
}

// ========================================
// DAILY VERSE
// ========================================
const verses = [
    { text: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.", ref: "Galatians 5:22-23" },
    { text: "But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.", ref: "John 14:26" },
    { text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us.", ref: "Romans 8:26" },
    { text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?", ref: "1 Corinthians 6:19" },
    { text: "All who are led by the Spirit of God are sons of God.", ref: "Romans 8:14" },
    { text: "The Spirit of the Lord will rest on him—the Spirit of wisdom and of understanding.", ref: "Isaiah 11:2" },
    { text: "Wait for the gift the Father promised—the Holy Spirit.", ref: "Acts 1:8" },
    { text: "When the Holy Spirit comes on you, you will receive power.", ref: "Acts 1:8" },
    { text: "The Lord your God will circumcise your hearts and the hearts of your descendants, so that you may love the Lord your God with all your heart and all your soul.", ref: "Deuteronomy 30:6" },
    { text: "Blessed are those who find wisdom, who gain understanding.", ref: "Proverbs 3:13" }
];

function initDailyVerse() {
    // Load a random verse on page load
    refreshDailyVerse();
}

function refreshDailyVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    const verse = verses[randomIndex];
    
    document.getElementById('dailyVerseText').innerText = `"${verse.text}"`;
    document.getElementById('dailyVerseRef').innerText = verse.ref;
    
    showToast('New verse loaded!');
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================
function initSearch() {
    // Search is initialized but hidden
}

function toggleSearch() {
    const modal = document.getElementById('searchModal');
    modal.classList.toggle('active');
    
    if (modal.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }
    
    // Search data
    const prayers = [
        { title: 'Come, Holy Spirit', category: 'short' },
        { title: 'Prayer for the Seven Gifts', category: 'traditional' },
        { title: 'Novena to the Holy Spirit', category: 'traditional' },
        { title: 'Veni Creator Spiritus', category: 'traditional' },
        { title: 'Anima Christi', category: 'short' },
        { title: 'Holy Spirit, My Comforter', category: 'short' },
        { title: 'Sequence for Pentecost', category: 'traditional' },
        { title: 'Daily Prayer for the Gifts', category: 'short' }
    ];
    
    const gifts = ['Wisdom', 'Understanding', 'Counsel', 'Fortitude', 'Knowledge', 'Piety', 'Fear of the Lord'];
    
    const results = [];
    
    // Search prayers
    prayers.forEach(prayer => {
        if (prayer.title.toLowerCase().includes(query.toLowerCase())) {
            results.push({ type: 'Prayer', title: prayer.title, action: () => {
                toggleSearch();
                document.getElementById('prayer').scrollIntoView({ behavior: 'smooth' });
            }});
        }
    });
    
    // Search gifts
    gifts.forEach(gift => {
        if (gift.toLowerCase().includes(query.toLowerCase())) {
            results.push({ type: 'Gift', title: gift, action: () => {
                toggleSearch();
                document.getElementById('gifts').scrollIntoView({ behavior: 'smooth' });
            }});
        }
    });
    
    // Display results
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align: center; color: var(--text-light);">No results found.</p>';
    } else {
        resultsContainer.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="this.dataset.action && (${result.action.toString()})()">
                <strong>${result.type}</strong>: ${result.title}
            </div>
        `).join('');
        
        // Add click handlers
        resultsContainer.querySelectorAll('.search-result-item').forEach((item, index) => {
            item.addEventListener('click', results[index].action);
        });
    }
}

// ========================================
// GIFT ACTIONS
// ========================================
function shareGift(giftName, event) {
    event.stopPropagation();
    
    const giftNames = {
        wisdom: 'Wisdom (Sapientia)',
        understanding: 'Understanding (Intellectus)',
        counsel: 'Counsel (Consilium)',
        fortitude: 'Fortitude (Fortitudo)',
        knowledge: 'Knowledge (Scientia)',
        piety: 'Piety (Pietas)',
        fear: 'Fear of the Lord (Timor Domini)'
    };
    
    const shareText = `The Gift of ${giftNames[giftName]} - One of the Seven Gifts of the Holy Spirit\n\nShared from: Gifts of the Holy Spirit`;
    
    if (navigator.share) {
        navigator.share({
            title: `Gift of ${giftNames[giftName]}`,
            text: shareText
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast('Gift info copied to clipboard!');
        });
    }
}

function printGift(giftName, event) {
    event.stopPropagation();
    
    const giftData = {
        wisdom: { title: 'Wisdom', latin: 'Sapientia', desc: 'The first and highest gift of the Holy Spirit. It enables us to see all things in relation to God and to judge all things according to God\'s perspective.' },
        understanding: { title: 'Understanding', latin: 'Intellectus', desc: 'Helps us comprehend the truths of our faith and apply them to our daily life.' },
        counsel: { title: 'Counsel', latin: 'Consilium', desc: 'Provides supernatural guidance in difficult moral situations.' },
        fortitude: { title: 'Fortitude', latin: 'Fortitudo', desc: 'Gives us the courage to stand firm in our faith, even in persecution.' },
        knowledge: { title: 'Knowledge', latin: 'Scientia', desc: 'Enables us to understand the created world in light of divine truth.' },
        piety: { title: 'Piety', latin: 'Pietas', desc: 'Fills us with reverence for God and a filial love for Him as our Father.' },
        fear: { title: 'Fear of the Lord', latin: 'Timor Domini', desc: 'A joyful awe before God\'s greatness that keeps us from sin.' }
    };
    
    const gift = giftData[giftName];
    
    const printContent = `
        <h2 style="font-family: Cinzel, serif; color: #1a365d; text-align: center;">${gift.title}</h2>
        <p style="text-align: center; font-style: italic; color: #c9a227; margin-bottom: 1rem;">${gift.latin}</p>
        <p style="font-size: 1rem; line-height: 1.8;">${gift.desc}</p>
        <p style="margin-top: 2rem; text-align: center; font-style: italic; color: #666;">- From Gifts of the Holy Spirit -</p>
    `;
    
    document.getElementById('printContent').innerHTML = printContent;
    document.getElementById('printModal').classList.add('active');
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function initToast() {
    // Toast initialized
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.innerText = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// SMOOTH SCROLL FOR NAVIGATION
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PARALLAX EFFECT FOR HERO (Optional Enhancement)
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
    }
});

// ========================================
// CONSOLE WELCOME MESSAGE
// ========================================
console.log('%c🙏 Gifts of the Holy Spirit', 'font-size: 24px; font-weight: bold; color: #c9a227;');
console.log('%cCreated with reverence for the Holy Spirit', 'color: #1a365d;');
console.log('%cMay this project bring you closer to the Divine Gifts.', 'font-style: italic; color: #4a235a;');
