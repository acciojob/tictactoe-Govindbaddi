   document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault()
    })
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let board = ["","","","","","","","",""];
function startGame(){
    console.log("start button was clicked")
      player1 = document.getElementById("player-1").value;
      console.log(player1)
      player2 = document.getElementById("player-2").value;
      console.log(player2)
	document.getElementById("message").innerText =`${player1}`+",you're up";
}



function play(id) {
  if (board[id - 1] !== "") {
    return;
  }

  board[id - 1] = currentPlayer;
  document.getElementById(`${id}`).innerText = currentPlayer;
//if(chekcking()){

//}
  if (checkWinner()) {
    //let winner = currentPlayer === "X" ? player1 : player2;
    let winner = currentPlayer === "X" ? player1 : player2;
    document.getElementById("message").innerText = `${winner}, congratulations you won!`;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  //let winner = currentPlayer === player2;
  let nextPlayer = currentPlayer === "X" ? player1 : player2;
  document.getElementById("message").innerText = `${nextPlayer}, you're up`;
}

function checkWinner() {

  let winPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ];
  //let l=winpatterns.length
  //while(i<l){
  //}
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;
    if (board[a - 1] && board[a - 1] === board[b - 1] &&board[a - 1] === board[c - 1]) 
    {
      return true;
    }
  }
  return false;
}
