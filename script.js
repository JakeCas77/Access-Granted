// Password Structure

var characterLength = 8;
var mustInclude;
var choiceArr;
var specialCharArr = ['<','>','?','`','~','!','@','#','$','%','^','&','*','(',')'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var numberArr = ['0','1','2','3','4','5','6','7','8','9'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}

//  Password that is randomly generated
function generatePassword() {
  var password = "";
  var randomIndex;


  if (mustInclude.lowerCase) {
    randomIndex = Math.floor(Math.random() * lowerCaseArr.length);
    password += lowerCaseArr[randomIndex];
  }

  if (mustInclude.upperCase) {
    randomIndex = Math.floor(Math.random() * upperCaseArr.length);
    password += upperCaseArr[randomIndex];
  }

  if (mustInclude.numbers) {
    randomIndex = Math.floor(Math.random() * numberArr.length);
    password += numberArr[randomIndex];
  }

  if (mustInclude.specialChar) {
    randomIndex = Math.floor(Math.random() * specialCharArr.length);
    password += specialCharArr[randomIndex];
  }

  
  var remainingPasswordNum = characterLength - password.length;

  for(var i = 0; i < remainingPasswordNum; i++) {
    randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
   return password;
}




// Parameters for correct password
function getPrompts(){
  characterLength = parseInt(prompt("Hello sir or madame. How many characters would you like your password to be? (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length not sufficient. Try again.");
    return false;
  }

  // Suggested by Tutor
  // mustInclude to track guaranteed char in the password
  // This is to also clear and reset the variables when pressing the button again
  choiceArr = [];
  mustInclude = {
    specialChar: false,
    lowerCase: false,
    numbers: false,
    upperCase: false
  };

  if (confirm("Would you like lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
      mustInclude.lowerCase = true;
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
    mustInclude.upperCase = true;
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
    mustInclude.specialChar = true;
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
    mustInclude.numbers = true;
  }
  return true;
}


