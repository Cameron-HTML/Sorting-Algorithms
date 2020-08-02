// WANTED BALLS IN LIST
var wantedBalls = 10;

var sorts = 0;

var balls = []

function insertBalls(wantedBalls) {
	for(i = 0; i < wantedBalls; i++) {
		balls.push(i + 1);
	}

	shuffle();
}

function shuffle() {
	var preLength = balls.length
	var sortedBalls = [];

	for(i = 0; i < preLength; i++) {
		var randomBall = Math.floor(Math.random() * balls.length + 1);
		sortedBalls[i] = balls[randomBall - 1]

		balls.splice(randomBall - 1, 1);
	}

	try {
		//sort(sortedBalls, preLength - 1);
		setTimeout(sort, 10, sortedBalls, preLength - 1);
	} catch(error) {
		console.log(error);
	}
}

function sort(array, length) {
	//Check if sorted
	for(i = 0; i < length; i++) {
		if(array[i] < array[i+1]) {
			if(i >= length - 1) {
				console.log(array);
				console.log("Balls sorted!");
			}
		} else {
			console.log(sorts += 1);
			insertBalls(wantedBalls);
		}
	}
}

insertBalls(wantedBalls);