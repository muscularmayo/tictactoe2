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
  let size = Math.sqrt(state.gameBoard.length)
  // lets make our click function here
  const clickHandler = function (e) {
    console.log(this,e);
    let index = Number(this.id);
    let piece;
    if(player1Turn) {
      piece = 'X'
    } else {
      piece = 'O'
    }
    if (state.gameBoard[index] === 0) {
      this.innerHTML = piece;
      state.gameBoard[index] = piece;
      player1Turn = !player1Turn;
    } /*else {
      alert('this spot is already taken!')
    }*/
    checkWin(index, size);
  }

  const checkWin = function (index, size) {
    const rows = checkRows(index,size)
    const columns = checkColumns(index,size)
    const diagonals = checkDiagonals(index,size)
  }

  const checkRows = function (index, size) {
    const rowIndex = Math.floor(index/size) //tells us which row we're checking
    let position = rowIndex*size
    for(i = position; i < position+size-1; i++) {
      if(state.gameBoard[i]!==state.gameBoard[i+1]) {
        return false
      };
    }
    return true;

  }

  const checkColumns = function (index,size) {

  }

  const checkDiagonals = function(index,size) {

  }


  const cells = document.querySelectorAll('.cell')
  cells.forEach(cell => {
    cell.addEventListener('click', clickHandler)
  })


})()

module.exports = module;