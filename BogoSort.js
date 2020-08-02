// WANTED BALLS IN LIST
var wantedBalls = 5;

var sorts = 0;

function insertBalls(wantedBalls) {
	var balls = [];

	for(i = 0; i < wantedBalls; i++) {
		balls.push(i + 1);
	}

	shuffle(balls);
}

function shuffle(array) {
	var preLength = array.length
	var sortedBalls = [];

	for(i = 0; i < preLength; i++) {
		var randomBall = Math.floor(Math.random() * array.length + 1);
		sortedBalls[i] = array[randomBall - 1]

		array.splice(randomBall - 1, 1);
	}

	try {
		sort(sortedBalls, preLength - 1);
		//setTimeout(sort, 2, sortedBalls, preLength - 1);
	} catch(error) {
		console.log(error);
	}
}

function sort(array, length) {
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