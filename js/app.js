/*-------------------------------- Constants --------------------------------*/



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

let boardEl = document.querySelectorAll('.board-square')

let gameMessage = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/

  
  

/*-------------------------------- Functions --------------------------------*/
function init() {
  gameBoard = [1,-1,1,-1,null,null,null,null,null ]
  //console.log(gameBoard)
 
  // gameBoard.map(function (sq, i) {
  //   boardEl.item[i] = sq
  //   //console.log(boardEl)
    
  //   // console.log(boardEl)
  //   return boardEl
  // })
  // console.log(boardEl.item[0])
    
  // topLeft = gameBoard[0]
  // topMid = gameBoard[1]
  // topRight = gameBoard[2]
  // midLeft = gameBoard[3]
  // midMid = gameBoard[4]
  // midRight = gameBoard[5]
  // bottomLeft = gameBoard[6]
  // bottomMid = gameBoard[7]
  // bottomRight = gameBoard[8]

  turn = 1
  winner = null

  render()
  
  }
  
  init()

function render() {
checkGameBoard()  
renderMessage()


}

function checkGameBoard() {
  gameBoard.forEach(function (square, i) {
    if (square === 1) {
     boardEl[i].textContent = "X" 
     boardEl[i].style.color = "red"
     boardEl[i].style.backgroundColor = "white"
    } else if (square === -1){
      boardEl[i].textContent = 'O'
      boardEl[i].style.color = "Green"
      boardEl[i].style.backgroundColor = "white"
    }
    })
}


function renderMessage() {
  if (winner === null) {
    gameMessage.textContent = `${turn ===1 ? `It's Player 1's Turn! Place your "X" ` : `It is player 2's turn! Place Your "O"` }`
  }
 
}

