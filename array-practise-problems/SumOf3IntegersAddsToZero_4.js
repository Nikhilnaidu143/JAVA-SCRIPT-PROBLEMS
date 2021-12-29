let nums = [0 , -1 , 2 , 3 , -3 , 1];

/** Finding sum of three integers adds to zero in the nums array. */
function findingsumOfThreeIntegersAddsToZero(){
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                let sum = nums[i]+nums[j]+nums[k];
                if(sum == 0){
                    console.log(nums[i] + " + " + nums[j] + " + " + nums[k] + " = 0");
                    console.log("--------------");
                }
            }
        }
    }
}

findingsumOfThreeIntegersAddsToZero(); //Calling function.