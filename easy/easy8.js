function beerCount(){
	var beers = "";

	for (i = 99; i > 0; i--){

		if (i == 2) {
			beers += i + " bottles of beer on the wall. " + i + " bottles of beer. Take one down, pass it around. " + (i-1) + " bottle of beer on the wall. ";	
		}
		else {	
			if ( i == 1) {
			beers += i + " bottle of beer on the wall. " + i + " bottles of beer. Take one down, pass it around. No bottles of beer on the wall. ";	
			}
			else {
			beers += i + " bottles of beer on the wall. " + i + " bottles of beer. Take one down, pass it around. " + (i-1) + " bottles of beer on the wall. ";	
			}
		}
	}

	console.log(beers);
	console.log("Beer!");

}

beerCount();

