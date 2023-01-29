'use strict'

function rollDice() {
    console.log("rollDice")
    const player = whoIsActive()
    dieA = Math.floor(Math.random() * 6) + 1
    dieB = Math.floor(Math.random() * 6) + 1
    console.log("dieA", dieA)
    console.log("dieB", dieB)
    player.dice = [dieA, dieB]
    setDiceStateUI(player.dice) // set UI
    console.log("dieRolls", dieRolls)
}

function triggerMsgUI() {
    console.log("triggerEventMsgUI")
    // UI Update
    // maybe Double Click onHold = pause game = save to local storage
    // active player message
    // winner message => active win // passive win (other player loses)
    const player = whoIsActive()

    switch(player.eventMsg) {
        case player.isDoubleSixes:
            player.eventMsg.textContent = "You rolled a double sixes! You lose your round score :/"; 
            break;
        case isWinner:
            player.eventMsg.textContent = "You win!";
            player1 === whoIsActive() ? player2.EventMsg.textContent = "Passed the target score :(" : player2.EventMsg.textContent = "Passed the target score :(";
            break;
        case player.isMustRollSixes:
            player.eventMsg.textContent = `You can't pass 100, you have ${avoidAutoLose} chances to roll double six and reset your round score)`;
            break;
        case player.isBetterHold:
            player.eventMsg.textContent = "You'll win the game if you hold now";
            break;
        default:
            "";
    }

    console.log("triggerEventMsgUI", player1.EventMsg, player2.EventMsg)
}

function setDiceStateUI(dice) {
    console.log("setDiceStateUI", dice)
    dieUIA.setAttribute("src", `./assets/images/dice-${dice[0]}.png`)
    dieUIB.setAttribute("src", `./assets/images/dice-${dice[1]}.png`)
}

function hold() {
    console.log("hold")
    whoIsActive().isHold = true
    setRoundScores()
}

function whoIsActive() {
    return game.activePlayer
}

const player = {
    name: "Player 1", // function setPlayerName() => set the player name
    score: 0,   // function setPlayerScore() => set the player score
    roundScore: 0,  // function setRoundScore() => set the round score
    isActive: false, // function setActivePlayer() => set the active player
    isWinner: false, // function checkWinner() => check if the player score is greater than the target score    
    isHold: false, // function hold() => add the round score to the global score
    isDoubleSixes: false, // function checkDoubleSixes() => check if the player rolls a double six
    playerDice: [1, 1], // function rollDice() => generate a random number between 1 and 6
    avoidAutoLose : 3,
    eventMsg: "", // function triggerEventMsg() => game end, 2 sixes
    isMustRollSixes: false, //if player round score passed target score
    isBetterHold: false,

}

const game = {
    targetScore: 100,
    // function setTargetScore() => set the target score
    // isGamePlaying: true, // function init() => set the gamePlaying to true
    // if stop without meets end condition = pause and save to local storage
    isEndGame: false,
    activePlayer: player,
    // function checkWinner() => check if the player score is equal to the target score
    // localStorage for pausing a gme
    // isRoundEnd: false // function checkDoubleSixes() => check if the player rolls a double six OR click the hold button

}
function isGameEnd() {
    const player = game.activePlayer
    if (player.score >= game.targetScore) {
        if (player.score === game.targetScore) {
            player.isWinner = true
        } else {
            player.isWinner = false
        }
        game.isEndGame = true
    }
}


//variables
const welcomeDisplay = document.getElementById("container_welcome")
const targetScore = document.getElementById("target-score")
const startGameBtn = document.getElementById("btn-start-game")
const newGameBtn = document.getElementById("btn-new-game")
const rollDiceBtn = document.getElementById("btn-roll_dice")
const holdBtn = document.getElementById("btn-hold")
const player1Display = document.getElementById("container_player1")
const player2Display = document.getElementById("container_player2")
const player1Name = document.getElementById("player1-name")
const player2Name = document.getElementById("player2-name")
const player1MainScore = document.getElementById("player1-main-score")
const player2MainScore = document.getElementById("player2-main-score")
const player1RoundScore = document.getElementById("player1-round-score")
const player2RoundScore = document.getElementById("player2-round-score")
const roundScoreUI = document.querySelector(".round-score")

const dieUIA = document.querySelector(".die")
const dieUIB = document.querySelector(".die")
const player1 = {}
const player2 = {}
const isFirstGame = true


