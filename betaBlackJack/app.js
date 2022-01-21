const cpuPoint = document.querySelector(".cpu-point");
const openBtn = document.querySelector(".open-button");
const resetBtn = document.querySelector(".reset-button");
const userCard = document.querySelector(".user-cards");
const leftCard = document.querySelector(".left-card");
const rightCard = document.querySelector(".right-card");
const resultMsg = document.querySelector(".result-msg");
const leftCardPattern = document.querySelector(".left-card-pattern");
const leftCardNumber = document.querySelector(".left-card-number");
const leftCardPointInput = document.querySelector(".left-card-point");
const rightCardPattern = document.querySelector(".right-card-pattern");
const rightCardNumber = document.querySelector(".right-card-number");
const rightCardPointInput = document.querySelector(".right-card-point");
const userCardPointSum = document.querySelector(".user-point-sum");

// arr
const cardPatterns = ["♠", "◆", "♣", "♥"];
const cardNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function openCard() {
  leftCardPattern.innerText =
    cardPatterns[Math.floor(Math.random() * cardPatterns.length)];
  rightCardPattern.innerText =
    cardPatterns[Math.floor(Math.random() * cardPatterns.length)];

  leftCardNumber.innerText =
    cardNums[Math.floor(Math.random() * cardNums.length)];
  rightCardNumber.innerText =
    cardNums[Math.floor(Math.random() * cardNums.length)];

  leftCardPointInput.value = leftCardNumber.innerText;
  rightCardPointInput.value = rightCardNumber.innerText;

  leftCard.classList.add("inactive");
  rightCard.classList.add("inactive");
  openBtn.classList.add("inactive");

  userCardPointSum.value =
    +leftCardNumber.innerText + +rightCardNumber.innerText;
  cpuPoint.innerText = Math.ceil(Math.random() * 21);

  // comparison with cpu points
  const sum = +userCardPointSum.value;
  const cpuPoints = +cpuPoint.innerText;
  if (sum > 21) {
    resultMsg.value = "YOU DIE!";
  } else if (sum > cpuPoints && sum === 21) {
    resultMsg.value = "WOW! BLACK JACK!";
  } else if (sum > cpuPoints) {
    resultMsg.value = "YOU WIN!";
  } else if (sum < cpuPoints) {
    resultMsg.value = "YOU LOSE!";
  } else if (sum === cpuPoints) {
    resultMsg.value = "YOU DRAW!";
  }

  // txt color change
  if (leftCardPattern.innerText === "◆" || leftCardPattern.innerText === "♥") {
    leftCard.style.color = "red";
  } else if (
    rightCardPattern.innerText === "◆" ||
    rightCardPattern.innerText === "♥"
  ) {
    rightCard.style.color = "red";
  }
}

// addEvents
resetBtn.addEventListener("click", () => {
  location.reload();
});
openBtn.addEventListener("click", openCard);
