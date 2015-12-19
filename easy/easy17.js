

function twice(height){

	var result = "@";
	
	for (i=0; i < height; i++){
		for (j=0; j < i*i; j++){
			document.write(result);
		}
		document.write("<br>");

	}
	

}

twice(5);
console.log("what the fuck!");
