// Stopwatch variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval = null;
let isRunning = false;
let lapCount = 0;

// DOM elements
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const startStopBtn = document.getElementById('startStopBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapList = document.getElementById('lapList');

// Format numbers to display with leading zeros
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Update the display
function updateDisplay() {
    hoursDisplay.textContent = formatTime(hours);
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = formatTime(milliseconds);
}

// Start/Stop button click handler
startStopBtn.addEventListener('click', function() {
    if (isRunning) {
        stop();
    } else {
        start();
    }
});

// Start the stopwatch
function start() {
    isRunning = true;
    startStopBtn.textContent = 'Stop';
    startStopBtn.classList.add('running');
    lapBtn.disabled = false;
    
    interval = setInterval(function() {
        milliseconds += 10;
        
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        
        if (hours >= 99) {
            hours = 0;
        }
        
        updateDisplay();
    }, 10);
}

// Stop the stopwatch
function stop() {
    isRunning = false;
    startStopBtn.textContent = 'Start';
    startStopBtn.classList.remove('running');
    clearInterval(interval);
}

// Reset button click handler
resetBtn.addEventListener('click', function() {
    reset();
});

// Reset the stopwatch
function reset() {
    stop();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCount = 0;
    updateDisplay();
    lapList.innerHTML = '';
    lapBtn.disabled = true;
}

// Lap button click handler
lapBtn.addEventListener('click', function() {
    if (isRunning) {
        addLap();
    }
});

// Add a lap time
function addLap() {
    lapCount++;
    
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}.${formatTime(milliseconds)}`;
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="lap-number">Lap ${lapCount}</span>
        <span class="lap-time">${lapTime}</span>
    `;
    
    // Insert at the beginning to show latest lap first
    lapList.insertBefore(li, lapList.firstChild);
}

// Initialize
lapBtn.disabled = true;
updateDisplay();
