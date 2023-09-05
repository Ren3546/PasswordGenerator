// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let passLength = prompt("Enter how many characters you would like (between 8 and 125)");
  if (passLength >=8 && passLength<=125) {
    upper();
  }
  else {
    alert ('Please input a valid number')
  }
}

function upper() {
  let upperCase = prompt("Would you like any upper case characters? (yes or no)");
  if (upperCase === "yes") {
    upperCase = true;
    lower();
  }
  else if (upperCase === "no") {
    upperCase = false;
    lower();
  }
  else {
    alert ('Please enter yes or no')
  }
}

function lower() {
  let lowerCase = prompt("Would you like any lower case characters? (yes or no)");
  if (lowerCase === "yes") {
    lowerCase = true;
    spec();
  }
  else if (lowerCase === "no") {
    lowerCase = false;
    spec();
  }
  else {
    alert ('Please enter yes or no')
  }
}


