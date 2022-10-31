// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()
  var horn = document.getElementById('horn-select');
  var volume = document.getElementById('volume');
  var image = document.querySelector('#expose img');
  var audio = document.querySelector('audio');
  var sound_img = document.querySelector('#volume-controls img');

  horn.addEventListener('change', function(){
    console.log(horn.value);
    if(horn.value=="air-horn"){
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    }else if(horn.value=="car-horn"){
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }else if(horn.value=="party-horn"){
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    }
  })
  volume.addEventListener('input', function(){
    if(volume.value >=1 && volume.value< 33){
      sound_img.src = "assets/icons/volume-level-1.svg";
    }else if(volume.value>=33 && volume.value <67){
      sound_img.src = "assets/icons/volume-level-2.svg";
    }else if(volume.value>=67){
      sound_img.src = "assets/icons/volume-level-3.svg";
    }else{
      sound_img.src = "assets/icons/volume-level-0.svg";
    }
  })

  var button_sound = document.querySelector('button');

  button_sound.addEventListener('click',function(){
    console.log('clicked');
    audio.volume = volume.value/100;
    audio.play();
    if(horn.value=="party-horn"){
      jsConfetti.addConfetti()
    }
  })

}
