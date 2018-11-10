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
//
//
//        TO DO BELOW
//
// - need H2 to display whos turn it is as well as a winner
// - need a declare winner function (player X wins, player O wins, TIE)
//
//
//
//    CHALLENGES - OPTIONAL (after game works perfectly)
// - have array number spliced added to array, currently set up as
//    splicing off. new number created and pushed to player array
// - has a X and O button for player to choose
//    - currently set up for player one to be X
//    - hide X O choices when clicked
//
//
//
//      CLEANUP CODE
// - repeated behavior added into a function then call function
// - remove check arrays button after before final launch
//
//

let playerXSpaces = []
let playerOSpaces = []
let unplayedSpaces = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let playerOneLetter = ''
let playertwoLetter = ''

// let chooseXButton = () => {
// }
// let chooseOButton = () => {
// }

let resetButton = () => {
  window.location.reload(true)
}
let checkArrays = () => {
  console.log(unplayedSpaces)
  console.log(playerXSpaces)
  console.log(playerOSpaces)
}

let space0Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(0)
    document.querySelector('.space0Button').classList.add('hidden')
    document.querySelector('.space0').classList.add('addX')
  } else {
    playerOSpaces.push(0)
    document.querySelector('.space0Button').classList.add('hidden')
    document.querySelector('.space0').classList.add('add0')
  }
}
let space1Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(1)
    document.querySelector('.space1Button').classList.add('hidden')
    document.querySelector('.space1').classList.add('addX')
  } else {
    playerOSpaces.push(1)
    document.querySelector('.space1Button').classList.add('hidden')
    document.querySelector('.space1').classList.add('add0')
  }
}
let space2Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(2)
    document.querySelector('.space2Button').classList.add('hidden')
    document.querySelector('.space2').classList.add('addX')
  } else {
    playerOSpaces.push(2)
    document.querySelector('.space2Button').classList.add('hidden')
    document.querySelector('.space2').classList.add('add0')
  }
}
let space3Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(3)
    document.querySelector('.space3Button').classList.add('hidden')
    document.querySelector('.space3').classList.add('addX')
  } else {
    playerOSpaces.push(3)
    document.querySelector('.space3Button').classList.add('hidden')
    document.querySelector('.space3').classList.add('add0')
  }
}
let space4Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(4)
    document.querySelector('.space4Button').classList.add('hidden')
    document.querySelector('.space4').classList.add('addX')
  } else {
    playerOSpaces.push(4)
    document.querySelector('.space4Button').classList.add('hidden')
    document.querySelector('.space4').classList.add('add0')
  }
}
let space5Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(5)
    document.querySelector('.space5Button').classList.add('hidden')
    document.querySelector('.space5').classList.add('addX')
  } else {
    playerOSpaces.push(5)
    document.querySelector('.space5Button').classList.add('hidden')
    document.querySelector('.space5').classList.add('add0')
  }
}

let space6Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(6)
    document.querySelector('.space6Button').classList.add('hidden')
    document.querySelector('.space6').classList.add('addX')
  } else {
    playerOSpaces.push(6)
    document.querySelector('.space6Button').classList.add('hidden')
    document.querySelector('.space6').classList.add('add0')
  }
}

let space7Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(7)
    document.querySelector('.space7Button').classList.add('hidden')
    document.querySelector('.space7').classList.add('addX')
  } else {
    playerOSpaces.push(7)
    document.querySelector('.space7Button').classList.add('hidden')
    document.querySelector('.space7').classList.add('add0')
  }
}

let space8Button = () => {
  // splice removes from array
  // code below removes one object in the [0] spot
  unplayedSpaces.splice(0, 1)
  if (playerXSpaces.length === playerOSpaces.length) {
    playerXSpaces.push(8)
    document.querySelector('.space8Button').classList.add('hidden')
    document.querySelector('.space8').classList.add('addX')
  } else {
    playerOSpaces.push(1)
    document.querySelector('.space8Button').classList.add('hidden')
    document.querySelector('.space8').classList.add('add0')
  }
}

const main = () => {
  document.querySelector('.resetButton').addEventListener('click', resetButton)
  document.querySelector('.checkArrays').addEventListener('click', checkArrays)
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

  // .querySelector('.chooseXButton')
  // .addEventListener('click', chooseXButton)
  // document
  //   .querySelector('.chooseOButton')
  //   .addEventListener('click', chooseOButton)
}

document.addEventListener('DOMContentLoaded', main)
