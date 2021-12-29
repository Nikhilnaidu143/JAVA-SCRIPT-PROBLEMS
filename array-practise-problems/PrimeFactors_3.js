let num = 1000;

var primeFactorsArray = new Array();   //Array declaration.

/** Finding prime factors and filling array with prime factors. */
function primeFactors(){
    for(let i = 2; i*i <= num; i++){
        while((num%i)==0){
            primeFactorsArray.push(i);
            num /= i;
        }
    }
}

/** Printing array of prime factors. */
function printingPrimeFactorsArray(){
    primeFactors();
    for(let i = 0; i < primeFactorsArray.length; i++){
        console.log(primeFactorsArray[i]);
    }
}

printingPrimeFactorsArray(); //calling function.