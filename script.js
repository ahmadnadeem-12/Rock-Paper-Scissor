const choices = document.querySelectorAll(".choice");
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const winnerText = document.getElementById("winner");

const options = ["rock", "paper", "scissors"];

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("data-choice");
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    userChoiceSpan.textContent = userChoice;
    computerChoiceSpan.textContent = computerChoice;
    checkWinner(userChoice, computerChoice);
  });
});

function checkWinner(user, computer) {
  if (user === computer) {
    winnerText.textContent = "It's a Draw!";
    winnerText.style.color = "orange";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    winnerText.textContent = "You Win! 🎉";
    winnerText.style.color = "lightgreen";
  } else {
    winnerText.textContent = "Computer Wins 😢";
    winnerText.style.color = "red";
  }
}
