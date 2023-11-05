$(document).ready(function() {
    // Create an audio element with jQuery
    var audio = $('<audio>', {
      controls: true,
      src: 'your-music-file.mp3' // Replace 'your-music-file.mp3' with the actual URL or path to your music file
    });
  
    // Append the audio element to the body
    $('body').append(audio);
  
    // Function to play the music
    function playMusic() {
      audio[0].play();
    }
  
    // Function to pause the music
    function pauseMusic() {
      audio[0].pause();
    }
  
    // Event listeners for the play and pause buttons
    $('#playButton').click(playMusic);
    $('#pauseButton').click(pauseMusic);
  });