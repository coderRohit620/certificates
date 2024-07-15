var music = document.getElementById('music-button');
 var controlButton = document.getElementById('play-pause');

 function musicPlay() {
    if (music.paused) {
    music.play();
    controlButton.className = "pause";
     } else {
       music.pause();
       controlButton.className = "play";
     }
   }
 
 controlButton.addEventListener("click", musicPlay);
 music.addEventListener("ended", function () {
 controlButton.className = "play";
 });