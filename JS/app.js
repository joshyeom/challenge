const guessForm = document.querySelector("#guess-form");
const set = document.querySelector("#set-form input");
const guessNumber = document.querySelector("#guess-form input");
const selectedNumber = document.querySelector("h3:first-child");
const result = document.querySelector("h3:last-child");

function play(event) {
  event.preventDefault();
  const setValue = parseInt(set.value);
  const userNumber = parseInt(guessNumber.value);
  const machineNumber = 1 + Math.floor(Math.random() * parseInt(setValue));
  if (setValue < 0) {
    alert("Please write positive number");
  } else if (userNumber > setValue) {
    alert("Please follow the rule");
  } else if (userNumber === machineNumber) {
    selectedNumber.innerText = `You chose ${userNumber}, the machine chose ${machineNumber}`;
    result.innerText = "You Win!";
  } else {
    selectedNumber.innerText = `You chose ${userNumber}, the machine chose ${machineNumber}`;
    result.innerText = "You Lose T_T";
  }
}

guessForm.addEventListener("submit", play);
