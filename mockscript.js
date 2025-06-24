/* Mock Lab Practical */
var realNameInput = document.getElementById("realName");
var duckNicknameInput = document.getElementById("duckNickname");
var confirmBtn = document.getElementById("confirmSelection");
var finalNicknameField = document.getElementById("finalNickname");

//Event listener that makes the confirm button work.
//Whenever the the confirm button is clicked, the name entered
// in your name input and duck input all transfer to the final field.
confirmBtn.addEventListener("click", function () {
  var realName = realNameInput.value;
  var duckNickname = duckNicknameInput.value;
  finalNicknameField.value = realName + " " + duckNickname;
});
