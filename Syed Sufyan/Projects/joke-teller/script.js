const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Passing joke to VoiceRSS Api
function tellMe(joke) {
  console.log(joke);
  VoiceRSS.speech({
    key: "69bc63aef9f94a32b4a933d342cead4c",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get jokes from joke api
async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup} .... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text to speech
    tellMe(joke);
    // Disable button
    toggleButton();
  } catch (error) {
    //Errors here
    console.log("ERROR--->", error);
  }
}

// Event Listeners

button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
