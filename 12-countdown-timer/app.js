const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const days = document.querySelector(".days");
let secondVal = parseInt(seconds.textContent);
let minVal = parseInt(minutes.textContent);
let hourVal = parseInt(hours.textContent);
let dayVal = parseInt(days.textContent);

const hourReset = (resetVal) => {
  if (resetVal === 0) {
    hourVal = 24;
  } else if (resetVal === 23) {
    dayVal--;
    days.textContent = dayVal;
  }
  dayVal--;
  days.textContent = dayVal;
};

const minuteReset = (resetVal) => {
  if (resetVal === 0) {
    minVal = 60;
  } else if (resetVal === 59) {
    hourVal--;
    hours.textContent = hourVal;
    hourReset(hourVal);
  }
};

const secondReset = (resetVal) => {
  if (resetVal === 0) {
    secondVal = 60;
    minVal--;
    minutes.textContent = minVal;
    minuteReset(minVal);
  }
};

const runTimer = () => {
  setInterval(() => {
    secondVal--;
    seconds.textContent = secondVal;
    secondReset(secondVal);
  }, 100);
};

window.addEventListener("load", runTimer);

if (
  seconds.textContent === 0 &&
  minutes.textContent === 0 &&
  hours.textContent === 0 &&
  days.textContent === 0
) {
  clearInterval(runTimer);
}
