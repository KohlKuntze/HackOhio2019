var playerNames = [];

function playGame(playerNames) {
	// alert("In play game");
	createScoreboard(playerNames);
	getPlayerNames();
}

function getPlayerNames(){
    var i;    
    for (i = 0; i < sessionStorage.length; i++){
		var possName = sessionStorage.getItem(sessionStorage.key(i))
		if(possName.includes("_score")){
			console.log(possName);
			playerNames.push(possName);
		}
    }

}

function chooseGame(){
	// print out game from list
	chooseWinner();
}

{/* <input type="checkbox" name="foo" value="bar1"> Bar 1<br/>
<input type="checkbox" name="foo" value="bar2"> Bar 2<br/>
<input type="checkbox" name="foo" value="bar3"> Bar 3<br/>
<input type="checkbox" name="foo" value="bar4"> Bar 4<br/>
 */}

function chooseWinner(){
	var playerInputAreaDiv = document.getElementById("chooseWinner");
	var x = document.createElement("br");

	for (i = 0; i < playerNames.length; i++){
		//console.log(playerNames[i]);
		
		var playerOption = document.createElement("input");
		playerOption.id = playerNames[i] + "_option";
		playerOption.type = "checkbox";
		playerOption.value = playerNames[i];

		playerInputAreaDiv.appendChild(playerOption);
		playerInputAreaDiv.appendChild(x);
	}

}

function createScoreboard(playerNames) {
	//alert("Constructing scoreboard");
	var scoreBoardDiv = document.getElementById("scoreboard-div");
	scoreBoardDiv.innerHTML = "Scoreboard";
}