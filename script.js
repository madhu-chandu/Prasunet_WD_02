
let timer;
let elapsedTime = 0;
let isRunning = false;
let lapCount = 1;

function formatTime(ms) {
    const date = new Date(ms);
    return date.toISOString().substr(11, 8);
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        elapsedTime += 200;
        document.getElementById('display').textContent = formatTime(elapsedTime);
    }, 100);
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    document.getElementById('display').textContent = formatTime(elapsedTime);
    document.getElementById('lapList').innerHTML = '';
    lapCount = 1;
}

function recordLap() {
    if (!isRunning) return;
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
    document.getElementById('lapList').appendChild(lapItem);
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);
