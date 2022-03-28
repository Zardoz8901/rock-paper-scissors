let computerScore = 0
let playerScore = 0

const symbolArray = ['rock','paper','scissor'];

function computerPlay() {
    return computerSymbol = symbolArray[Math.floor(Math.random()*symbolArray.length)]
} 

function gameRound(playerPrompt, computerSymbol) {
    playerPrompt = prompt('Rock, Paper, Scissor, Shoot!').toLowerCase();
    computerSymbol = computerPlay()
    if (playerPrompt == computerSymbol) {
        alert('Great minds think alike!');
        alert('Tie!');
    } else if (playerPrompt == 'rock' && computerSymbol == 'scissor') {
        playerScore += 1
        alert('Rock beats Scissor!');
    } else if (playerPrompt == 'rock' && computerSymbol == 'paper') {
        computerScore += 1
        alert('Paper beats Rock!');
    } else if (playerPrompt == 'scissor' && computerSymbol == 'paper') {
        playerScore += 1
        alert('Scissor beats Paper!');
    } else if (playerPrompt == 'scissor' && computerSymbol == 'rock') {
        computerScore += 1
        alert('Rock beats Scissor!');
    } else if (playerPrompt == 'paper' && computerSymbol == 'rock') {
        playerScore += 1
        alert('Paper beats Rock!');
    } else if (playerPrompt == 'paper' && computerSymbol == 'scissor') {
        computerScore += 1
        alert('Scissor beats Paper!');
    } else {
        alert('Try Again!');
    }
    console.log(computerSymbol)
    alert('Player: ' +playerScore + ' to' + ' Computer: ' +computerScore);
    if (playerScore == 3) {
        alert('You are the winner!')
    } else if (computerScore == 3) {
        alert('You are the loser!')
    }
}

function game(gameRound) {
    while (playerScore < 3 && computerScore < 3) {
    gameRound()
    }
}


if (playerScore == 3) {
    alert('You are the winner!')
} else if (computerScore == 3) {
    alert('You are the loser!')
}

console.log(game(gameRound))