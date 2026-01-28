// console.log("hello")

// function update_score(player) {
//   console.log(player);
// }
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
      console.log("Game Over")
    }
  });
});
