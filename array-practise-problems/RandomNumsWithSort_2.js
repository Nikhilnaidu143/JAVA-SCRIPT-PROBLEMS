let array = new Array();

/* filling array with random 3 didgit numbers. */
function fillArrayWithRandNums(){
   for(let i = 1; i <= 10; i++){
      let randNum = Math.floor(Math.random()*900+100);
      array.push(randNum);
   }
}

/* sorting the array. */
function sortingArray(){
    fillArrayWithRandNums();
    for(let i = 0; i < array.length; i++){
        for(let j = i; j < array.length; j++){
            if(array[i] > array[j]){
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    /* Printing the sorted array. */
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

/** Finding 2nd largest and smallest numbers by using sorted array. */
function finding2ndLargestSmallestNums(){
    sortingArray();
    console.log("Second smallest number :- " + array[1]);

    console.log("Second largest number :- " + array[array.length-2]);
}

finding2ndLargestSmallestNums(); //Calling function.