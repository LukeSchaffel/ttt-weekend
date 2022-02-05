/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
 ]


/*---------------------------- Variables (state) ----------------------------*/
let gameBoard = []
let turn 
let winner





/*------------------------ Cached Element References ------------------------*/
// let topLeft = document.getElementById('sq0')
// let topMid = document.getElementById('sq1')
// let topRight = document.getElementById('sq2')
// let midLeft = document.getElementById('sq3')
// let midMid = document.getElementById('sq4')
// let midRight = document.getElementById('sq5')
// let bottomLeft = document.getElementById('sq6')
// let bottomMid = document.getElementById('sq7')
// let bottomRight = document.getElementById('sq8')

const allSquares = document.querySelectorAll('.board-square')
let gameMessage = document.getElementById('message')
let replay = document.getElementById('play-again')


/*----------------------------- Event Listeners -----------------------------*/
// document.querySelector('.board-square').addEventListener("click", handleClick)
document.querySelector('.board').addEventListener('click', handleClick)
document.querySelector("#play-again").addEventListener('click', restart) 
 

/*-------------------------------- Functions --------------------------------*/
function init() {
  gameBoard = [null,null,null,null,null,null,null,null,null ]
  turn = 1
  winner = null
  allSquares[0].value = gameBoard [0]
  allSquares[1].value = gameBoard [1]
  allSquares[2].value = gameBoard [2]
  allSquares[3].value = gameBoard [3]
  allSquares[4].value = gameBoard [4]
  allSquares[5].value = gameBoard [5]
  allSquares[6].value = gameBoard [6]
  allSquares[7].value = gameBoard [7]
  allSquares[8].value = gameBoard [8]
  
  


  render()
  replay.setAttribute('hidden', true)
  }
  
  init()

function render() {
checkGameBoard()  
renderMessage()
displayReplay()

}

function checkGameBoard() {
  gameBoard.forEach(function (square, i) {
    if (square === 1) {
      allSquares[i].textContent = "X" 
      allSquares[i].style.color = "red"
      allSquares[i].style.backgroundColor = "white"
    } else if (square === -1){
      allSquares[i].textContent = 'O'
      allSquares[i].style.color = "Green"
      allSquares[i].style.backgroundColor = "white"
    } else {
      allSquares[i].textContent = ""
      allSquares[i].style.backgroundColor = "rgba(105, 126, 126, 0.708)"
    }
    })

    
}


function renderMessage() {
  if (winner === null) {
    gameMessage.textContent = `${turn === 1 ? `It's Player 1's Turn! Place your "X" ` : `It is player 2's turn! Place Your "O"` }`
  }
  if (winner === 1 || winner === -1) {
    gameMessage.textContent = `${winner === 1 ? `Player 1 (X) Wins! Play Again?` : `Player 2 (O) Wins! Play Again? }` }`
  }
  if (winner === "T") {
    gameMessage.textContent = `The Game is a Tie! Would You Like to Play Again?`  }
  }
 
