//tictactoe organization
// i must keep track of whose turn it is, i must keep track of the board, and i must keep track of if the game is over
// i maybe should keep track of wins too

//i'm going to need to make the cells clickable, and they'll either place x or o in the box depending on turn
const module = (function () {
  let player1Turn = true;
  const state = {
    gameBoard: [0,0,0,0,1,0,0,0,0],
    player1Turn: player1Turn,
    player1Score: 0,
    player2Score: 0
  }
  let size = Math.sqrt(state.gameBoard.length)

  const diagonalIndexes = function(size) {
    let diagonal1 = [];
    let diagonal2 = [];
    let leftIndex = 0;
    let rightIndex = size-1;


    for(let i = 0; i < size; i++) {
      diagonal1.push(leftIndex)
      diagonal2.push(rightIndex)
      leftIndex = leftIndex + size + 1;
      rightIndex = rightIndex + size - 1;
    }


    return { diagonal1, diagonal2 }
  }

  let diagonals = diagonalIndexes(size);

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
    if (typeof state.gameBoard[index] === 'number') {
      this.innerHTML = piece;
      state.gameBoard[index] = piece;
      player1Turn = !player1Turn;
    } /*else {
      alert('this spot is already taken!')
    }*/
    const winCheck = checkWin(index, size);
    if(winCheck) {
      alert('game over')
      killBoard();
    }
  }

  const checkWin = function (index, size) {
    const rows = checkRows(index,size)
    const columns = checkColumns(index,size)
    let diagonal = false;
    if(diagonals.diagonal1.includes(index) || diagonals.diagonal2.includes(index)) {
      diagonal = checkDiagonals(index,size)
    }
    if (rows || columns || diagonal) {
      return true;
    }
    return false;
  }

  const checkRows = function (index, size) {
    const rowIndex = Math.floor(index/size) //tells us which row we're checking
    let position = rowIndex*size
    for(i = position; i < position+size-1; i++) {
      if(state.gameBoard[i]!==state.gameBoard[i+1]) {
        return false
      }
    }
    return true;

  }

  const checkColumns = function (index,size) {
    let colIndex = index%size
    for (let i = 0; i < size-1; i++) {
      if(state.gameBoard[colIndex] !== state.gameBoard[colIndex+size]) {
        return false;
      }
      colIndex = colIndex + size;
    }
    return true;
  }

  const checkDiagonals = function(index,size) {
    if(checkRightDiag(index,size) || checkLeftDiag(index,size)) {
      return true;
    }
    return false;
  }

  const checkLeftDiag = function(index,size) {
    for(let i = 0; i < size-1; i++) {
      if(state.gameBoard[diagonals.diagonal1[i]] !== state.gameBoard[diagonals.diagonal1[i+1]]){
        return false;
      }
    }
    return true;
  }

  const checkRightDiag = function(index, size) {
    for(let i = 0; i < size-1; i++) {
      if(state.gameBoard[diagonals.diagonal2[i]] !== state.gameBoard[diagonals.diagonal2[i+1]]) {
        return false;
      }
    }
    return true;
  }

  const resetState = function() {

  }

  const cells = document.querySelectorAll('.cell')
  const resetButton = document.querySelector('#reset')

  const killBoard = function () {
    cells.forEach(cell => {
      cell.removeEventListener('click', clickHandler)
    })
  }

  cells.forEach(cell => {
    cell.addEventListener('click', clickHandler)
  })

  const reset = function () {
    killBoard;
    state.gameBoard = [0,0,0,0,1,0,0,0,0]
    cells.forEach(cell => {
      cell.innerHTML = ''
      cell.addEventListener('click', clickHandler)
    })
  }

  resetButton.addEventListener('click', reset)
})()

module.exports = module;