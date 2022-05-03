// starting scores
let computerScore = 0
let playerScore = 0

// result array -1: player loss, 0: tie, 1: player victory
const resultArray = [-1,0,1]

// return all html buttons as a nodelist
const buttons = document.querySelectorAll('button');

const div1 = document.createElement('div')

const p1 = document.createElement('p')

const p2 = document.createElement('p')

const playAgainButton = document.createElement('button')

// give each button click a random number from the resultArray
// strip the name from the button
// push score function
// push winCondition function
function pushGameLogic(button) {
    playerClick = resultArray[Math.floor(resultArray.length * Math.random())];
    buttonName = (button.name);
        trackScore(playerScore, computerScore);
        announceScore(playerClick);
        pushWinCondition();
}

// add points from playerClick to starting scores
function trackScore () {
    if (playerClick == 1) {
         playerScore += 1;
    } else if (playerClick == -1) {
         computerScore += 1;
    }
}

// create div with text for player and computer scores
function announceScore (playerClick) {
    if (playerClick == 0) {
        div1.textContent = 'Tie. Great minds think alike!'
            document.body.appendChild(div1)
        p1.textContent = `Player: ${playerScore} vs. Computer: ${computerScore}`
            document.body.appendChild(p1)
    } else if (playerClick == 1) {
        div1.textContent = 'You win!'
            document.body.appendChild(div1)
        p1.textContent = `Player: ${playerScore} vs. Computer: ${computerScore}`
            document.body.appendChild(p1)
    } else {
        div1.textContent = 'You lose!'
            document.body.appendChild(div1)
        p1.textContent = `Player: ${playerScore} vs. Computer: ${computerScore}`
            document.body.appendChild(p1)
    }
}

// if player or computer reaches 5 wins declare winner and call disable buttons
function pushWinCondition () {
    if (playerScore == 5) {
        p2.textContent = 'The game is yours!'
        document.body.appendChild(p2)
        disableButtons()
        playAgain()
    } else if (computerScore == 5) {
        p2.textContent = 'The game is lost!'
        document.body.appendChild(p2)
        disableButtons()
        playAgain()
    }
}

// disable buttons
function disableButtons() {
    buttons.forEach((button) => {
    button.disabled = true
    });
}

function playAgain() {
    playAgainButton.textContent = 'Play again ?';
    playAgainButton.classList.add('refresh-button')
    document.body.appendChild(playAgainButton)
        refresh()
}

function refresh () {
    refreshButton = document.querySelector('.refresh-button');
    refreshPage = () => {
        window.location.reload();
    }
    refreshButton.addEventListener('click', refreshPage)
}

// pass the button clicks to the gameLogic function 
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        pushGameLogic(button);
        });
    });
