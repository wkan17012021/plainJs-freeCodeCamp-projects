// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const linksList = document.querySelector(".links");
const toggleBtn = document.querySelector('.nav-toggle');


// debounce method
let timeout = false; // holder for timeout id
let delay = 250; // delay after event is "complete" to run callback
let calls = 0;

//
const toggleMobMenu = () => {
  let viewPortWidth = document.documentElement.clientWidth;
//   console.log(viewPortWidth);
  if (viewPortWidth < "800") {
    // console.log("less than 800px");
    linksList.classList.toggle("show-links");
    console.log(calls)
  }
};

toggleBtn.addEventListener("click", () => {
    linksList.classList.toggle("show-links");
});

window.addEventListener("resize", function () {
      // clear the timeout
  clearTimeout(timeout);
  // start timing for event "completion"
  timeout = setTimeout(toggleMobMenu, delay);
});
