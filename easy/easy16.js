
function subtString(str, str2){
		var arr = str2.split("");

		for (i=0;i < str2.length; i++){	

			str = str.replace(arr[i], '', 'g');

			}
		
		return str;
}
	


console.log(subtString("Daily Programmer", "aeiou"));





