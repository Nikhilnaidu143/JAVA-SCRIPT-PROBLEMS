let a = Math.floor(Math.random()*10000);
let b = Math.floor(Math.random()*10000);
let c = Math.floor(Math.random()*10000);

let operation1 = (a+b*c);
let operation2 = (c+a/b);
let operation3 = (a%b+c);
let operation4 = (a*b+c);

if(operation1 > operation2 && operation1 > operation3 && operation1 > operation4){
	console.log(operation1 + " is maximum.");
}
else if(operation2 > operation1 && operation2 > operation3 && operation2 > operation4){
	console.log(operation2 + " is maximum.")
}
else if(operation3 > operation1 && operation3 > operation2 && operation3 > operation4){
   console.log(operation3 + " is maximum.")
}
else{
	console.log(operation4 + " is maximum.")
}


if(operation1 < operation2 && operation1 < operation3 && operation1 < operation4){
   console.log(operation1 + " is minimum.");
}
else if(operation2 < operation1 && operation2 < operation3 && operation2 < operation4){
   console.log(operation2 + " is minimum.")
}
else if(operation3 < operation1 && operation3 < operation2 && operation3 < operation4){
   console.log(operation3 + " is minimum.")
}
else{
   console.log(operation4 + " is minimum.")
}
