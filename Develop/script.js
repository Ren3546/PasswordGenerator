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