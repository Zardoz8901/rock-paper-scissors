// starting scores
let computerScore = 0
let playerScore = 0

const resultArray = [-1,0,1]

// player selection routed to the randomized result array
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        playerClick = resultArray[Math.floor(resultArray.length * Math.random())];
        playerResult =  (button.id) + " " + playerClick
        console.log(playerResult)
    });
});

 /* function gameResults(playerResult) {
    if (playerResult == 1) {
    let    document.createElement('div')

    }
}  */