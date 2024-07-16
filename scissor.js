let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const msg_p = document.getElementById("msg");
const choices = document.querySelectorAll(".choice");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};

const convertToWord = (choice) => {
  if (choice === "rock") return "Rock";
  if (choice === "paper") return "Paper";
  return "Scissors";
};

const win = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  msg_p.innerHTML = `You win! ${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}.`;
};

const lose = (userChoice, computerChoice) => {
  compScore++;
  compScore_span.innerHTML = compScore;
  msg_p.innerHTML = `You lose! ${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}.`;
};

const draw = (userChoice, computerChoice) => {
  msg_p.innerHTML = `It's a draw! Both chose ${convertToWord(userChoice)}.`;
};

const game = (userChoice) => {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    game(choice.id);
  });
});





























