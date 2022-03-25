let computerScore = 0
let playerScore = 0

const symbolArray = ['rock','paper','scissor'];

function computerPlay() {
    return computerSymbol = symbolArray[Math.floor(Math.random()*symbolArray.length)]
}   

console.log(computerPlay())

let playerPrompt= prompt('Rock, Paper, Scissors, Shoot!').toLowerCase();

console.log(playerPrompt)

function gameRound (playerDraw, computerDraw) {
    if (playerPrompt == computerSymbol) {
        alert('Great minds think alike!');
        alert('Tie!');
    } else if (playerPrompt == 'rock' && computerSymbol == 'scissor') {
        alert('Rock beats Scissor!');
        alert('You Win!');
    } else if (playerPrompt == 'rock' && computerSymbol == 'paper') {
        alert('Paper beats Rock!');
        alert('You Lose!');
    } else if (playerPrompt == 'scissor' && computerSymbol == 'paper') {
        alert('Scissor beats Paper!');
        alert('You Win!');
    } else if (playerPrompt == 'scissor' && computerSymbol == 'rock') {
        alert('Rock beats Scissor!');
        alert('You Lose!');
    } else if (playerPrompt == 'paper' && computerSymbol == 'rock') {
        alert('Paper beats Rock!');
        alert('You Win!');
    } else if (playerPrompt == 'paper' && computerSymbol == 'scissor') {
        alert('Scissor beats Paper!');
        alert('You Lose!');
    } else {
        alert('Try Again!');
    }
}

function game(gameRound) {

}

console.log(gameRound())