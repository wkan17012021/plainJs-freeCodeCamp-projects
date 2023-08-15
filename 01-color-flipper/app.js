const colors = ["#f1eece", "salmon", "rgba(133,122,200)", "#bada55"];
const btnRandom = document.getElementById("btn");
const bg = document.querySelector("body");
const span = document.querySelector(".color");

let prevIdx;

function randomiser() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    return randomIndex;
}

const getRandColor = () => {
  let newIdx = randomiser();
  if (prevIdx === newIdx) {
    console.log("same index generated");
    while (prevIdx === newIdx) {
        newIdx = randomiser();
    }
  }  
   bg.style.background = colors[newIdx];
    span.textContent = colors[newIdx];
    span.style.color = colors[newIdx];
    prevIdx = newIdx;
  
};

btnRandom.addEventListener("click", getRandColor);
