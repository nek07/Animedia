$(document).ready(function() {
    // Create an audio element with jQuery
    var audio = $('<audio>', {
      controls: true,
      src: 'music/lofi1.mp3' 
      
    });
  
    // Append the audio element to the #music div
    
    
    // Function to play the music
    function playMusic() {
      audio[0].play()
    }

    function showName(){
        return audio.src;
    }
  
    // Function to pause the music
    function pauseMusic() {
      audio[0].pause();
    }
  
    // Event listeners for the play and pause buttons
    $('#playButton').click(playMusic);
    $('#pauseButton').click(pauseMusic);
    $('#musicName').text("El Jazzy Chavo - Innerspaces");
  });
  