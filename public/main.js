// // Tic Tac Toe instructions

// //  this is a 2 player game. player1 vs player2
// //  look at empty board (#)
// // - there are 9 spaces to fill in, like so #
// //   - numbered 0-8, left to right. top to bottom
// // - play again option always available. (reload page)
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

//
//
//  Accomplished
//
// - got the game to toggle between player X and player O (nov 9th)
// - removes from unplayed spaces (nov 9th)
// - pushes number to player X and player 0 array depending (nov 9th)
//    which box is clicked (nov 9th)
// - hides button so same box cant be clicked more than once (nov 9th)
// - display's O or X on box clicked (nov 9th)
//
// - has a check arrays button for developer debugging (nov 8th)
// - basic HTML and CSS done (nov 8th)
//    - board
//    - buttons
//    - plain black, grey, white styling
//    - default text
//
// - need H2 to display whos turn it is as well as a winner (nov 10)
// - need a declare winner function (player X wins, player O wins, TIE) (nov 10)
// - remove check arrays button before final launch (nov 12)
// - added images and better styling (nov 12)
//
//
//        TO DO BELOW
//
//
//    CHALLENGES - OPTIONAL (after game works perfectly)
//
// - have array number spliced added to array, currently set up as
//    splicing off. new number created and pushed to player array
// - add removed space buttons after winner declared (attempted, but couldnt achieve)
// - how to make use of .filter in whowon function?
//
//      CLEANUP CODE
// - repeated behavior add into a function then call function
//
//
//

let playerXSpaces = []
let playerOSpaces = []
let unplayedSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let resetButton = () => {
  window.location.reload(true)
}

let testForAllSpacesFilled = () => {
  if (unplayedSpaces.length === 0) {
    document.querySelector('h3').textContent = 'TIE, PLAY AGAIN?'
    document.querySelector('h2').classList.add('hidden')
  }
}
let whoWon = () => {
  if (
    (playerOSpaces.includes(0) &&
      playerOSpaces.includes(1) &&
      playerOSpaces.includes(2)) ||
    (playerOSpaces.includes(3) &&
      playerOSpaces.includes(4) &&
      playerOSpaces.includes(5)) ||
    (playerOSpaces.includes(6) &&
      playerOSpaces.includes(7) &&
      playerOSpaces.includes(8)) ||
    (playerOSpaces.includes(0) &&
      playerOSpaces.includes(3) &&
      playerOSpaces.includes(6)) ||
    (playerOSpaces.includes(1) &&
      playerOSpaces.includes(4) &&
      playerOSpaces.includes(7)) ||
    (playerOSpaces.includes(2) &&
      playerOSpaces.includes(5) &&
      playerOSpaces.includes(8)) ||
    (playerOSpaces.includes(2) &&
      playerOSpaces.includes(4) &&
      playerOSpaces.includes(6)) ||
    (playerOSpaces.includes(0) &&
      playerOSpaces.includes(4) &&
      playerOSpaces.includes(8))
  ) {
    console.log('testingOwin')
    document.querySelector('h3').textContent = 'PLAYER O WINS! PLAY AGAIN?'
    document.querySelector('h2').classList.add('hidden')
  }
  if (
    (playerXSpaces.includes(0) &&
      playerXSpaces.includes(1) &&
      playerXSpaces.includes(2)) ||
    (playerXSpaces.includes(3) &&
      playerXSpaces.includes(4) &&
      playerXSpaces.includes(5)) ||
    (playerXSpaces.includes(6) &&
      playerXSpaces.includes(7) &&
      playerXSpaces.includes(8)) ||
    (playerXSpaces.includes(0) &&
      playerXSpaces.includes(3) &&
      playerXSpaces.includes(6)) ||
    (playerXSpaces.includes(1) &&
      playerXSpaces.includes(4) &&
      playerXSpaces.includes(7)) ||
    (playerXSpaces.includes(2) &&
      playerXSpaces.includes(5) &&
      playerXSpaces.includes(8)) ||
    (playerXSpaces.includes(2) &&
      playerXSpaces.includes(4) &&
      playerXSpaces.includes(6)) ||
    (playerXSpaces.includes(0) &&
      playerXSpaces.includes(4) &&
      playerXSpaces.includes(8))
  ) {
    document.querySelector('h3').textContent = 'PLAYER X WINS! PLAY AGAIN?'
    document.querySelector('h2').classList.add('hidden')
  }
  testForAllSpacesFilled()
}
let playerOturnNext = () => {
  document.querySelector('h2').textContent = 'PLAYER O TURN'
}
let playerXturnNext = () => {
  document.querySelector('h2').textContent = 'PLAYER X TURN'
}
// splice removes from array
// code below removes one object in the [0] spot on all numbers buttons
let space0Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(0)
    document.querySelector('.space0Button').classList.add('hidden')
    document.querySelector('.space0').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(0)
    document.querySelector('.space0Button').classList.add('hidden')
    document.querySelector('.space0').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}
