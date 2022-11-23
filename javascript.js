let rockRegex = /rock/i;
let paperRegex = /paper/i;
let scissorsRegex = /scissors/i;

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();
  console.log('computer choice = ' + computerChoice);

  choices.textContent = playerChoice + ' | ' + computerChoice;

  let playerScore = getPlayerScore(playerChoice, computerChoice);
  if (playerScore > 0) {
    outcome.textContent = 'Nice';
  } else if (playerScore < 0) {
    outcome.textContent = 'better luck next time';
  } else {
    outcome.textContent = 'Draw';
  }

  totalPlayerScore += playerScore;
  score.textContent = "Score: " + totalPlayerScore.toString();

  if (totalPlayerScore >= 5) {
    hasGameEnded = true;
    score.textContent += " YOU WIN";
  } else if (totalPlayerScore <= -5) {
    hasGameEnded = true;
    score.textContent += " you lost. try again";
  }
}

function getPlayerScore(playerChoice, computerChoice) {
  if (playerChoice === 'rock') {
    if (computerChoice === 'rock') {
      return 0;
    } else if (computerChoice === 'paper') {
      return -1;
    } else if (computerChoice === 'scissors') {
      return 1;
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 1;
    } else if (computerChoice === 'paper') {
      return 0;
    } else if (computerChoice === 'scissors') {
      return -1;
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return -1;
    } else if (computerChoice === 'paper') {
      return 1;
    } else if (computerChoice === 'scissors') {
      return 0;
    }
  }
}

function parsePlayerInput(input) {
  let userChoice =  rockRegex.test(input) ? 'rock' :
                    paperRegex.test(input) ? 'paper' :
                    scissorsRegex.test(input) ? 'scissors' :
                    '';
  
  if (userChoice === '') {
    console.log("input should be 'rock', 'paper', or 'scissors'");
    return undefined;
  } else {
    console.log('detected user input = ' + userChoice);
    return userChoice;
  }
}

function getComputerChoice() {
  let rand = Math.random();

  if (rand < .33) {
    return 'rock';
  } else if (rand < .67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function onButtonClicked(e) {
  if (hasGameEnded) return;

  playRound(parsePlayerInput(e.target.value));
}

let totalPlayerScore = 0;
let hasGameEnded = false;

const buttons = document.querySelectorAll('input[type=button]');
buttons.forEach((btn) => btn.addEventListener('click', onButtonClicked));

const choices = document.querySelector('.choices');
const outcome = document.querySelector('.outcome');
const score = document.querySelector('.score');