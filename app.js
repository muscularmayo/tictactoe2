//tictactoe organization
// i must keep track of whose turn it is, i must keep track of the board, and i must keep track of if the game is over
// i maybe should keep track of wins too

//i'm going to need to make the cells clickable, and they'll either place x or o in the box depending on turn
const module = (function () {
  let player1Turn = true;
  let player1Score = 0;
  let player2Score = 0;

  const state = {
    gameBoard: [0,0,0,0,0,0,0,0,0],
    player1Turn: player1Turn
  }

  // lets make our click function here
  const clickHandler = function (e) {
    console.log(this,e);
    let index = this.value;
    let piece;
    if(player1Turn) {
      piece = 'X'
    } else {
      piece = 'O'
    }
    if (state.gameBoard[index] === 0) {
      this.innerHTML = piece;
    } else {
      alert('this spot is already taken!')
    }
    player1Turn = !player1Turn;
    checkWin();
  }

  const checkWin = function (e) {

  }


  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    cell.addEventListener('click', clickHandler)
  })


})()