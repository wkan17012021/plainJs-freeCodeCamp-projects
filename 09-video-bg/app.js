// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

const preloaderWrapper = document.querySelector(".preloader");
const videoWrapper = document.querySelector(".video-container");
const switchSpan = document.querySelector(".switch");
const controlWrapper = document.querySelector('.switch-btn');

const playPause = () => {
    if (videoWrapper.paused) {
          videoWrapper.play(); 
          switchSpan.classList.toggle('slide');
    } else {
        videoWrapper.pause();
        switchSpan.classList.toggle('slide');
    }
};

window.addEventListener("DOMContentLoaded", () => {
  preloaderWrapper.classList.toggle("hide-preloader");
});

videoWrapper.removeAttribute("controls");
controlWrapper.addEventListener("click", playPause);
