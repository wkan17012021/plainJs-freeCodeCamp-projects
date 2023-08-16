const value = document.getElementById("value");
const decrementBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const incrementBtn = document.querySelector(".increase");

const decrement = () => {
  value.textContent -= 1;
  if (value.textContent < 0) {
    value.style.color = "red";
  }
};

const reset = () => {
  value.style.color = "black";
  value.textContent = 0;
};

const increment = () => {
  value.textContent++;
  if (value.textContent > 0) {
    value.style.color = "green";
  }
};

decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);
incrementBtn.addEventListener("click", increment);
