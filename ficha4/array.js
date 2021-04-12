/*var array = [];



array.push(
    function () {
        console.log("Hello World")
    }
);

array.push(function(params) {

});

var array2 = [2,3,4,5,6]

for (let i = 0; i < array2.length; i++) {
    array2[0](i + 1);
}

for (let i = 0; i < array2.length; i++) {
    const element = array2[i];
    console.log("Element: " + element + "at index: " + i)
    
}

console.log(" ");



array2.forEach(function(element, i) {
    console.log("Element: " + element + "at index: " + i)
});*/

var person = {
    name: "David",
    age: 23,
    gender: "Male"
};

var personAsJSON = JSON.stringify(person);

var property = "name";

console.log(person[property]);

console.log(personAsJSON.age);

var personAsObject = JSON.parse('{"name":"David","age":23,"gender":"Male"}');

console.log(personAsObject.name);

const Emitter = require("./emitter.js");
/*---------------------------------------------------------*/

var emitter = require("./emitter.js");
var constants = require("./config.js");

//Criacao de uma nova instancia de classe emitter
var emitter = new Emitter();

//invocacao do metodo ON
emitter.on(constants.events.LOGIN, function(user) {
    console.log("O evento login 1 foi despoletado");
});

emitter.on(constants.events.LOGIN, function() {
    console.log("O evento login 2 foi despoletado")
});

emitter.on(constants.events.LOGOUT, function() {
    console.log("O evento logout foi despoletado")
});

emitter.emit(contants.events.LOGIN);
emitter.emit(contants.events.LOGOUT);