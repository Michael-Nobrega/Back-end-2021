function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}


Person.prototype.greet = function() {
    console.log("Hello" + this.firstName + " " + this.lastName + " " + this.age + "" + this.gender);
}

Person.prototype.gender = "N/A"; 

var p1 = new Person("David", "Jardim", 23); // xyz111
var p2 = new Person("Maria", "Pontes", 53); // xyz112
var p3 = p1; // xyz111
var p4 = new Person("Maria", "Pontes", 53); // xyz113


//comapara referencia
console.log(p1 == p3);
console.log(p1 == p2);
console.log(p2 == p4);

var a = 10; //xyz 114
var b = 10; //xyz 115

//comprar valor
console.log(a == b)

//tipos basicos
//int , float , double, char

//tipos de referencia
// array, string, object

p1.gender = "M"
p2.gender = "F";


p1.greet();
p2.greet();


console.log(p1.__proto__);
console.log(p2.__proto__);
console.log(p1.__proto__ == p2.__proto__);