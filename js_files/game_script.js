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
});