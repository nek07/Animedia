// Get references to HTML elements
const listContainer = document.getElementById("list-container"); // List container
const inputBox = document.getElementById("input-box"); // Input box for new tasks

// Add event listener to the list container for marking and deleting tasks
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        markTask(e); // Mark task as checked/unchecked
        saveData(); // Save task list to local storage
    } else if (e.target.tagName === 'SPAN') {
        deleteTask(e); // Delete a task
        saveData(); // Save task list to local storage
    }
}, false);

// Function to add a new task to the list
function addTask() {
    if (getValue() === "") {
        alert("You must write your task!"); // Alert if the input is empty
    } else {
        // Create a new task with a delete button
        const node = document.createElement("li");
        const textNode = document.createTextNode(getValue()); // Task text
        let span = document.createElement("span"); // Delete button
        span.innerHTML = "\u00d7";
        node.appendChild(span);
        node.appendChild(textNode);
        listContainer.appendChild(node); // Add task to the list
    }
    inputBox.value = ""; // Clear the input box
    saveData(); // Save task list to local storage
}

// Function to mark a task as checked/unchecked
function markTask(e) {
    e.target.classList.toggle("checked"); // Toggle the "checked" class
}

// Function to delete a task
function deleteTask(e) {
    e.target.parentElement.remove(); // Remove the task element
}

// Function to get the value from the input box
function getValue() {
    const data = document.getElementById("input-box").value;
    return data;
}

// Function to save the task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display tasks from local storage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Show tasks from local storage when the page loads
showTask();


// Function to set the date and time on the webpage
function setDate() {
    const now = new Date();
    const year = now.getFullYear();
    const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    const day = now.getDate();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()];
    document.getElementById("date").innerText = day + " " + month.slice(0, 3) + ", " + dayOfWeek;
}
setDate();

// Function to validate a feedback form
function validateFeedBackForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    if (name === "" || email === "" || comment === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    return true;
}

// Function to validate a login form
function validateLoginForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both a username and a password.");
        return false;
    }

    return true;
}

//Timer variables
let timer;
let isRunning = false;

// Function to start the countdown timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    let display = document.getElementById('display');
    let time = display.innerText.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    timer = setInterval(function () {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        stopTimer();
      } else {
        if (seconds === 0) {
          seconds = 59;
          if (minutes === 0) {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          } else {
            minutes--;
          }
        } else {
          seconds--;
        }
        display.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
    }, 1000);
  }
}

// Function to stop the countdown timer
function stopTimer() {
  isRunning = false;
  clearInterval(timer);
}

// Function to reset the countdown timer
function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  document.getElementById('display').innerText = '00:00:00';
}

// Function to set the timer with user input
function setTimer() {
  if (!isRunning) {
    let inputTime = document.getElementById('inputTime').value;
    let timeArray = inputTime.split(':');
    if (timeArray.length === 3) {
      let hours = parseInt(timeArray[0]);
      let minutes = parseInt(timeArray[1]);
      let seconds = parseInt(timeArray[2]);
      if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
        document.getElementById('display').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
    }
  }
}

// Event listeners for timer control buttons
document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('set').addEventListener('click', setTimer);