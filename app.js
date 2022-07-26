const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
renderTime();
let interval;

startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTime);

function startTime() {
  interval = setInterval(renderTime, 1000);
}

function renderTime() {
  const timeDisplay = document.querySelector(".display h5");
  timeDisplay.innerText = new Date();
}

function stopTime() {
  clearInterval(interval);
}
