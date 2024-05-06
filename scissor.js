let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListner("click", () => {
    console.log("Choice was clicked");
  });
});




























