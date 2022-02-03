/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let gameBoard = []
let turn 
let winner





/*------------------------ Cached Element References ------------------------*/
let topLeft = document.getElementById('sq0')
let topMid = document.getElementById('sq1')
let topRight = document.getElementById('sq2')
let midLeft = document.getElementById('sq3')
let midMid = document.getElementById('sq4')
let midRight = document.getElementById('sq5')
let bottomLeft = document.getElementById('sq6')
let bottomMid = document.getElementById('sq7')
let bottomRight = document.getElementById('sq8')

let board = document.querySelectorAll('.board-square')

let gameMessage = document.getElementById('message')

/*----------------------------- Event Listeners -----------------------------*/
function init() {
  gameBoard = [null,null,null,null,null,null,null,null,null ]
  //console.log(gameBoard)
 
  gameBoard.map(function (sq, i) {

    board = sq
    console.log(board)
    
  })


  // topLeft = gameBoard[0]
  // topRight = gameBoard[1]
  // topMid = gameBoard[2]
  // midLeft = gameBoard[3]
  // midMid = gameBoard[4]
  // midRight = gameBoard[5]
  // bottomLeft = gameBoard[6]
  // bottomMid = gameBoard[7]
  // bottomRight = gameBoard[8]

  
  }
  




/*-------------------------------- Functions --------------------------------*/


