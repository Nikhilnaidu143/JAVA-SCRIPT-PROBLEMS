let array = new Array(); //array declaration.

/** Finding and filling array with repeated numbers like 11,22,33 etc., */
function repeatedTwiceNums(){
    for(let i = 0; i <= 100; i++){
        if((i%11)==0){
            array.push(i);
        }
    }
}

/** Printing array. */
function printingArray(){
    repeatedTwiceNums();
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

printingArray(); //Calling function.