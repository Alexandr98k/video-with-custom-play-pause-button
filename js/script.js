const videoFile = document.querySelector(".video-file");
const button = document.querySelector(".button");
const buttonIcon = document.querySelector(".button-icon");

function playPause() {
  if (videoFile.paused) {
    //play video
    videoFile.play();

    //change icon on button
    buttonIcon.src = "icons/pause.svg";
  } else {
    //pause video
    videoFile.pause();

    //change the icon on button
    buttonIcon.src = "icons/play.svg";
  }
}
button.addEventListener("click", playPause);

function finalVideo() {
  //video ends, icon change
  buttonIcon.src = "icons/play.svg";
}
videoFile.addEventListener("ended", finalVideo);
