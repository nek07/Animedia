//draggable puzzle is the idea, not yet finished as you can probably tell
//copied and pasted this js from w3school
//feel free to give suggestions to any part of the code and tweet me @ilovepeoplez ! ^^

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
