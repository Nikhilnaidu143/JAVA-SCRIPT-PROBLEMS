let rand1 = Math.floor(Math.random()*900+100);
let rand2 = Math.floor(Math.random()*900+100);
let rand3 = Math.floor(Math.random()*900+100);
let rand4 = Math.floor(Math.random()*900+100);
let rand5 = Math.floor(Math.random()*900+100);

if(rand1 > rand2 && rand1 > rand3 && rand1 > rand4 && rand1 > rand5) {
	console.log(rand1 + " is maximum.");
}
else if(rand2 > rand1 && rand2 > rand3 && rand2 > rand4 && rand2 > rand5) {
	console.log(rand2 + " is maximum.");
}
else if(rand3 > rand1 && rand3> rand2 && rand3 > rand4 && rand3 > rand5) {
	console.log(rand3 + " is maximum.");
}
else if(rand4 > rand1 && rand4 > rand2 && rand4 > rand3 && rand4 > rand5) {
	console.log(rand4 + " is maximum.");
}
else {
	console.log(rand5 + " is maximum.");
}


if(rand1 < rand2 && rand1 < rand3 && rand1 < rand4 && rand1 < rand5) {
   console.log(rand1 + " is minimum.");
}
else if(rand2 < rand1 && rand2 < rand3 && rand2 < rand4 && rand2 < rand5) {
   console.log(rand2 + " is minimum.");
}
else if(rand3 < rand1 && rand3 < rand2 && rand3 < rand4 && rand3 < rand5) {
   console.log(rand3 + " is minimum.");
}
else if(rand4 < rand1 && rand4 < rand2 && rand4 < rand3 && rand4 < rand5) {
   console.log(rand4 + " is minimum.");
}
else {
   console.log(rand5 + " is minimum.");
}

