let timerInterval;
let remainingTime = 0;

const timeInput = document.getElementById("time-input");
const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

const updateDisplay = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const startTimer = () => {
    if (remainingTime <= 0) {
        remainingTime = parseInt(timeInput.value, 10) || 0;
        if (remainingTime <= 0) return;
    }

    timerInterval = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateDisplay(remainingTime);
        } else {
            clearInterval(timerInterval);
            alert("¡Tiempo terminado!");
        }
    }, 1000);

    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
};

const pauseTimer = () => {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
};

const resetTimer = () => {
    clearInterval(timerInterval);
    remainingTime = 0;
    updateDisplay(0);
    timeInput.value = "";
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
};

// Inicializar
updateDisplay(0);
pauseBtn.disabled = true;
resetBtn.disabled = true;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
