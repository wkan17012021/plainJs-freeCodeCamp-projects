const questions = document.querySelectorAll(".question");
const qBtns = document.querySelectorAll(".question-btn");

const openTab = (e) => {
    e.currentTarget.parentElement.nextElementSibling.classList.toggle("question-text");
}
qBtns.forEach((qs) => {
  qs.addEventListener("click", openTab);
});
