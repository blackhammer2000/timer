const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
let interval;

const startTime = () => (interval = setInterval(renderTime, 1000));

const renderTime = () => {
  const timeDisplay = document.querySelector(".display h5");
  timeDisplay.innerText = new Date();
};
const stopTime = () => clearInterval(interval);

renderTime();
startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTime);
