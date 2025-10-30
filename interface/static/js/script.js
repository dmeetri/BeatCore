// PLAY PAYSE
const img = document.getElementById("play-pause");

const playImg = "assets/icons/play.svg";
const pauseImg = "assets/icons/payse.svg";

let isPlaying = true;

function togglePlayPause() {
  if (isPlaying) {
    img.src = pauseImg;
  } else {
    img.src = playImg;
  }

  isPlaying = !isPlaying;
}
