// starting scores
let computerScore = 0
let playerScore = 0

// result array -1: player loss, 0: tie, 1: player victory
const resultArray = [-1,0,1]

// return all html buttons as a nodelist
const buttons = document.querySelectorAll('button');

// pass the button clicks to the gameLogic funtion
buttons.forEach((button) => {
button.addEventListener('click', () => {
    gameLogic(button);
    });
});

// give each button click a random number from the resultArray
// strip the name from the button
// concatenate the results
function gameLogic(button) {
    playerClick = resultArray[Math.floor(resultArray.length * Math.random())];
    buttonName = (button.name)
    playerResult =  buttonName + " " + playerClick
    console.log(playerResult)
}

// passsing function through the even is a big don don 
function div (playerClick) {
    if (playerClick == 0) {
    let div = document.createElement('div')
    document.body.appendChild(div)
    }
}