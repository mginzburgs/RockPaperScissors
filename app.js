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
  let human = h.toUpperCase();
  let computer = c.toUpperCase();

  if (human === computer) {
    console.log(`"DRAW"
  ${score()}`);

    return;
  }

  if (computer === "ROCK") {
    if (human === "PAPER") {
      console.log(`"PAPER BEATS ROCK, YOU WIN !"
          ${score()}`);
      return (humanScore = humanScore + 1);
    } else {
      console.log(`"ROCK BEATS SCISSORS, YOU LOSE"
              ${score()}`);

      return (computerScore += 1);
    }
  } else if (computer === "PAPER") {
    if (human === "SCISSORS") {
      console.log(`"SCISSORS BEAT PAPER, YOU WIN !"
              ${score()}`);

      return (humanScore += 1);
    } else {
      console.log(`"PAPER BEATS ROCK, YOU LOSE !"
              ${score()}`);

      return (computerScore += 1);
    }
  } else if (computer === "SCISSORS") {
    if (human === "ROCK") {
      console.log(`"ROCK BEATS SCISSORS, YOU WIN !"
              ${score()}`);

      return (humanScore += 1);
    } else {
      console.log(`"SCISSORS BEAT PAPER, YOU LOSE !"
              ${score()}`);

      return (computerScore += 1);
    }
  }
}

function playGame(times) {
  for (let i = 0; i < times; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame(10);
