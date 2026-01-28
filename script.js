// console.log("hello")

// function update_score(player) {
//   console.log(player);
// }
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(button.id);
  });
});
