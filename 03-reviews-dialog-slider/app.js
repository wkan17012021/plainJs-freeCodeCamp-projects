const reviewArr = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1515180274303-4dcdee740c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    imgAlt:
      "woman with ridiculously large glasses and transparent frames with black beanie hat in city background",
    name: "Leslie Knope",
    job: "UX/UI Designer",
    info: "Specialises in community-led projects such as parks, recreation and grassroots initiatives",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1546994372-f636adc59e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imgAlt:
      "woman with ridiculously large glasses and transparent frames with black beanie hat in city background",
    name: "Pam Beasley",
    job: "FrontEnd Engineer",
    info: "Avid watercolour artist, former receptionist turned web developer specialising in frontend solutions",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1561581918-f7f266c4ff66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imgAlt:
      "man with black t-shirt and black sunglasses with brick building in background",
    name: "Charlie Day",
    job: "Back-end Engineer",
    info: "Previous jobs include bar-tending, vermin extermination and pianist for his band. Now Charlie operates as a backend engineer specialising in Java.",
  },
];

const avatar = document.querySelector(".img-container img");
const sliderArrows = document.querySelectorAll(".fas");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const randomBtn = document.querySelector(".random-btn");
let positionKeeper = 0;

const updateReview = (position) => {
  avatar.setAttribute("src", `${reviewArr[position].imgSrc}`);
  avatar.setAttribute("alt", `${reviewArr[position].imgAlt}`);
  author.textContent = reviewArr[position].name;
  job.textContent = reviewArr[position].job;
  info.textContent = reviewArr[position].info;
};

const surpriseMe = () => {
  let randIdx = Math.floor(Math.random() * reviewArr.length);
  //   console.log(randIdx);
  updateReview(randIdx);
};

sliderArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    // console.log(event.currentTarget.classList);
    if (event.currentTarget.classList.contains("fa-chevron-right")) {
      if (positionKeeper === reviewArr.length - 1) {
        positionKeeper = 0;
        // console.log('entered inner if');
        // console.log(positionKeeper);
      } else {
        positionKeeper++;
      }
      //   console.log(positionKeeper);
      updateReview(positionKeeper);
    }

    if (event.currentTarget.classList.contains("fa-chevron-left")) {
      if (positionKeeper === 0) {
        positionKeeper = reviewArr.length - 1;
        console.log("if: " + positionKeeper);
      } else {
        positionKeeper--;
        console.log("else: " + positionKeeper);
      }
      updateReview(positionKeeper);
    }
  });
});

randomBtn.addEventListener("click", surpriseMe);
