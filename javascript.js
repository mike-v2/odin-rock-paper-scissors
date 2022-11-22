let rockRegex = /rock/i;
let paperRegex = /paper/i;
let scissorsRegex = /scissors/i;

function game() {
  let totalPlayerScore = 0;

  for (let i=0; i<5; i++) {
    let userChoice = undefined;
    while(userChoice === undefined) {
      userChoice = parsePlayerInput(prompt('Choose your next move wisely'));
    }

    let computerChoice = getComputerChoice();
    console.log('computer choice = ' + computerChoice);

    let playerScore = getPlayerScore(userChoice, computerChoice);
    if (playerScore > 0) {
      console.log('Nice');
    } else if (playerScore < 0) {
      console.log('better luck next time');
    } else {
      console.log('Draw');
    }

    totalPlayerScore += playerScore;

    console.log('player score = ' + totalPlayerScore);
  }

  if (totalPlayerScore > 0) {
    console.log("YOU WIN");
  } else if (totalPlayerScore < 0) {
    console.log("you lost. try again");
  } else {
    console.log("Draw");
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

game();