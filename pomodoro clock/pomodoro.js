let timer;
let timeLeft = 1500; 

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const breakBtn = document.getElementById('break');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
   
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (timer) return; 
    
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeLeft = 1500;
    updateDisplay();
}

function startBreak() {
    clearInterval(timer);
    timer = null;
    timeLeft = 300; 
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
breakBtn.addEventListener('click', startBreak);