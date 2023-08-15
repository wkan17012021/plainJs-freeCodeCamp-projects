const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnRandom = document.getElementById("btn");
const bg = document.querySelector("body");
const span = document.querySelector(".color");


btnRandom.addEventListener("click", () => {
  let hexArr = ["#"];
    // hex code consists of 6 chars
  for (let i = 0; i < 6; i++) {
    let randIdx = Math.floor(Math.random() * hex.length);
    hexArr.push(hex[randIdx]);
    let hexStr = hexArr.toString().replaceAll(',', '');
    console.log(hexStr);
    bg.style.background = hexStr;
    span.textContent = hexStr;
    span.style.color = hexStr;
  }
});


