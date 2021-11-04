
//function that will randomly return either 'Rock','Paper', or 'Scissors'.catch
//computer play
function computerPlay () {
  let compchoice = Math.floor(Math.random()*3 + 1);
  switch (compchoice) {
    case 1:
    return ('rock')
    break;
    case 2:
    return ('paper')
    break;
    case 3:
    return ('Scissors')
    break;
  }
}
//declare score variables
let playerScore = 0;
let comScore = 0;

//function for a round of gameplay
//prompt player to input rock, paper, or scissors then compare that with the randomly generated computerPlay()
//display results of the match up
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return ('Tie Game!');
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      playerScore++;
      return ('You Won! Rock beats Scissors!')
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
      playerScore++;
      return ('You Won! Paper beats Rock!')
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
      playerScore++;
      return ('You Won! Scissors beats Paper!')
    }
    if (playerSelection === 'rock' && computerSelection === 'paper') {
      comScore++;
      return ('You Lost! Paper beats Rock!')
    }
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
      comScore++;
      return ('You Lost! Scissors beats Paper')
    }
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
      comScore++;
      return ('You Lost! Rock beats Scissors!')
    }
  }

  if (playerScore === 5) {
    alert ('You Won! Play Again?')
  } else if (comScore === 5) {
    alert ('You Lost! Play Again?')
  }

const computerSelection = computerPlay();
const playerSelection = window.prompt('Rock... Paper... Scissors... Shoot! ')
playerSelection.toLowerCase();
