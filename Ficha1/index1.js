

function calculateIMC(weight, height){
    var imc = weight/ Matj.pow(height, 2);
    return imc;
}


var imc = calculateIMC(80, 2);

console.log(imc);