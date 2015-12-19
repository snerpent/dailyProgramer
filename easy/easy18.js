

function help (word){

	var harr,hashkey = [];
	var hash = "22233344455566677778889999";
	hashkey = hash.split("");
	harr = word.split("");

	for (i=0;i<word.length;i++){

			harr[i] = hashkey[harr[i].charCodeAt(0)-65];
			

		}

		
	word = harr.join("");

	return word.splice(3,0,"-");
	
}


document.write("1-800- " + help("COMCAST"));
