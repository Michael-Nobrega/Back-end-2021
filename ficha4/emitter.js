//classe
class Emitter {
    constructor(){
        //propriadade
        this.events = {};
    }
}


//funcao ou metodo
Emitter.prototype.on = function(type, listener) {

    if(this.events[type] == undefined){
        this.events[type] = [];
    }
    this.events[type].push(listener);

}

Emitter.prototype.emit = function(type) {
    if(this.events[type] != undefined){
        this.events[type].array.forEach(function(listener) {
            listener();
        })
    }
}

module.exports = Emitter

// cricao de uma nova instancia da classe emiter
var emitter = new Emitter();
// invocacao do metodo ON

emitter.on("login", function() {
    console.log("O evento login foi despoletado")
});



emitter.on("login", function() {
    console.log("O evento logout foi despoletado")
});

var x = 0;