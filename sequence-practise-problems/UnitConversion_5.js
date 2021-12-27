let feet = 12;
let inches = 42;

let inchesToFeet = inches/feet;
console.log("a) " + inchesToFeet + " feets.");

let lengthInFt = 60;
let breadthInFt = 40;

let lenInMet = (lengthInFt/3);
let breInMet = (breadthInFt/3);
console.log("b) " + lenInMet + "meters" + " X " + breInMet + "meters");

let areaInSQFt = lengthInFt*breadthInFt;
let areaInSQMt = areaInSQFt/10;
let areaOf25InSQMt = areaInSQMt*25;
let areaOf25InAcres = areaOf25InSQMt/4047;
console.log("c) " + areaOf25InAcres + "acre");