function handleClick(evt) {
    if (evt.target.value !==null) {
      return
    }
    if(winner !== null){
      return
    }
    
    if (evt.target.value === null) {
      let stored
      let index
      stored = evt.target.id.split('')
      index = parseInt(stored[stored.length-1])
      gameBoard[index] = turn
      evt.target.value = turn
     
    }
    turn = turn * -1
    getWinner()
    
    // console.log(evt.target.value)
    console.log(gameBoard)
    // console.log(turn)

    // console.log(gameBoard)
    render()
  }

  function getWinner() {//check if any are null
    
    if (gameBoard[0]===1 && gameBoard[1]===1 && gameBoard[2]===1) {
      return winner = 1}
    if (gameBoard[3]===1 && gameBoard[4]===1 && gameBoard[5]===1) {
      return winner = 1  }
    if (gameBoard[6]===1 && gameBoard[7]===1 && gameBoard[8]===1) {
      return winner = 1  }
    if (gameBoard[0]===1 && gameBoard[3]===1 && gameBoard[6]===1) {
        return winner = 1  }
    if (gameBoard[1]===1 && gameBoard[4]===1 && gameBoard[7]===1) {
        return winner = 1  }
    if (gameBoard[2]===1 && gameBoard[5]===1 && gameBoard[8]===1) {
        return winner = 1  }
    if (gameBoard[0]===1 && gameBoard[4]===1 && gameBoard[8]===1) {
        return winner = 1  }
    if (gameBoard[2]===1 && gameBoard[4]===1 && gameBoard[6]===1) {
        return winner = 1  }


    if (gameBoard[0]===-1 && gameBoard[1]===-1 && gameBoard[2]===-1) {
      return winner = -1}
    if (gameBoard[3]===-1 && gameBoard[4]===-1 && gameBoard[5]===-1) {
      return winner = -1  }
    if (gameBoard[6]===-1 && gameBoard[7]===-1 && gameBoard[8]===-1) {
      return winner = -1  }
    if (gameBoard[0]===-1 && gameBoard[3]===-1 && gameBoard[6]===-1) {
        return winner = -1  }
    if (gameBoard[1]===-1 && gameBoard[4]===-1 && gameBoard[7]===-1) {
        return winner = -1  }
    if (gameBoard[2]===-1 && gameBoard[5]===-1 && gameBoard[8]===-1) {
        return winner = -1  }
    if (gameBoard[0]===-1 && gameBoard[4]===-1 && gameBoard[8]===-1) {
        return winner = -1  }
    if (gameBoard[2]===-1 && gameBoard[4]===-1 && gameBoard[6]===-1) {
        return winner = -1  }    


  checkForTie()
  render()  
  }

function checkForTie() {
  let hasNull = gameBoard.some(function (sq) {
    return sq === null
  })
if (!hasNull){
  return winner = "T"
}

}

  

function displayReplay() {
  if (winner !== null){
  replay.removeAttribute('hidden', false)
  }
}



function restart() {
  init()
  allSquares.textContent=""
}



// if (gameBoard[0]===1 && gameBoard[1]===1 && gameBoard[2]===1) {
//   return winner = 1}
// if (gameBoard[3]===1 && gameBoard[4]===1 && gameBoard[5]===1) {
//   return winner = 1  }
// if (gameBoard[6]===1 && gameBoard[7]===1 && gameBoard[8]===1) {
//   return winner = 1  }
// if (gameBoard[0]===1 && gameBoard[3]===1 && gameBoard[6]===1) {
//     return winner = 1  }
// if (gameBoard[1]===1 && gameBoard[4]===1 && gameBoard[7]===1) {
//     return winner = 1  }
// if (gameBoard[2]===1 && gameBoard[5]===1 && gameBoard[8]===1) {
//     return winner = 1  }
// if (gameBoard[0]===1 && gameBoard[4]===1 && gameBoard[8]===1) {
//     return winner = 1  }
// if (gameBoard[2]===1 && gameBoard[4]===1 && gameBoard[6]===1) {
//     return winner = 1  }


// if (gameBoard[0]===-1 && gameBoard[1]===-1 && gameBoard[2]===-1) {
//   return winner = -1}
// if (gameBoard[3]===-1 && gameBoard[4]===-1 && gameBoard[5]===-1) {
//   return winner = -1  }
// if (gameBoard[6]===-1 && gameBoard[7]===-1 && gameBoard[8]===-1) {
//   return winner = -1  }
// if (gameBoard[0]===-1 && gameBoard[3]===-1 && gameBoard[6]===-1) {
//     return winner = -1  }
// if (gameBoard[-1]===-1 && gameBoard[4]===-1 && gameBoard[7]===-1) {
//     return winner = -1  }
// if (gameBoard[2]===-1 && gameBoard[5]===-1 && gameBoard[8]===-1) {
//     return winner = -1  }
// if (gameBoard[0]===-1 && gameBoard[4]===-1 && gameBoard[8]===-1) {
//     return winner = -1  }
// if (gameBoard[2]===-1 && gameBoard[4]===-1 && gameBoard[6]===-1) {
//     return winner = -1  }  