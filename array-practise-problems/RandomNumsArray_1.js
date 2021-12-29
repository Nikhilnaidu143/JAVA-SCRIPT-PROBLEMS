let array = new Array();

/* filling array with random 3 didgit numbers. */
function fillArrayWithRandNums(){
   for(let i = 1; i <= 10; i++){
      let randNum = Math.floor(Math.random()*900+100);
      array.push(randNum);
   }
}
/* printing array */
function printArray(){
   fillArrayWithRandNums();
   for(let i = 0; i < array.length; i++){
      console.log(array[i]);
   }
}
/* finding second largest and smallest numbers without sorting the array. */
function findSecondLargest_smallest(){
   let largestNum = array[0];
   let secondLargestNum = array[0];
   
   let smallestNum = array[0];
   let secondSmallestNum = array[0];

   for(let i = 1; i < array.length; i++){
      if(largestNum < array[i]){
         secondLargestNum = largestNum;
         largestNum = array[i];
      }
      else if(secondLargestNum < array[i]){
         secondLargestNum = array[i];
      }
      if(smallestNum > array[i]){
         secondSmallestNum = smallestNum;
         smallestNum = array[i];
      }
      else if(secondSmallestNum > array[i]){
         secondSmallestNum = array[i];
      }
   }
   console.log("Second largest number :- " + secondLargestNum);
   console.log("Second smallest number :- " + secondSmallestNum);
}

/* Calling functions */
printArray();
findSecondLargest_smallest();