const tabBtns = document.querySelectorAll(".tab-btn");
const contentWrapper = document.querySelector(".about");
const content = document.querySelectorAll(".content");

contentWrapper.addEventListener("click", (e) => {
  const chosenOne = e.target.dataset.id; // we use dataset obj to access the btn's id attribute that was clicked
  if (chosenOne) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("active"); // reset state so all tabs are inactive
      e.target.classList.add("active"); // subsequently add the active class
      content.forEach((section) => {
        // remove the active class first to reset state. If the id of the btn matches the id of the content section, then add the active class.
        section.classList.remove("active");
        if (chosenOne === section.id) {
          section.classList.add("active");
        }
      });
    });
  }
});
