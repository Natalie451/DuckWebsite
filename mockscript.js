/* Mock Lab Practical */
var realNameInput = document.getElementById("realName");
var duckNicknameInput = document.getElementById("duckNickname");
var confirmBtn = document.getElementById("confirmSelection");
var finalNicknameField = document.getElementById("finalNickname");
var nickNameFeedbackField = document.getElementById("nicknameFeedback");

//Flag
let confirmed = false;

//This code will update the realName input field automatically while the user is typing.
realNameInput.addEventListener("input", function () {
  var realName = realNameInput.value;
  var duckNickname = duckNicknameInput.value;
  finalNicknameField.value = realName + "_" + duckNickname;
  validateNickname(realName, duckNickname);
});

//This code will update the duck nickname input field automatically while the user is typing.
duckNicknameInput.addEventListener("input", function () {
  var realName = realNameInput.value;
  var duckNickname = duckNicknameInput.value;
  finalNicknameField.value = realName + "_" + duckNickname;
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

//Duck image variables
//Even listener is used to add a green border(selected) around
//the chosen duck image when you click it
//The clearSelected() function clears the border around the other duck images once its clicked
var duck1 = document.getElementById("duck1");
var duck2 = document.getElementById("duck2");
var duck3 = document.getElementById("duck3");

duck1.addEventListener("click", function () {
  clearSelected();
  duck1.classList.add("selected");
});

duck2.addEventListener("click", function () {
  clearSelected();
  duck2.classList.add("selected");
});

duck3.addEventListener("click", function () {
  clearSelected();
  duck3.classList.add("selected");
});

function clearSelected() {
  duck1.classList.remove("selected");
  duck2.classList.remove("selected");
  duck3.classList.remove("selected");
}

function getSelectedDuckId() {
  if (duck1.classList.contains("selected")) {
    return duck1.id;
  } else if (duck2.classList.contains("selected")) {
    return duck2.id;
  } else if (duck3.classList.contains("selected")) {
    return duck3.id;
  } else {
    return null;
  }
}

var profileImg = document.getElementById("selectedDuck");

//Event listener that makes the confirm button work.
//Whenever the the confirm button is clicked, the name entered
// in your name input and duck input all transfer to the final field.
confirmBtn.addEventListener("click", function () {
  var selectedDuckId = getSelectedDuckId();

  if (!selectedDuckId) {
    nickNameFeedbackField.innerHTML = "Please select a duck";
    nickNameFeedbackField.style.color = "red";
    return;
  }

  var realName = realNameInput.value;
  var duckNickname = duckNicknameInput.value;
  finalNicknameField.value = realName + "_" + duckNickname;
  validateNickname(realName, duckNickname);

  //This code brings the chosen duck image to the main card
  var selectedDuckElement = document.getElementById(selectedDuckId);
  profileImg.src = selectedDuckElement.src;

  confirmed = true;
});
