// We declare variables to keep Score and Rounds

let humanScore = 0;
let computerScore = 0;
let round = 0;

// This function describes random choice of computer
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//This function describes choice from user. It formats input to lower case
function getHumanChoice() {
    let choice = prompt('Your turn:');
    return choice.toLowerCase();
}

//This function decides who wins in a round and updates Score
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        return 'Human wins ';
    } else {
        computerScore += 1;
        return 'Computer wins';
    }
}

//This function is a loop for 5 rounds. It gives CLI of the game and declare winner of the game
function playGame() {
    while (round<5) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        console.log('Round: ', round +1);
        console.log('Computer Choice: ', computerChoice);
        console.log('Human Choice: ', humanChoice);

        const result = playRound(humanChoice, computerChoice);
        console.log(result);

        round += 1;
    }
    
    if (round === 5) {
        console.log('Computer: ', computerScore, 'Human Score: ', humanScore)
    }
}

// Output our game
console.log(playGame());