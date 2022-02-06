/*-------------------------------- Constants --------------------------------*/
const winningCombos = [//i didnt even end up using this.
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
let p1Wins = 0
let p2Wins = 0




/*------------------------ Cached Element References ------------------------*/

const allSquares = document.querySelectorAll('.board-square')
let gameMessage = document.getElementById('message')
let replay = document.getElementById('play-again')
let p1ScoreBoard = document.getElementById('p1-wins-total')
let p2ScoreBoard = document.getElementById('p2-wins-total')


/*----------------------------- Event Listeners -----------------------------*/
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
updateScoreBoard()
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
    gameMessage.textContent = `${winner === 1 ? `Player 1 (X) Wins!` : `Player 2 (O) Wins!` }`
  }
  if (winner === "T") {
    gameMessage.textContent = `The Game is a Tie!`  }
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
    

   
    render()
  }


  //my getWinner function is ugly, but functional. I had a hard time understating the way it was psudocoded in the insturctions so i came up with this
  function getWinner() {
    
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

function updateScoreBoard() {
  if (winner === 1) {
    p1Wins ++
    p1ScoreBoard.textContent = p1Wins
  } else if (winner === -1){
    p2Wins ++
    p2ScoreBoard.textContent = p2Wins
  }
  return
}
