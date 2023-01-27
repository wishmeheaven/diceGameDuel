"use strict"
/*
We are going to create a fun dice game.
Get the starter images from here
Here is a small demo
Rules
The game has 2 players, playing in rounds.
In each turn, a player rolls 2 dice as many times as he
wishes.
Each result will get added to his round’s score.
But if the player rolls a double six all his round’s score
gets lost.
After that, it's the next player’s turn.
A player can choose to ‘Hold’, which means that his
round’s score gets added to his global score.
After that, it's the next player's turn.
The first player to reach 100 points wins.
Add an input field where players can set the winning
score to change the predefined score of 100.
Players can create a new game whenever they want to.
Extra:
1. Add how many times the player has won the game
2. Add local storage so our data will be persistent.
3. Add an AI to compete against
4. if you get 6 and 6 hold your event listeners for 1
second and display a message that you got 6 and 6.
Can be a funny gif or anything you can think of.
5. Add background music and sound effects.
6. Any other additions are welcome. Go crazy!


// Global variables
// Score, roundScore, activePlayer, gamePlaying, winningScore, player1Wins, player2Wins, player1Name, player2Name, targetScore, diceA, diceB, startGameBtn, newGameBtn, rollDiceBtn, holdBtn

// Initialize the game
// 1. Set the scores to 0
// 2. Set the active player to 1
// 3. Set the round score to 0
// 4. Set the gamePlaying to true
// 6. Set the targetScore to the target score input
// 7. Set the player1Wins to 0
// 8. Set the player2Wins to 0
// 9. Set the player1Name to Player 1
// 10. Set the player2Name to Player 2
// 11. Set the diceA to 0
// 12. Set the diceB to 0
// 13. Set the startGameBtn to the start game button
// 14. Set the newGameBtn to the new game button
// 15. Set the rollDiceBtn to the roll dice button
// 16. Set the holdBtn to the hold button
// 17. Set the player1Name to the player 1 name input
// 18. Set the player2Name to the player 2 name input

// Start the game
// 1. Add an event listener to the start game button
// 2. When the start game button is clicked
// 3. Set the targetScore to the target score input
// 4. Set the player1Name to the player 1 name input
// 5. Set the player2Name to the player 2 name input
// 6. Set the player 1 name to the player 1 name
// 7. Set the player 2 name to the player 2 name
// 8. Set the player 1 score to 0
// 9. Set the player 2 score to 0

// list of events listeners
// 1. Add an event listener to the roll dice button
// 2. When the roll dice button is clicked
// 3. Generate a random number between 1 and 6
// 4. Display the result
// 5. If a player rolls a double six all his round’s score gets lost
// 6. Set the round score to 0
// 7. Set the player score to 0
// 8. Set the active player to the next player
// 9. Add an event listener to the hold button
// 10. When the hold button is clicked
// 11. Add the round score to the global score
// 12. Update the UI
// 13. Check if the player won the game
// 14. Set the round score of the active player to 0
// 15. Set the active player to the next player
// 16. Add an event listener to the new game button
// 17. When the new game button is clicked
// no need to set the gamePlaying to true because it is already true

// Functions
// 1. Set the player 1 name to the player 1 name
// 2. Set the player 2 name to the player 2 name
// 3. Set the player 1 score to 0
// 4. Set the player 2 score to 0
// 5. Set the round score of the active player to 0
// 6. Set the active player to the next player
*/


// let score = 0
// let roundScore = 0
// let activePlayer = 0
// let gamePlaying = true
// let winningScore = 100
// let player1Wins = 0
// let player2Wins = 0
// let player1Name = "Player 1"
// let player2Name = "Player 2"
// let targetScore = document.getElementById("targetScore").value
// let diceA = 0
// let diceB = 0
// let startGameBtn = document.getElementById("startGame")
// let newGameBtn = document.getElementById("newGame")
// let rollDiceBtn = document.getElementById("rollDice")
// let holdBtn = document.getElementById("hold")


// function init() {
//     score = [0, 0]
//     roundScore = 0
//     activePlayer = 0
//     gamePlaying = true
//     winningScore = 100
//     player1Wins = 0
//     player2Wins = 0
//     player1Name = "Player 1"
//     player2Name = "Player 2"
//     targetScore = document.querySelector("#targetScore").value
//     diceA = 0
//     diceB = 0
//     startGameBtn = document.querySelector("#startGame")
//     newGameBtn = document.querySelector("#newGame")
//     rollDiceBtn = document.querySelector("#rollDice")
//     holdBtn = document.querySelector("#hold")
// }

// init()

// startGameBtn.addEventListener("click", function () {
//     targetScore = document.querySelector("#targetScore").value
//     player1Name = document.querySelector("#player1Name").value
//     player2Name = document.querySelector("#player2Name").value
//     document.querySelector("#player1Name").value = player1Name
//     document.querySelector("#player2Name").value = player2Name
//     document.querySelector("#player1Score").textContent = 0
//     document.querySelector("#player2Score").textContent = 0
// })


// while (!gameOver) {
//     setActivePlayer()
//     rollDice()
//     hold()
//     newGame()
// }


