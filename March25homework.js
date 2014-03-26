
//ASSIGNMENT - Write 3 different functions that take input and return something via the console or an alert.

//FUNCTION #1
function psychicgame (number) {
	if(number>10) {
		console.log("Pick a number between 1 and 10!");
	} else if(number>5) {
		console.log("Sorry, you're not psychic,");
	} else if(number<5) {
		console.log("Sorry, you're not a psychic,");
	} else if(number===5) {
		console.log("CONGRATULATIONS! YOU'RE A PSYCHIC!");
	}
}


//to call this function
psychicgame(4) 






//FUNCTION #2
function firstname(name) {
	return console.log(name);
}

//to call this function
firstname("dude,");








//FUNCTION #3
function benice() {
	return alert("YOU ARE SO SUPER AWESOME!!!!") + console.log("But who needs to be a psychic when you're SUPER AWESOME!!!");
	
}

//to call this function
benice()