//functions
function init() {

    // local storage data if game only paused or stop?
    // give the user to choose to continue or start a new game

    // player1.name = setPlayerName()
    // player2.name = setPlayerName()
    player1.score = 0
    player2.score = 0
    player1.roundScore = 0
    player2.roundScore = 0
    player1.isActive = setActivePlayer()
    player2.isActive = setActivePlayer()
    console.log("init player1", player1)
    console.log("init player2", player2)
    // player1.diceA = rollDice()
    // player1.diceB = rollDice()
    // player2.diceA = rollDice()
    // player2.diceB = rollDice()
    // player1.EventMsg = triggerEventMsg()
    // player2.EventMsg = triggerEventMsg()
}
// buttons event
targetScore.addEventListener("change", function () {
    let checkTargetScore = document.getElementById("target-score").value < 1 ?
        1 : document.getElementById("target-score").value
    console.log("targetScore event", checkTargetScore)
    console.log("game.isGamePlaying", game.isGamePlaying)

    // RegExp(/^[0-9]+$/).test(checkTargetScore) ? targetScore.value = checkTargetScore : targetScore.value = 100
    // console.log("afterRegEx", checkTargetScore)
    game.targetScore = checkTargetScore
})

// function stopGame(){
//     game.isGamePlaying = false
//     console.log("stopGame event", targetScore.value)
// }

startGameBtn.addEventListener("click", function () {
    setVisibility(welcomeDisplay)
    console.log("startGame event", game.isGamePlaying)
})

newGameBtn.addEventListener("click", function () {
    init()
    console.log("newGame event", targetScore.value)
})

rollDiceBtn.addEventListener("click", function () {
    rollDice()
    console.log("rollDice event", targetScore.value)
})

holdBtn.addEventListener("click", function () {
        hold()
        // hold => update scores && checkWinner => setActivePlayer   
    console.log("hold event", targetScore.value)
})

function setVisibility(UIElement) {
    if (!UIElement.getAttribute("class").includes("visible")) {
        UIElement.classList.add("visible")
    } else {
        UIElement.classList.toggle("visible")
    }
}

// while (!game.isEndGame) {
    console.log("in while")

    init()
    

    // set target score
    // set player names
    // set player scores
    // set active player
    // new game
    // roll dice
    // hold
    // check if the hold is for purpose of "pass" during game or "hold" to save the score
    // (paused / stop game)
    // check if the player won the game
    // set the round score of the active player to 0
    // set the active player to the next player}

    if (game.isEndGame) {
        console.log("in while_isEndGame")
        // checkWinner()
        player.score >= game.targetScore ? player.isWinner = true : player.isWinner = false
        // triggerEventMsg()
        // break;
    }
// }

console.log("OUT while")


// function setPlayerName(number){
//     let playerName = document.getElementById(`player${number}-name`).value
//     return playerName
// }


function setDoubleSixes() {
    console.log("setDoubleSixes")
    const player = whoIsActive()
    player.isDoubleSixes = true
    player.roundScore = 0
    triggerMsgUI()
    game.activePlayer = setActivePlayer()
}

// function checkWinner() {
//     console.log("checkWinner")
//     const player = whoIsActive()
//     if (player.score >= game.targetScore) {
//         player.isWinner = true
//         game.isEndGame = true
//     }
// }

// separate between global score and round score
// function setScores() {
//     console.log("setScores")
//     const player = whoIsActive()
//     const rollResult = player.dice[0] + player.dice[1]
//     console.log("setScores_rollResult", rollResult)
//     if (rollResult === 12) {
//         setDoubleSixes()
//     } else if (!player.isHold) {
//         // set round score
//         player.roundScore += dieRolls
//         isGameEnd()
//         player.isHold = false
//         console.log("setScores_round-score", player.roundScore)
//     } else if (player.roundScore > 0) {
//         // set global score
//         player.score += player.roundScore
//         isGameEnd()
//         player.roundScore = 0
//         player.isHold = false
//         console.log("setScores_isHold_score", player.score)
//         setActivePlayer()
//     } else {
//         setActivePlayer()
//     }
// }

function setRoundScore() {
    console.log("setRoundScores")
    const player = whoIsActive()
    const rollResult = player.dice[0] + player.dice[1]
    console.log("setScores_rollResult", rollResult)
    if (rollResult === 12) {
        setDoubleSixes()
    } else if (!player.isHold) {
        player.roundScore += rollResult
        if (player.roundScore + player.score >= 100) {
            if(player.roundScore + player.score > 100){

                triggerEventMsg("You can't pass 100, you have 3 chances to roll double sixes and reset your round score")
            } else {
                triggerEventMsg("You'll win the game if you hold")
            }
        }
        setRoundScoreUI(player)
        isGameEnd()
        console.log("setScores_round-score", player.roundScore)
    } else {
        setMainScores(player)
    }
    // IF PASS WITHOUT ROLL - MESSAGE YOU MUST ROLL AT LEAST ONCE
}

