// starting scores
let computerScore = 0
let playerScore = 0

const resultMatrix = [-1,0,1]

// player selection routed to the randomized result matrix
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        playerClick = resultMatrix[Math.floor(resultMatrix.length * Math.random())];
        playerResult =  (button.id) + " " + playerClick
        console.log(playerResult)
    });
});

 /* function gameResults(playerResult) {
    if (playerResult == 1) {
    let    document.createElement('div')

    }
}  */