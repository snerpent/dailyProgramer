var userSet = prompt("Please type some numbers");

function sortArray(){
	var orderedSet = [];
	orderedSet = userSet.split(" ").sort(function(a, b){return a-b});
	console.log(orderedSet);
}


sortArray();
