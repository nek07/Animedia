
$(document).ready(function() {
    $(".draggable").on("dragstart", function(event) {
        event.originalEvent.dataTransfer.setData("text", event.target.id);
    });

    $(".droppable").on("dragover", function(event) {
        event.preventDefault();
    });

    $(".droppable").on("drop", function(event) {
        event.preventDefault();
        var data = event.originalEvent.dataTransfer.getData("text"); // Use originalEvent
        var draggableElement = document.getElementById(data);
        $(this).append(draggableElement);
    });
    $(".help-button").on("click",function(){
        
    })

    $("#action-button").on("click",function() {
        $('.app-container').animate({ opacity: 1 }, 1000); 
        $("#hint").slideToggle("slow", function() {
          $("#sound").slideToggle("slow", function() {
            $("#quote").slideToggle("slow");
          });
        });
      });
    $("#hint").on('click',function(){
        alert("The result of puzzle is Satoru Gojo from Jujutsu Kaisen");
    })
    $("#quote").on('click',function(){
        alert("Even if you do not have enough skill, just do it.")
    })
    $('#sound').on('click',function(){
        $('#music').fadeIn(0.0001);
        $('#sound > span').animate({ opacity: 0 }, 0.0001); 
    })
    
});