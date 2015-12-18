



function getDate (month, date, leap) {
		
	var m = [31,28,31,30,31,30,31,31,30,31,30,31];
	var sum = 0;

	if (leap == true){
		m[1]+=1;
	}
	for (i=0; i<month-1; i++){
			sum += m[i];
	}
	sum += date;
	console.log(sum);
	console.log(m[1]);
}

getDate(3,1,true); 