function setMainScores(player) {
    console.log("setMainScores, isHold", player.isHold)
        player.score += player.roundScore
        isGameEnd()
        player.roundScore = 0
        setMainScoresUI(player)
        console.log("setScores_isHold_score", player.score)
    }
    
function setRoundScoreUI(player){
    console.log("setRoundScoreUI")
    roundScoreUI.textContent = player.roundScore
}

function setMainScoresUI(player){
    console.log("setMainScoresUI")
    player.roundScore.textContent = 0
    player.scoreUI.textContent = player.score
    setActivePlayer()
}


function setActivePlayer() {
    console.log("setActivePlayer", player1.isActive, player2.isActive)
    // first time random 
    if (isFirstGame) {
        isFirstGame = false
        let random = Math.floor(Math.random() * 2) + 1
        console.log("random", random)
        if (random === 1) {
            player1.isActive = true
            player2.isActive = false
            game.activePlayer = player1
        } else {
            player1.isActive = false
            player2.isActive = true
            game.activePlayer = player2
        }
    } else {
        if (player1.isActive) {
            player1.isActive = false
            player2.isActive = true
            game.activePlayer = player2
            player.isHold = false
            player.eventMsg = ""
        } else {
            player1.isActive = true
            player2.isActive = false
            game.activePlayer = player1
            player.isHold = false
            player.eventMsg = ""
        }
        setActivePlayerUI()
    }
}

    function setActivePlayerUI() {
        console.log("setActivePlayerUI, p1, p2", player1.isActive, player2.isActive)
        if (player1.getAttribute("class").includes("active") && player2.getAttribute("class").includes("active")) {
            player1.classList.toggle("active")
            player2.classList.toggle("active")
        } else {
            player1.classList.add("active")
            player2.classList.add("active")
        }
    }



    // set UI


// localStorage  - last dice throw state
// pause event - in the middle of which action allow and disallow





// function const displayUI = {
    // set the player name => function setPlayerNameUI()
    // set the player score => function setPlayerScoreUI()
    // set the round score => function setRoundScoreUI()
    // set the active player => function setActivePlayerUI()
    // set the target score => function setTargetScoreUI()
    // set the dice image => function setDiceImageUI()
    // set the game message => function setEventMsgUI()
    // set the game state => function setGameStateUI() => active, inactive (paused), end
    // set the dice state => function setDiceStateUI() => active, inactive
    // set the button state => function setButtonStateUI() => active, inactive


// functions const gameLogic = {
    // function init() => set all the variables to 0 => cleanup   => set the gamePlaying to true
    // function setTargetScore() => set the target score
    // function setPlayerName() => set the player names
    // function setPlayerScore() => set the player scores
    // function setActivePlayer() => set the active player
    // function newGame() => set the gamePlaying to true
    // function rollDice() => generate a random number between 1 and 6
    // function hold() => add the round score to the global score
    // function checkWinner() => check if the player won the game
    // function checkDoubleSixes() => check if the player rolls a double six
    // function setRoundScore() => set the round score of the active player to 0
    // function setActivePlayer() => set the active player to the next player

// event listeners :
// event for initializing a game and cleaning up
// event for starting a game and a new game
// event for rolling the dice and generating a random number between 1 and 6
// event for holding the score and adding the round score to the global score
// event for setting the target score or default target score of 100
// event for setting the player names or default player1 and player2

// variables
// let targetScore = 100
// let score = [0, 0] => [player1Score, player2Score]
// let roundScore = 0 => roundScore of the active player
// let activePlayer => 1 => player1, 2 => player2
// let gamePlaying = true
// let player1Name = "Player 1"
// let player2Name = "Player 2"
// let targetScore = document.getElementById("targetScore").value
// let diceA = 0
// let diceB = 0
// let startGameBtn = document.getElementById("startGame")
// let newGameBtn = document.getElementById("newGame")
// let rollDiceBtn = document.getElementById("rollDice")
// let holdBtn = document.getElementById("hold")








// variables
// function init() {
//     targetScore = document.getElementById("targetScore").value
//     }
// init()


// console.log(targetScore)









