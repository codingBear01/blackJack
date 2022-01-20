const cpuPoint = document.querySelector(".cpu-point");
const openUserCardBtn = document.querySelector(".open-user-card-button");
const openBtn = document.querySelector(".open-button");
const dieBtn = document.querySelector(".die-button");
const resetBtn = document.querySelector(".reset-button");
const userCard = document.querySelector(".user-cards");
const leftCard = document.querySelector(".left-card");
const rightCard = document.querySelector(".right-card");
let leftCardPointInput = document.querySelector(".left-card-point");
let rightCardPointInput = document.querySelector(".right-card-point");
let userCardPointSum = document.querySelector(".user-point-sum");

// ----- button functions 및 cpu point
function handleOpenEvent() {
  cpuPoint.innerText = Math.ceil(Math.random() * 21);
} // openBtn click 시 math random값 cpu 점수로 부여

function handleDieEvent() {
  const checkDie = confirm("정말로 DIE를 선택하시겠습니까?");
  if (checkDie) {
    location.reload();
  } // confirm창의 yes click 시 page reload
}

openBtn.addEventListener("click", handleOpenEvent);
dieBtn.addEventListener("click", handleDieEvent);
resetBtn.addEventListener("click", () => {
  location.reload();
});

/* 
card div 클릭 시
- 비덱 이미지 display: none
- 유저 점수값 랜덤 받아서 출력 * 중복 금지
*/

// ----- open userCard & user point & pattern & num input & num sum
const cardPatterns = ["♠", "◆", "♣", "♥"];
const cardNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let leftCardPattern = document.querySelector(".left-card-pattern");
let leftCardNumber = document.querySelector(".left-card-number");
let rightCardPattern = document.querySelector(".right-card-pattern");
let rightCardNumber = document.querySelector(".right-card-number");

function openUserCard() {
  leftCardPattern.innerText =
    cardPatterns[Math.floor(Math.random() * cardPatterns.length)];

  leftCardNumber.innerText =
    cardNums[Math.floor(Math.random() * cardNums.length)];

  leftCardPointInput.value = leftCardNumber.innerText;

  leftCard.classList.add("inactive");

  rightCardPattern.innerText =
    cardPatterns[Math.floor(Math.random() * cardPatterns.length)];

  rightCardNumber.innerHTML =
    cardNums[Math.floor(Math.random() * cardNums.length)];

  rightCardPointInput.value = rightCardNumber.innerText;

  rightCard.classList.add("inactive");
}

console.log(rightCardPointInput.value);

openUserCardBtn.addEventListener("click", openUserCard);

// 아니 그니까 랜덤해서 나온 값이 저장이 안 되고 clg 돌리면 왜 자꾸 빈칸으로 나오는 건지 도무지 알 수가 없다..!!!

// 앞으로 할 일
// - left right 값 더해서 cpu 값이랑 비교하고 win lose 결과값 반환
// - 11,12,13 -> JKQ로 처리
// - css 디자인

// return game result

// if(cpuPoint.innerText > )

/*// ----- cardArr 만들기
let cardPatterns = ["♠", "◆", "♣", "♥"];
let cardDeck = [];

for (let i = 0; i <= 12; i++) {
  for (let j = 0; j < cardPatterns.length; j++) {
    cardDeck.push(`${cardPatterns[j]} ${i + 1}`);
  }
}

// cardDeck Idx 0~3 숫자 1 떼고 무늬만 남기기
for (let i = 0; i < 4; i++) {
  cardDeck[i] = cardPatterns[i];
}

// 10이상 카드 JQK로 변경
for (let i = 36; i < 52; i++) {
  console.log(i);

  if (i > 39 && i < 44) {
    cardDeck[i] = cardDeck[i][0] + " J";
  } else if (i > 43 && i < 48) {
    cardDeck[i] = cardDeck[i][0] + " Q";
  } else if (i > 47 && i < 52) {
    cardDeck[i] = cardDeck[i][0] + " K";
  }
}

console.log(cardDeck);
console.log(cardDeck[Math.floor(Math.random() * cardDeck.length)])*/
