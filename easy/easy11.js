function whatDay(date, month, year) {
	
	var days = ['Sunday','Monday','Tuseday','Wednesday','Thursday','Friday','Saturday'],
		d;


	if (typeof month === 'number'){

		d = new Date(year, month-1, parseInt(date,  10));

	}
	else {

		d = new Date (month + ' ' + parseInt(date, 10) + ' ' + year);
	}

	console.log(d.getDay());
	
}

whatDay(prompt('What the fuck',''));

