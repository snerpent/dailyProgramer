

function blockArr (a, k){

	var solution = [];
	for (var i=0; i < a.length; i+=k){

		solution.push((a.slice(i,i+k)).reverse());	


	}

	return solution;
	

}


alert(blockArr([1,2,3,4],2));


