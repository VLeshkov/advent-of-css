let startStopButton = document.querySelector('.start-stop-button');
let isTimerRunning = false;


let currentTime = 900;

let timerInterval;

function writeTime() {
  document.getElementById('timer-text').textContent = `${('0' + String(Math.trunc(currentTime / 60))).substr(-2)}:${('0' + String(currentTime % 60)).substr(-2)}`

  if (currentTime <= 0) {
    currentTime = 900
  } else {
    currentTime -= 1;
  }
}


startStopButton.addEventListener('click', function() {
  if (isTimerRunning == false) {
    startStopButton.textContent = 'STOP';
    isTimerRunning = true;
    timerInterval = setInterval(writeTime, 1000);
  } else {
    startStopButton.textContent = 'START';
    isTimerRunning = false;
    clearInterval(timerInterval);
  };
});
