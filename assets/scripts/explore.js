// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var select = document.getElementById("voice-select");
  var text = document.getElementById("text-to-speak");
  var image = document.querySelector("img");
  var btn = document.querySelector("button");

  window.speechSynthesis.onvoiceschanged = function() {
    const voices = speechSynthesis.getVoices();
    console.log(voices.length);
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      select.appendChild(option);
    }
  }
  var synth = window.speechSynthesis;
  var utter = new SpeechSynthesisUtterance(text.value);
  btn.addEventListener('click', function(){
    synth = window.speechSynthesis;
    utter = new SpeechSynthesisUtterance(text.value);
    synth.speak(utter);
    image.src="assets/images/smiling-open.png";
  })
  setInterval(function(){
    if (!synth.speaking) {
      image.src="assets/images/smiling.png";
    }
  }, 500);
}
