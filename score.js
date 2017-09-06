function player(points, history, currScore) {
	this.points = points;
	this.history = history; 
	this.keepscore = function (currScore){
		this.points = Math.max(0, this.points - currScore);
		this.history[this.history.length] = currScore;
		return;
	}
}

INIT_POINTS = 501;
N_PLAYERS = 2;
p_array = new Array(N_PLAYERS);

// initialize players
for (i=0; i<N_PLAYERS; i++) {
	p_array[i] = new player(INIT_POINTS, [], 0);
}

// example, this should be updated with an user input pipeline
p_array[0].keepscore(20);
p_array[0].keepscore(10);
p_array[0].keepscore(30);


console.log("player 1 has " + p_array[0].points + " points.")
console.log("history of player 1 is: " + p_array[0].history)
