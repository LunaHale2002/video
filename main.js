import './style.css'

const video = document.querySelector(".video");
const toggleButton = document.querySelector(".toggleButton");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress_filled");

function togglePlay() {
    if(video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

function updateToggleButton() {
    toggleButton.innerHTML = video.paused ? "►" : "❚❚";
}

function handleProgress() {
    const progressPercentage = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${progressPercentage}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progressoffsetWhidht) * video.duartion;
    video.currentTime = scrubTime;
}

toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);

let mousedown = false;

progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mousemove", (e) => (mousedown && scrub(e)));
progress.addEventListener("mouseup", () => (mousedown = false));