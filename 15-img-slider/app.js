const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// we use forEach to iterate over each image with a class of slide. We then assign two params: slide for each item and index which holds the index element position of the image. We set the style property 'left' to: index e.g. 0,1,2,3 multiplied by 100%. This effectively places our absolute positioned elements in a contiguous row.
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// Setup navigation of images based on button click. We set a flag var to keep count. We use the value of the count var to perform the carousel movement.

let count = 0;

const carousel = () => {
  // dealing with prev/nextBtn outside the range of image elements
  // when the count (num of times nextBtn clicked) equals the num of elements i.e. at the end of the range
  if (count === slides.length) {
    count = 0;
  }
  // we don't want the count to be negative so we reset the count back to the last item index position in the list which is the  length -1
  if (count < 0) {
    count = slides.length - 1;
  }
  // you can use more if conditionals to show or hide the buttons using style.display hidden / block. e.g. when the user gets to the end of the carousel, hide the next button and vice versa for the prev Button.
  slides.forEach((slide) => {
    slide.style.transform = `
        translateX(-${count * 100}%)`;
  });
};

prevBtn.addEventListener("click", () => {
  count--;
  carousel();
});
nextBtn.addEventListener("click", () => {
  count++;
  carousel();
});
