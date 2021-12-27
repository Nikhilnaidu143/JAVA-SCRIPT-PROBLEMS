var date = 15;
var month = 5;

combo = 0;
result = false;

if(month >= 3 && month <= 6) {
	let dateLimit = 30+(month%2);
	if(date >= 1 && date <= dateLimit) {
		combo = (month*100)+date;
		if(combo >= 320 && combo <= 620) {
			result = true;
			console.log(month + "/" + date + " :- " + result);
		}
		else {
			console.log(result);
		}
	}
	else {
		console.log(result);
	}
}
else {
	console.log(result)
}
