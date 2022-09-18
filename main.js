const time = document.getElementById(`time`);
const startButton = document.getElementById(`start`);
const stopButton = document.getElementById(`stop`);
const resetButton = document.getElementById(`reset`);

let startTime;
let stopTime = 0;
let timeoutId;

function displayTime(){
  const currentTime = new Date(Date.now() - startTime+stopTime);
  const h = String(currentTime.getHours()-9);
  const m = String(currentTime.getMinutes());
  const s = String(currentTime.getSeconds());
  const ms = String(currentTime.getMilliseconds());

  time.textContent = `${h}:${m}:${s}:${ms}`;
  timeoutId = setTimeout(displayTime,10);
}

startButton.addEventListener(`click`, () => {
 startButton.disabled = true;
 stopButton.disabled = false;
 resetButton.disabled = true;
 startTime = Date.now();
 displayTime();
});

stopButton.addEventListener(`click`, () => {
 startButton.disabled = false;
 stopButton.disabled = true;
 resetButton.disabled = false; 
 clearTimeout(timeoutId);
 stopTime += (Date.now() - startTime);
});

resetButton.addEventListener(`click`, () => {
 startButton.disabled = false;
 stopButton.disabled = true;
 resetButton.disabled = true;
 time.textContent = `0:0:0:0`;
 stopTime = 0;
})
