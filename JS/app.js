const set = document.querySelector("#set input");
const blockToRefresh = document.querySelector("#guess-form"); //form 전체를 선언해야함.
const guessNumber = document.querySelector("#guess-form input");
const h3 = document.querySelector("h3");
const chosen = document.querySelector("h3:first-child");
const yourResult = document.querySelector("h3:last-child");
const setValue = set.value;

function result(event) {
  event.preventDefault();
  const userNumber = parseInt(guessNumber.value); //value로 넘버를 읽힘
  const machineNumber = setRandomNumber();
  chosen.innerText = `Your chose: ${userNumber}, the machine chose: ${machineNumber}`;
  if (machineNumber < 0) {
    alert("Please set positive number");
    yourResult.classList.add("none");
    chosen.classList.add("none");
  } else if (userNumber >= setValue) {
    alert("Please follow the rule");
    yourResult.classList.add("none");
    chosen.classList.add("none");
  } else if (userNumber === machineNumber) {
    yourResult.innerText = "You Win!";
    yourResult.classList.remove("none");
    chosen.classList.remove("none");
  } else {
    yourResult.innerText = "You Lost T_T";
    yourResult.classList.remove("none");
    chosen.classList.remove("none");
  }
}

function setRandomNumber() {
  const randomResult = Math.floor(Math.random() * (setValue - 0 + 1) + 0);
  return randomResult;
}

blockToRefresh.addEventListener("submit", result);
