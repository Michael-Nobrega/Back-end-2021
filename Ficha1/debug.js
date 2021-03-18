var a = 10;
var b = 5;
var c = a + b;
console.log(c);

function test(msg){
    console.log(msg + ' test');
}

test('hello');
test(5);
test(2,5);
test(21);

var fn = function (){
    console.log('anonymous')
}

fn();
