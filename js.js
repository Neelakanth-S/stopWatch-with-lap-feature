const playButton = document.getElementsByClassName("play")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const clearButton = document.getElementsByClassName("lap-clear-btn")[0];
const min = document.getElementsByClassName("min")[0];
const second = document.getElementsByClassName("sec")[0];
const miliSecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
let isPlay = false;
let mins;
let minCounter = 0;
let sec;
let secCounter = 0;
let miliSec;
let miliCounter = 0;
let isReset = false;
let lapItem = 0;
const togglebutton = () => {
  lapButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
};

const play = () => {
  if (!isPlay && !isReset) {
    playButton.innerHTML = "pause";
    mins = setInterval(() => {
      min.innerHTML = `${++minCounter} : `;
    }, 60 * 1000);
    sec = setInterval(() => {
      if (secCounter === 60) {
        secCounter = 0;
      }
      second.innerHTML = `&nbsp;${++secCounter} : `;
    }, 1000);
    miliSec = setInterval(() => {
      if (miliCounter === 100) {
        miliCounter = 0;
      }
      miliSecond.innerHTML = `&nbsp;${++miliCounter}`;
    }, 10);
    isPlay = true;
    isReset = true;
  } else {
    playButton.innerHTML = "play";
    clearInterval(min);
    clearInterval(sec);
    clearInterval(miliSec);
    isPlay = false;
    isReset = false;
  }
  togglebutton();
};

const reset = () => {
  isReset = true;
  play();
  lapButton.classList.add("hidden");
  resetButton.classList.add("hidden");
  second.innerHTML = "&nbsp;0 :";
  miliSecond.innerHTML = "&nbsp;0";
  min.innerHTML = "0 :";
};
const lap = () => {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");

  li.setAttribute("class", "lap-item");
  number.setAttribute("class", "number");
  timeStamp.setAttribute("class", "time-stamp");
  number.innerText = `#${++lapItem}`;
  timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${miliCounter}`;
  li.append(number, timeStamp);
  laps.append(li);
  clearButton.classList.remove("hidden");
};

const clearAll = () => {
  laps.innerHTML = "";
  laps.append(clearButton);
  clearButton.classList.add("hidden");
};
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);