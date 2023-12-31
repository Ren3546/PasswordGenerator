// Assignment Code 
 var generateBtn = document.querySelector("#generate"); 
 
 var passLength;
 var upperCh="";
 var lowerCh="";
 var specChar = "";
 var num = "";
 var charArr = "";
 var res = "";
 var passwordText = "";
 // Write password to the #password input 
 function writePassword() { 
   var password = generatePassword();
 passwordText.value = password;
 }
 
 // Add event listener to generate button 
 generateBtn.addEventListener("click", writePassword);

//Initial prompt to ask for character length
 function generatePassword() {
   charArr = "";
   res = "";
   window.passLength = prompt("Enter how many characters you would like (between 8 and 125)"); 
   
   if (passLength >=8 && passLength<=125) {
     window.passLength = Number(passLength);
     upper(); 
   } 
   else if (passLength === null) {
     return;
   }
   else { 
     alert ('Please input a valid number') 
     generatePassword(); 
   } 
 } 

//upper case character prompt
 function upper() { 
   let upperCase = prompt("Would you like any upper case characters? (yes or no)"); 
   if (upperCase === "yes") { 
     window.upperCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
     window.charArr = window.upperCh;
     lower();
   } 
   else if (upperCase === "no") { 
     window.upperCh = "";
     lower();
   } 
   else { 
     alert ('Please enter yes or no') 
     upper(); 
   } 
 } 

//lower case character prompt
 function lower() { 
   let lowerCase = prompt("Would you like any lower case characters? (yes or no)"); 
   if (lowerCase === "yes") { 
     window.lowerCh = "abcdefghijklmnopqrstuvwxyz".split(" ");
     window.charArr = window.upperCh.concat(window.lowerCh);
     spec(); 
   } 
   else if (lowerCase === "no") { 
     window.lowerCh = "";
     spec();
   } 
   else { 
     alert ('Please enter yes or no') 
     lower(); 
   } 
 } 

//special character prompt
 function spec() { 
   let specCh = prompt("Would you like any special characters? (yes or no)") 
   if (specCh === "yes") { 
     window.specChar = "@#$_&-+()/*':;!?,.~`={}[]%<>".split("");
     window.charArr = window.charArr.concat(window.specChar);
     number(); 
   } 
   else if (specCh === "no") { 
     window.specChar = "";
     number();
   } 
   else { 
     alert ('Please enter yes or no'); 
     spec(); 
   } 
 } 

//number prompt
 function number() { 
   let numberCh = prompt("Would you like any numbers? (yes or no)") 
   if (numberCh === "yes") { 
     window.num = "0123456789".split("");
     window.charArr = window.charArr.concat(window.num)
     pass();
   } 
   else if (numberCh === "no") { 
     window.num = "";
     pass();
   } 
   else { 
     alert ('Please enter yes or no'); 
     number(); 
   } 
 }

//function paste password in the textbox
 function pass() {
  var x = document.getElementById("password"); 
  x.textContent = passGen();
 }

//function to generate the random string from the character arrays
 function passGen() {
  const text = window.charArr;
  let res = "";
  for (let i = 0; i < passLength; i++) {
    window.res += text[Math.floor(Math.random() * text.length)]
  }
  return window.res;
 }

//function to copy content to the user's clipboard
function myFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand('copy');
  alert("Copied the text: " + copyText.value);
}
 
 




 
