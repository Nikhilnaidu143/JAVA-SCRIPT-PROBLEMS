let map = new Map();  //map intialization.

/** Filling map with keys. */
function fillingMapWithKeys(){
    for(let i = 1; i <= 6; i++){
        map.set(i , 0);
    }
}

/** Die rolls and adding to map. */
function dieRolls(){
    fillingMapWithKeys();
    for(let i = 1; i <= 60; i++){
        let dieRoll = Math.floor(Math.random()*6+1);
        map.set(dieRoll , map.get(dieRoll)+1);
        if(map.get(dieRoll) == 10){
            break;
        }
    }
}

/** Printing Map using ForEach loop */
function printingMap(){
    dieRolls();
    map.forEach((value , key) => {
        console.log(key + " : " + value);
    });
}

let maximum_times = 1;
let minimum_times = 1;

/** Finding number that comes maximum times and minimum times. */
function findMaximumAndMinimum(){
    printingMap();
    for(let i = 1; i <= map.size; i++){
        if(map.get(maximum_times) < map.get(i)){
            maximum_times = i;
        }
        if(map.get(minimum_times) > map.get(i)){
            minimum_times = i;
        }
    }
    console.log("Maximum times :- " + maximum_times);
    console.log("Minimum times :- " + minimum_times);
}

findMaximumAndMinimum(); //Calling function.
