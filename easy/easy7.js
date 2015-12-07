function test() {
	console.log("This will be fun once I learn it.")
}

var morseKey = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var alphaKey = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function code(){
	var stepString;

	console.log("code works");
}

function decode(){
	var codedString = ".... .-.. .-.. ---";
	var letter = codedString.split(" ");
	var solvedString = "";


	if (codedString.substring(0, 3) == " / " ) {
		solvedString += " ";
	}

	else{

		for (i = 0; i < morseKey.length; i++){
			if (codedString.split(" ", 1) == morseKey[i]){
				solvedString += alphaKey[i];
				codedString = codedString.slice(0, codedString.split(" ", 1).length);
		}
		

	}

	console.log("The answer is " + solvedString);

}

test();
code();
decode();

