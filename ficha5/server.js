//importar o express
const { response } = require('express');
const express = require('express');
const fs = require('fs');


//funcao pra ler um ficheiro com o caminho passado como argumento de forma assincrona
function readFileSync(path){
    var content = fs.readFileSync(path);
    return content;
}

function writeFileSync(path, data){
    fs.writeFileSync(path, data);
}

//instanciar o express
const app = express();
//definiar  a porta do servidor http
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//default get endpoint
app.get('/', (request, response) => {
    res.send('Lista de todos os Users!')
});

//get endpoint do /users
app.get('/users', (request, response) => {
    var persons = readFileSync('./person.json');
    res.send(JSON.parse(persons));
});

app.post('/users', function(request, response){

    var persons = JSON.parse(readFileSync('./person.json'));
    var length = Object.keys(persons).length;
    var id = ++length;
    var newPerson = request.body;
    newPerson = id;
    persons["person" + id] = newPerson;
    writeFileSync('./person.json', JSON.stringify(persons))
    res.send(persons);
});

app.delete('/users', function(request, response){
    var persons = JSON.parse(readFileSync('./person.json'));
    var id = request.body.id;
    var person = persons["person" + id];
    if(person != undefined){
        delete persons["person" + id];
        writeFileSync('./person.json', JSON.stringify(persons));
        response.send(persons);
    }
    else{
        response.send("ID inesistente")
    }
});

app.get('/users/:id', (request, response) => {
    var persons = JSON.parse(readFileSync('./person.json'));
    var id = request.body.id;
    var person = persons["person" + id];
    if(person != undefined){
        response.send(person);
    }
    else{
        response.send("ID inesistente")
    }
});

app.put("/users/:id", (request, response) => {
    var persons = JSON.parse(readFileSync('./person.json'));
    var id = request.params.id;
    var person = persons["person" + id];
    if(person != undefined){
        persons["person" + id] = request.body;
        persons["person" + id].id = id;
        writeFileSync('./person.json', JSON.stringify(persons));
        response.send(persons);
    }
    else{
        response.send("ID inesistente")
    }

}),


//metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
