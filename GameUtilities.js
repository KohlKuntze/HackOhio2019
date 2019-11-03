var playerNames = [];
var games = ["Beer Pong", "Dare ball", "Take a drink", "Flip cup", "Survivor"]


function playGame(playerNames) {
	getPlayerNames();
	createScoreboard();

}

function getPlayerNames(){
    var i;    
    for (i = 0; i < sessionStorage.length; i++){
		var possName = sessionStorage.getItem(sessionStorage.key(i))
		if(possName.includes("_score")){
			playerNames.push(possName);
		}
    }

}

function chooseGame(){
	// print out game from list
	getGame();
	chooseWinner();
}

function getGame(){
	var gamesPlay = document.getElementById("currentGame");
	var num = Math.round((Math.random() * (games.length)));

	var lineBreak = document.createElement("br");
	var newGame = document.createElement("p");
	var para = document.createTextNode(games[num]);
	newGame.append(para);
	
	gamesPlay.appendChild(newGame);

}


function chooseWinner(){
	var playerInputAreaDiv = document.getElementById("chooseWinner");

	for (i = 0; i < playerNames.length; i++){
		var lineBreak = document.createElement("br");
		var playerOption = document.createElement("input");
		playerOption.id = playerNames[i] + "_option";
		playerOption.type = "checkbox";
		playerOption.value = playerNames[i];

		var label = document.createElement("label");
		label.htmlFor = playerNames[i]+"_option"

		label.appendChild(document.createTextNode(playerNames[i]));


		playerInputAreaDiv.appendChild(playerOption);
		playerInputAreaDiv.appendChild(label);
		playerInputAreaDiv.appendChild(lineBreak);
	}
	var submit = document.createElement("button");
	submit.innerHTML = "Submit";
	submit.onclick = addPoints;
	playerInputAreaDiv.appendChild(submit);

}

function addPoints(){
	var scoreboard = document.getElementById("scoreboard-div");
	var gamesPlay = document.getElementById("currentGame");

	while (scoreboard.firstChild) {
		scoreboard.removeChild(scoreboard.firstChild);
	}

	while (gamesPlay.firstChild) {
		gamesPlay.removeChild(gamesPlay.firstChild);
	}

	for (i = 0; i < playerNames.length; i++){
		var currentScore = parseInt(sessionStorage.getItem(playerNames[i]+"_score"));

		if(document.getElementById(playerNames[i]+"_option").checked == true){
			currentScore = currentScore + 1;
			sessionStorage.removeItem(playerNames[i]+"_score");
			sessionStorage.setItem(playerNames[i]+"_score", currentScore);

		}

		var newScore = document.createElement("p");
		var para = document.createTextNode(playerNames[i]+": "+currentScore);
		newScore.appendChild(para);
		scoreboard.appendChild(newScore);
	}

	var playerInputAreaDiv = document.getElementById("chooseWinner");

	while (playerInputAreaDiv.firstChild) {
		playerInputAreaDiv.removeChild(playerInputAreaDiv.firstChild);
	}

	//printAll();
}


function printAll(){
	var i;    
    for (i = 0; i < sessionStorage.length; i++)   {
        console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
    }
}

function createScoreboard() {
	//alert("Constructing scoreboard");
	var scoreBoard = document.getElementById("scoreboard-div");

	while (scoreBoard.firstChild) {
		scoreBoard.removeChild(scoreBoard.firstChild);
	}

	for (i = 0; i < playerNames.length; i++){

		var newScore = document.createElement("p");
		var para = document.createTextNode(playerNames[i]+": 0");
		newScore.appendChild(para);
		scoreBoard.appendChild(newScore);
	}

}