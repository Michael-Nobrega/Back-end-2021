
/*function started() {
    console.log("Started Download");
}

function update() {
    for (let i = 0; i <= 100; i++) {
        console.log(i + "% of download completed ")

    }
}




function completed() {
    console.log("Completed Dowbload")
}

function performdownload(startedF, updateF, completedF) {
    startedF();
    for (let i = 0; i <= 100; i++) {
        updateF(i);
    }
    completedF();
}



// performdownload(started, update, completed);

// var log = require("./log.js");



// console.log(log.message);
// console.log(log.functionObj("Hello"));*/

//-----------------------------------------------

var arrayUtils = require("./ArrayUtils.js");
var array = [12, 4, 6, 88, 9, 0];

var subArray = []

console.log('O array esta vazio? ' + arrayUtils.isEmpty(array));
console.log('O array esta vazio? ' + arrayUtils.isEmpty(array));
console.log('O array esta vazio? ' + arrayUtils.isEmpty(array));
console.log('O array esta vazio? ' + arrayUtils.isEmpty(array));


var value = 6;
console.log('O indice do valor ' + value + 'e: ' + arrayUtils.inndexOf(array, value));


var subArray = arrayUtils.subArray(array, 0, 3);
console.log('O sub-array e: ' + subArray);
console.log('Os arrays sao do mesmo tamanho: ' + sameSize);

var invertedArray = arrayUtils.reverse(array);
console.log('O array invertido e: ' + sameSize);

var invertedArray = arrayUtils.reverse(array, 0 ,4);
console.log('O array invertido e: ' + sameSize);
