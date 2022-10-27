let keyPress = false;

const playAudio = (e) => {
  if (!keyPress) {
    keyPress = true;
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
};

const removeClass = (e) => {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
};

window.addEventListener("keydown", playAudio);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeClass));

window.addEventListener("keyup", () => {
  keyPress = false;
});
