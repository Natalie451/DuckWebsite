/* Mock Lab Practical */
var realNameInput = document.getElementById("realName");
var duckNicknameInput = document.getElementById("duckNickname");
var confirmBtn = document.getElementById("confirmSelection");
var finalNicknameField = document.getElementById("finalNickname");
var nickNameFeedbackField = document.getElementById("nicknameFeedback");

//Event listener that makes the confirm button work.
//Whenever the the confirm button is clicked, the name entered
// in your name input and duck input all transfer to the final field.
confirmBtn.addEventListener("click", function () {
  var realName = realNameInput.value;
  var duckNickname = duckNicknameInput.value;
  finalNicknameField.value = realName + "" + duckNickname;
  validateNickname(realName, duckNickname);
});

//Validation rules for the name and nickname fields
// This function will check the mumber of characters and spaces.
//It will turn the text red if validation rules are broken.
function validateNickname(realName, duckNickname) {
  if (realName === "" || duckNickname === "") {
    nickNameFeedbackField.innerHTML =
      "Please fill in both your name and the duck nickname";
    nickNameFeedbackField.style.color = "red";
    return false;
  } else if (
    duckNickname.length < 4 ||
    duckNickname.indexOf(" ") !== -1 ||
    duckNickname.toLowerCase() === realName.toLowerCase()
  ) {
    nickNameFeedbackField.innerHTML =
      "Nickname must be 4+ characters, no spaces, and not the same as your real name";
    nickNameFeedbackField.style.color = "red";
    return false;
  } else {
    nickNameFeedbackField.innerHTML = "\u2714 Valid nickname";
    nickNameFeedbackField.style.color = "green";
    return true;
  }
}