let space1Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(1)
    document.querySelector('.space1Button').classList.add('hidden')
    document.querySelector('.space1').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(1)
    document.querySelector('.space1Button').classList.add('hidden')
    document.querySelector('.space1').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}
let space2Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(2)
    document.querySelector('.space2Button').classList.add('hidden')
    document.querySelector('.space2').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(2)
    document.querySelector('.space2Button').classList.add('hidden')
    document.querySelector('.space2').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}
let space3Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(3)
    document.querySelector('.space3Button').classList.add('hidden')
    document.querySelector('.space3').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(3)
    document.querySelector('.space3Button').classList.add('hidden')
    document.querySelector('.space3').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}
let space4Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(4)
    document.querySelector('.space4Button').classList.add('hidden')
    document.querySelector('.space4').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(4)
    document.querySelector('.space4Button').classList.add('hidden')
    document.querySelector('.space4').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}
let space5Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(5)
    document.querySelector('.space5Button').classList.add('hidden')
    document.querySelector('.space5').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(5)
    document.querySelector('.space5Button').classList.add('hidden')
    document.querySelector('.space5').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}

let space6Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(6)
    document.querySelector('.space6Button').classList.add('hidden')
    document.querySelector('.space6').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(6)
    document.querySelector('.space6Button').classList.add('hidden')
    document.querySelector('.space6').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}

let space7Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(7)
    document.querySelector('.space7Button').classList.add('hidden')
    document.querySelector('.space7').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(7)
    document.querySelector('.space7Button').classList.add('hidden')
    document.querySelector('.space7').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}

let space8Button = () => {
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(8)
    document.querySelector('.space8Button').classList.add('hidden')
    document.querySelector('.space8').classList.add('addX')
    whoWon()
    playerOturnNext()
  } else {
    playerOSpaces.push(8)
    document.querySelector('.space8Button').classList.add('hidden')
    document.querySelector('.space8').classList.add('add0')
    whoWon()
    playerXturnNext()
  }
}

const main = () => {
  document.querySelector('.resetButton').addEventListener('click', resetButton)
  document
    .querySelector('.space0Button')
    .addEventListener('click', space0Button)
  document
    .querySelector('.space1Button')
    .addEventListener('click', space1Button)
  document
    .querySelector('.space2Button')
    .addEventListener('click', space2Button)

  document
    .querySelector('.space3Button')
    .addEventListener('click', space3Button)

  document
    .querySelector('.space4Button')
    .addEventListener('click', space4Button)

  document
    .querySelector('.space5Button')
    .addEventListener('click', space5Button)

  document
    .querySelector('.space6Button')
    .addEventListener('click', space6Button)

  document
    .querySelector('.space7Button')
    .addEventListener('click', space7Button)

  document
    .querySelector('.space8Button')
    .addEventListener('click', space8Button)
}

document.addEventListener('DOMContentLoaded', main)
