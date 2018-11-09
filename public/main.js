// // Tic Tac Toe instructions

// //  this is a 2 player game. player1 vs player2
// //  look at empty board (#)
// // - there are 9 spaces to fill in, like so #
// //   - numbered 0-8, left to right. top to bottom
// // - play again option always available. (reload page)
// class spaces {
//   constructor() {
//     this.space = []
//   }
// }
//   // let pickASquare0 = () => {
//   //   unplayedSpaces.splice(0) =
// }

// // unplayedSpaces.push(0, 1, 2, 3, 4, 5, 6, 7, 8)

let playerOne = []
let playerZeroSpaces = []
let unplayedSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let playerOneLetter = ''

//
//
let resetButton = () => {
  window.location.reload(true)
}
//
//
let chooseOButton = () => {
  playerOneLetter = playerOneLetter.classList.add('add0')
  firstPlayer()
}
let chooseXButton = () => {}
//
//
let firstPlayer = () => {}
//
//
//
let playerOTurn = () => {
  playerZeroSpaces.push(1)
  document.querySelector('.space0Button').classList.add('hidden')
  document.querySelector('.space0').classList.add('add0')
}
let PlayerXturn = () => {
  console.log('testing')
  // unplayedSpaces.push(1)
  // document.querySelector('.spaceXButton').classList.add('hidden')
  // document.querySelector('.space0').classList.add('addX')
}
let checkArrays = () => {
  console.log(unplayedSpaces)
  console.log(playerXSpaces)
  console.log(playerZeroSpaces)
}

//  Player X
//  - player X goes first
// - player X now picks a space(square)
//   - this space is now removed from future choices(array) and stored(in player array).
//      X is displyed on board if it is in players choices
//        - determine a winner by checking winning conditions
//          - winning conditions are [0, 1, 2], [3, 4, 5], [6, 7, 8],
//           [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]
//           - go through the list of winning conditions one at time
//           if the player array contains a 0 check if the player array contains a 1 if so check if player array contains a 2 if so the player wins
//           if the player array contains a 3 check if the player array contains a 4 if so check if player array contains a 5 if so the player wins
//           if the player array contains a 6 check if the player array contains a 7 if so check if player array contains a 8 if so the player wins
//           if the player array contains a 0 check if the player array contains a 3 if so check if player array contains a 6 if so the player wins
//           if the player array contains a 1 check if the player array contains a 4 if so check if player array contains a 7 if so the player wins
//           if the player array contains a 2 check if the player array contains a 5 if so check if player array contains a 8 if so the player wins
//           if the player array contains a 2 check if the player array contains a 4 if so check if player array contains a 6 if so the player wins
//           if the player array contains a 0 check if the player array contains a 4 if so check if player array contains a 8 if so the player wins

//        - check make sure there are still available spaces.
//         - if no available spaces determine a DRAW
//         - if winning conditions have not been met or there are available spaces.
//           it is now player0 turn.

const main = () => {
  document.querySelector('.resetButton').addEventListener('click', resetButton)
  document
    .querySelector('.chooseXButton')
    .addEventListener('click', chooseXButton)
  document
    .querySelector('.chooseOButton')
    .addEventListener('click', chooseOButton)
  document.querySelector('.checkArrays').addEventListener('click', checkArrays)
}

document.addEventListener('DOMContentLoaded', main)
