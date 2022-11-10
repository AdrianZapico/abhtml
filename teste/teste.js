/* 
Esse modelo também funciona para vídeo basta trocar a tag <audio> por <video>:
 
  <video width="1280" height="720" >
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
  </video> 
  
*/

// Pega o ID do audio
var podcastAudio = document.getElementById('podcast-audio');

var playBtn = document.getElementById('podcast-play');

var pauseBtn = document.getElementById('podcast-pause');

// Play audio & mostra pause btn
var playShow = function() {
  podcastAudio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

// Pause audio & mostra play btn
var pauseShow = function() {
  podcastAudio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};