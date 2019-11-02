function playGame(playerNames) {
	alert("In play game");
	createScoreboard(playerNames);

}

function createScoreboard(playerNames) {
	alert("Constructing scoreboard");
	var scoreBoardDiv = document.getElementById("scoreboard-div");
	scoreBoardDiv.innerHTML = "Scoreboard";
}