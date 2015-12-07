function test() {
	console.log("This will be fun once I learn it.")
}

var morseKey = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var alphaKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function code(){
	var alphaString = "HELLO THIS IS A TEST";
	var morseString = "";

		for (i = 0; i < alphaString.length; i++){
				
			if (alphaString[i] == " "){

				morseString += " / ";
			}

			else {
				for (j = 0; j < alphaKey.length; j++) {

					
						if (alphaString[i] == alphaKey[j]) {

								morseString += morseKey[j] + " ";

						}
				}
			}
		}

		console.log(morseString);
}

function decode(){
	var codedString = ".... . .-.. .-.. ---";
	var solvedString = "";
	
	while (codedString != "") {
		while (codedString.search (" ") != -1) {
			if (codedString.substring(0, 3) == " / " ) {
				solvedString += " ";
				codedString = codedString.substring(0,3).pop();
			}

			else{

				for (i = 0; i < morseKey.length; i++){
					if (codedString.split(" ", 1) == morseKey[i]){
						solvedString += alphaKey[i];
					}
				}
				
				codedString = codedString.slice(codedString.split(" ", 1).pop().length+1, codedString.length);
				
			}
		}
		for (i = 0; i < morseKey.length; i++){
			if (codedString == morseKey[i]){
				solvedString += alphaKey[i];
				codedString = "";
			}
		}
	}
	
	//while (codedString.search(" ") != -1);

	console.log("The answer is " + solvedString);
	
	

}

test();
decode();
code();

