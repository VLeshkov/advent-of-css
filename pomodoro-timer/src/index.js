let startStopButton = document.querySelector('.start-stop-button');
let isTimerRunning = false;

/*
let currentTime = new Date();

currentTime = Date.parse(currentTime);

let timerText = document.getElementById('timer-text');


timerText.textContent =  currentTime;
*/

startStopButton.addEventListener('click', function() {
  if (isTimerRunning == false) {
    startStopButton.textContent = 'STOP';
    isTimerRunning = true;
    currentTime.getSeconds() += 1;
  } else {
    startStopButton.textContent = 'START';
    isTimerRunning = false;
  };
});
