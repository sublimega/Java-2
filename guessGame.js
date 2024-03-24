

//Get the number of attempts for the quiz
var attempts = 0;
    let maxAttempts = 4;
    let computerNumber;

    //Function for login
    function startGame() {
      var username = document.getElementById('username').value;
      var cohort = document.getElementById('cohort').value;

      //If username or cohort number is empty let the alert show "please fill in all fields"
      if (username.trim() === "" || cohort.trim() === "") {
        alert("Please fill in all fields.");
        return;
      }

      //after login let the login page disappear while the game appears
      document.getElementById('loginForm').style.display = "none";
      document.getElementById('game').style.display = "block";

      document.querySelector('h2').style.display = "none";
    }


    function checkGuess() {
      var username = document.getElementById('username').value;
      var cohort = document.getElementById('cohort').value;
      var userGuess = parseInt(document.getElementById('userGuess').value);
      var resultMessage = document.getElementById('result');
      var luckyNumber = document.getElementById('luckyNumber');

      if (attempts === 0) {
        
        computerNumber = Math.floor(    Math.random() * 21)    + 20;
        
      }
      

      if (attempts < maxAttempts) {
        attempts++;
        if (userGuess >= 20 && userGuess <= 40) {
          if (userGuess === computerNumber) {
            resultMessage.textContent = "Congratulations, " + username + " from Cohort " + cohort + "! You have won!";
          } else {
            resultMessage.textContent = "Sorry, " + username + " from Cohort " + cohort + ", try again.";
          }
        } else {
          resultMessage.textContent = "Please enter a number between 20 and 40.";
        }
      } else {
        resultMessage.textContent = "Sorry, " + username + " from Cohort " + cohort + ", you've reached the maximum number of attempts. Better luck next time!";
        //document.getElementById('userGuess').disabled = true;
        document.querySelector('button').disabled = true;
        document.querySelector("#userGuess").disabled = true;
        luckyNumber.textContent = "The lucky number was: " + computerNumber;
        luckyNumber.style.display = "block";
      }
    }


