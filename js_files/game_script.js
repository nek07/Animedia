//draggable puzzle is the idea, not yet finished as you can probably tell
//copied and pasted this js from w3school
//feel free to give suggestions to any part of the code and tweet me @ilovepeoplez ! ^^

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
        $('#sound > span').fadeOut(0.0001)
    })
    
});