const computerPlay = () => {
  const computerRoll = Math.floor(Math.random() * 3);
  switch (computerRoll) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return outcomes.lose;
    } else if (computerSelection === "rock") {
      total--;
      return outcomes.tie;
    } else {
      userScore++;
      return outcomes.win;
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "paper") {
      userScore++;
      return outcomes.win;
    } else if (computerSelection === "rock") {
      computerScore++;
      return outcomes.lose;
    } else {
      total--;
      return outcomes.tie;
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "paper") {
      total--;
      return outcomes.tie;
    } else if (computerSelection === "rock") {
      userScore++;
      return outcomes.win;
    } else {
      computerScore++;
      return outcomes.lose;
    }
  }
};

let userScore = parseInt(0);
let computerScore = parseInt(0);
let total = 0;
const outcomes = {
  win: "You win",
  lose: "You lose",
  tie: "It is a tie",
};

const play = () => {
  let playerSelection = prompt("Pick a move");
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  //   Player information
  console.log(`Total games: ${total}`);
  console.log(`Your score: ${userScore}`);
  console.log(`Computer score: ${computerScore}`);
  //   Adds to total games played
  total++;

  if (total !== 5) {
    play();
  } else {
    console.log(
      `Game Over! You Score is ${userScore}! Computer Score is ${computerScore}`
    );
  }
};

play();

const playerSelection = "Rock";
const computerSelection = computerPlay();

const playGame = () => {
  const playerScore = 0;
  const computerScore = 0;
  const games = [1, 2, 3, 4, 5];
  games.map((game) => {
    console.log(playRound(playerSelection, computerSelection));
  });
};
console.log(playRound(playerSelection, computerSelection));
console.log(playGame());
