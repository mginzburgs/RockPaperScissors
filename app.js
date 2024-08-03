let resultText = document.querySelector(".result");

function getComputerChoice() {
  let rand = Math.random();
  if (rand >= 0.67) {
    return "rock";
  } else if (rand >= 0.34) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userInput = window.prompt("rock / paper / scissors");
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  }
  return Error("не корректные данные от пользователя");
}

let humanScore = 0;
let computerScore = 0;

function score() {
  return `
  human vs computer |  ${humanScore}:${computerScore}
  ${
    humanScore !== computerScore && humanScore < computerScore
      ? "YOU LOSE"
      : "YOU WIN"
  }
  `;
}

function playRound(h, c) {
  resultText.innerText = "";
  let human = h.toUpperCase();
  let computer = c.toUpperCase();

  if (human === computer) {
    resultText.innerText = "DRAW";

    return;
  }

  if (computer === "ROCK") {
    if (human === "PAPER") {
      resultText.innerText = "PAPER BEATS ROCK, YOU WIN !";
      return (humanScore = humanScore + 1);
    } else {
      resultText.innerText = "ROCK BEATS SCISSORS, YOU LOSE !";

      return (computerScore += 1);
    }
  } else if (computer === "PAPER") {
    if (human === "SCISSORS") {
      resultText.innerText = "SCISSORS BEAT PAPER, YOU WIN !";

      return (humanScore += 1);
    } else {
      resultText.innerText = "PAPER BEATS ROCK, YOU LOSE !";

      return (computerScore += 1);
    }
  } else if (computer === "SCISSORS") {
    if (human === "ROCK") {
      resultText.innerText = "ROCK BEATS SCISSORS, YOU WIN !";

      return (humanScore += 1);
    } else {
      resultText.innerText = "SCISSORS BEAT PAPER, YOU LOSE !";

      return (computerScore += 1);
    }
  }
}

function getWinner() {
  let hscore = humanScore;
  let cscore = computerScore;

  if (hscore >= 5 && hscore > cscore) {
    humanScore = 0;
    computerScore = 0;
    alert("YOU WIN");
  } else if (cscore >= 5 && cscore > hscore) {
    humanScore = 0;
    computerScore = 0;
    alert("YOU LOSE");
  }
}

function playGame() {
  playRound(getHumanChoice(), getComputerChoice());
  getWinner();
}

// elements

let humanShowScore = document.querySelector(
  ".game__score-left>.game__score-score"
);

let computerShowScore = document.querySelector(
  ".game__score-right>.game__score-score"
);

let buttons = document.querySelector(".game__choice-list");
buttons.addEventListener("click", (e) => {
  playRound(e.target.innerText, getComputerChoice());
  computerShowScore.innerText = computerScore;
  humanShowScore.innerText = humanScore;
  getWinner();
});
