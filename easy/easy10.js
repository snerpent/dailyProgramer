
function isNumeric(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function verifyPhone(phNum){
	var rxp = /(\d{3}\.\d{3}\.\d{4}|\d{3}\-\d{3}\-\d{4}|\(\d{3}\) ?\d{3}\.\d{4}|\d{3}\-\d{4}|\d{10})/;
	var str = (rxp.test(phNum) && phNum.replace(rxp,"").length == 0 ) ? 'Valid' : 'Invalid';
	alert ( str + ' phone number');

}

verifyPhone(prompt('Enter a phone number to validate', ''));

