//Linha 1----------------------------------------------------------------------
// calcular IMC
/*function calculateIMC(weight, height){
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

logIMC(200, 2);*/
//-------------------------------------------------------------------------------------

//Linha2-------------------------------------------------------------------------------

/*function invertString(str){
    var inv = '';
    for (let index = str.lenght -1; index >= 0 ; index--) {
        inv+=str[index];
    }
    return inv;
}

var invertedStr = invertString('Hoje e Domingo');
console.log(invertedStr);*/


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

/*function countletter(str, letter){
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
*/

//alinha 5-------------------------------------------
/*function calculateWorkingHours(he, me, se, hs, ms, ss){

    if(he < 8 || hs > 18){
        console.log('Horario nao permitido')
        return;
    }

    var enterInSeconds = he * 3600 + me * 60 + se;
    var exitInSeconds = hs * 3600 + ms * 60 + ss;

    var timeInSeconds = exitInSeconds - enterInSeconds;

    var remainerHour = timeInSeconds % 3600;
    var hours = (timeInSeconds - remainerHour) / 3600;
    var remainderMinutos = remainerHour % 60;
    var minutos = (remainerHour - remainderMinutos) / 60;

    console.log('Tempo de Trabalho: ' + hours + ':' + minutos + ':' + remainderMinutos);

    

    var x = 0;

        //08.30.59
        //16.00.00

        //07.29.01
}

calculateWorkingHours(8,35,0,16,0,30)*/


//Alinea 6---------------------------------------------------------------

/*function drawRectangle(width, height){

    var count = 0;
    var line = '';
    for (let i = 0; i < width; i++) {
        line+='*';
        count++;
    }

    for (let j = 0; j < height; j++) {
        console.log(line); 
        count++;
    }

    console.log(count)
}

drawRectangle(5, 3)*/

//Alinha 7 ===========================================

/*function drawTriangle(height) {
    for (let j = 0; j < height + 1; j++) {
        var line = '';
        for (let i = 0; i < j; i++) {
            line += '*';
        }
        console.log(line)
    }
}

drawTriangle(10)*/


//Alinha 8================================================================

/*function drawBox(width, height) {
    for (let j = 0; j < height + 1; j++) {
        var line = '';
        for (let i = 0; i < width; i++) {
            if (j == 0 || j == height  || i == 0 || i == width -1){
                line += '*';
            }
            else{
                line += ' '
            };
        };
        console.log(line)
    }
}
console.log('')
drawBox(10 , 10)*/

//Alinha 9=========================================

/*var student1 = {firstName: 'Pedro',lastName: 'Marques',age: 20,grade: 16.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student2 = {firstName: 'David',lastName: 'Tiago',age: 22,grade: 15.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student3 = {firstName: 'Sofia',lastName: 'Boni',age: 23,grade: 10.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student4 = {firstName: 'Marco',lastName: 'Saint',age: 21,grade: 9.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student5 = {firstName: 'Andre',lastName: 'Raul',age: 19,grade: 6.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student6 = {firstName: 'Ana',lastName: 'Duarte',age: 19,grade: 18.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student7 = {firstName: 'Joana',lastName: 'Matos',age: 30,grade: 18.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student8 = {firstName: 'Paulo',lastName: 'Figueira',age: 40,grade: 20, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student9 = {firstName: 'Iva',lastName: 'Santos',age: 28,grade: 1, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};

var studentsList = [];

studentsList.push(student1);
studentsList.push(student2);
studentsList.push(student3);
studentsList.push(student4);
studentsList.push(student5);
studentsList.push(student6);
studentsList.push(student7);
studentsList.push(student8);
studentsList.push(student9);

function displayGrades(array){
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        console.log(student.getGrade());
    }
}

displayGrades(studentsList);*/

//Alinha 10 =================================================================

var student1 = {firstName: 'Pedro',lastName: 'Marques',age: 20,grade: 16.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student2 = {firstName: 'David',lastName: 'Tiago',age: 22,grade: 15.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student3 = {firstName: 'Sofia',lastName: 'Boni',age: 23,grade: 10.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student4 = {firstName: 'Marco',lastName: 'Saint',age: 21,grade: 9.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student5 = {firstName: 'Andre',lastName: 'Raul',age: 19,grade: 6.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student6 = {firstName: 'Ana',lastName: 'Duarte',age: 19,grade: 18.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student7 = {firstName: 'Joana',lastName: 'Matos',age: 30,grade: 18.5, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student8 = {firstName: 'Paulo',lastName: 'Figueira',age: 40,grade: 20, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};
var student9 = {firstName: 'Iva',lastName: 'Santos',age: 28,grade: 1, getGrade: function(){
    return this.firstName + ' ' + this.lastName + 'com idade: ' + this.age + 'teve: ' + this.grade
}};

var studentsList = [];

studentsList.push(student1);
studentsList.push(student2);
studentsList.push(student3);
studentsList.push(student4);
studentsList.push(student5);
studentsList.push(student6);
studentsList.push(student7);
studentsList.push(student8);
studentsList.push(student9);

function displayGrades(array){
    for (let i = 0; i < array.length; i++) {
        const student = array[i];
        console.log(student.getGrade());
    }
}

displayGrades(studentsList);

function getBestGrade(array){
    var max = array[0].grade;
    for (let i = 0; i < array.length; i++) {
        if (array[i].grade > max.grade){
            max = array[i];
        }
    }
    return max;
}

var bestGrade = getBestGrade(studentsList)
console.log()
console.log('O melhor Aluno foi')
console.log(bestGrade.getGrade());
