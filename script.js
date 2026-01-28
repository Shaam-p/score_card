// console.log("hello")

// function update_score(player) {
//   console.log(player);
// }
// update and increment teh live score counter with buttons.

const buttons = document.querySelectorAll(".buttons button");

const scoreA = document.getElementById("scoreA");
const scoreB = document.getElementById("scoreB");
const max_score = 21;

let countA = 0;
let countB = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // console.log(button.id);
    if (button.id === "A" && countA < max_score) {
      countA += 1;
      scoreA.value = countA;
    }

    if (button.id === "B" && countB < max_score) {
      countB += 1;
      scoreB.value = countB;
    }
    if (countA === MAX_SCORE || countB === MAX_SCORE){
      buttons.forEach(btn => btn.disabled = true);
    }
  });
});

//new-set button to display previous set scores and reset the live score counter.

const nextSetBtn = document.getElementById("next_set");
const setScore1 = document.getElementById("set_score1");
const setScore2 = document.getElementById("set_score2");

let setCount = 0;

nextSetBtn.addEventListener("click", function () {
  const setResult = `${countA}-${countB}`;

  if (setCount === 0) {
    setScore1.value = setResult;
  } else if (setCount === 1) {
    setScore2.value = setResult;
  }

  setCount += 1;

  countA = 0;
  countB = 0;
  scoreA.value = 0;
  scoreB.value = 0;

  buttons.forEach(btn => btn.disabled = false);
});
