var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:


  switch(currentTab){
    case 0:
      if(!/^[a-zA-Z]+$/.test(y[0].value) || y[0].value==""){
        y[0].classList.add("invalid");
        valid=false;
        alert('First name is incorrect')
      }
      if(!/^[a-zA-Z]+$/.test(y[1].value) || y[1].value==""){
        y[1].classList.add("invalid");
        valid=false;
        alert('Last name is incorrect')
      }
      break;
      case 1:
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(y[0].value) || y[0].value === "") {
          y[0].classList.add("invalid"); // Use classList.add to add the "invalid" class
          valid = false;
          alert('Email is incorrect');
        } else {
          y[0].classList.remove("invalid"); // Remove the "invalid" class if the email is correct
        }
      
        if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(y[1].value) || y[1].value === "") {
          y[1].classList.add("invalid"); // Use classList.add to add the "invalid" class
          valid = false;
          alert('Phone number is incorrect');
        } else {
          y[1].classList.remove("invalid"); // Remove the "invalid" class if the phone number is correct
        }
        break;
      case 2:
        if(!/^([1-9]|[1-2][0-9]|3[0-1])/.test(y[0].value) || y[0].value==""){
          y[0].classList.add("invalid"); // Use classList.add to add the "invalid" class
          valid = false;
          alert('Day number is incorrect');
        } else {
          y[0].classList.remove("invalid"); // Remove the "invalid" class if the email is correct
        }
        if (!/^([1-9]|1[0-2])$/.test(y[1].value) || y[1].value === "") {
          y[1].classList.add("invalid"); // Use classList.add to add the "invalid" class
          valid = false;
          alert('Month number is incorrect');
        } else {
          y[1].classList.remove("invalid"); // Remove the "invalid" class if the phone number is correct
        }
        if (!/\d{4}$/.test(y[2].value) || y[2].value === "") {
          y[2].classList.add("invalid"); // Use classList.add to add the "invalid" class
          valid = false;
          alert('Year number is incorrect');
        } else {
          y[2].classList.remove("invalid"); // Remove the "invalid" class if the phone number is correct
        }
        break;
        case 3:
          if(!/^[a-zA-Z][a-zA-Z0-9]*$/.test(y[0].value) || y[0].value==""){
            y[0].classList.add("invalid"); // Use classList.add to add the "invalid" class
            valid = false;
            alert('Username must have any symbols');
          } else {
            y[0].classList.remove("invalid"); // Remove the "invalid" class if the email is correct
          }
          if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(y[1].value) || y[1].value==""){
            y[1].classList.add("invalid"); // Use classList.add to add the "invalid" class
            valid = false;
            alert('Password must have more than 8 symbols');
          } else {
            y[1].classList.remove("invalid"); // Remove the "invalid" class if the email is correct
          }
  
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}



