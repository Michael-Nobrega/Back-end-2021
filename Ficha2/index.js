//Linha 1----------------------------------------------------------------------
// calcular IMC
function calculateIMC(weight, height){
    var imc = weight/ Math.pow(height, 2);
    return imc;
}

function logIMC(weight, height){
    var imc = calculateIMC(80, 2);
    if(imc < 18.5){
        console.log("IMC: " + imc + ", esta abaixo do peso!");
    }
    else if(imc >= 18.5 && imc < 25){
        console.log("IMC; " + imc + ", esta no peso normal");  
    }
    else if(imc >= 25 && imc < 30){
        console.log("IMC: " + imc + ", esta no peso normal");  
    }
    else{
        console.log("IMC: " + imc + " - Esta obeso!")
    }
}

// dar os valores a variavel
var imc = calculateIMC(80, 2);

console.log(imc);

logIMC(200, 2);
//-------------------------------------------------------------------------------------

//Linha2-------------------------------------------------------------------------------

function invertString(str){
    var inv = '';
    for (let index = str.lenght -1; index >= 0 ; index--) {
        inv+=str[index];
    }
    return inv;
}

var invertedStr = invertString('Hoje e Domingo');
console.log(invertedStr);


//--------------------------------------------------------------------------------------
//Alinha 3 --------------------------------------------------------------------------------

/*function countVogals(str){
    var count = 0;
    var vogals = ['a','e','i','o','u'];

    for (let index + 0; index < str.lenght; index++) {
        for (let j = 0; j < vogals.lenght; j++) {
            if (str[index] == vogals[j]) {
                count++;
            }
        }
    }
    
    for (let index = 0; index < str.lenght; index++) {
        if (str[index] == 'a' || str[index] == 'e' || str[index] == 'i' || str[index] == 'o' || str[index] == 'u') {
            count++;
        }
    }
    return count;
}

var vogals = countVogals('Hello');
console.log(vogals);*/

//alinha 4------------------------------------

function countletter(str, letter){
    var count = 0;
    str = str.toLowerCase();

    for (let index = 0; index < str.lenght; index++) {
        if (str[index] == letter) {
            count++;
        }
    }
    return count;
}

var count = countletter('hello', 'e');
console.log(count);

//alinha 5-------------------------------------------

