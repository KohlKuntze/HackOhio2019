var players;
var playerNames = [];

function printPlayerNameBoxes(numOfPlayers) {
    players = numOfPlayers;
    var playerInputAreaDiv = document.getElementById("player-input-area");

    playerInputAreaDiv.childNodes = new Array();
    while (playerInputAreaDiv.firstChild) {
      playerInputAreaDiv.removeChild(playerInputAreaDiv.firstChild);
    }
    

    var currentPlayer = 1;

    while (currentPlayer <= numOfPlayers) {
      
      playerInputAreaDiv.appendChild(createPlayerNameBox(currentPlayer));
      currentPlayer = currentPlayer + 1;
    }

}

function createPlayerNameBox(playerNumber) {
  var playerBoxDiv = document.createElement("div");
  playerBoxDiv.class = "form-group row";

  var playerBoxLabel = document.createElement("label");
  playerBoxLabel.class = "col-sm-6 col-form-label";
  playerBoxLabel.innerHTML = "Player " + playerNumber + " Name:";  

  var playerNameInput = document.createElement("input");
  playerNameInput.id = "playerName" + playerNumber;
  playerNameInput.type = "text";

  playerBoxDiv.appendChild(playerBoxLabel);
  playerBoxDiv.appendChild(playerNameInput);

  return playerBoxDiv;
}

function startGame(){

  for (i = 1; i <= players; i++){
    var currentPlayer = "playerName"+i;
    var playerName = document.getElementById(currentPlayer).value;
    sessionStorage.setItem(playerName, playerName);
  }
  window.location.href = "game.html";
}