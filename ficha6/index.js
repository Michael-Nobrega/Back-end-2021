//importar o express
const { request, response } = require('express');
const express = require('express');
const fs = require('fs');

//instanciar o express
const app = express();
//definiar  a porta do servidor http
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//midware
app.use(function (request, response, next) {
  fs.appendFileSync('./log.txt', request.path + ", " + request.method + ", " + new Date() + "\r");
  next()
})


//default get endpoint
app.get('/', (request, response) => {
    var file = fs.readFileSync("./index.html", 'utf-8')
    var date = new Date();
    file = file.replace('{date}', date.toLocaleDateString());
    response.writeHead(200, {
          'Content-Lenght': Buffer.byteLength(file),
          'Content-Type': 'text/html'
      });
      response.end(file);
});

//@name: route parameter
app.get('/user/:name', (request, response) => {
  var file = fs.readFileSync("./index.html", 'utf-8')
  var name = request.params.name;
  file = file.replace('{name}', name);
  response.writeHead(200, {
        'Content-Lenght': Buffer.byteLength(file),
        'Content-Type': 'text/html'
    });
    response.end(file);
});

//@name query parameter
app.get('/user', (request, response) => {
  var file = fs.readFileSync("./index.html", 'utf-8')
  var name = request.query.name;
  var profession = request.query.profession;
  file = file.replace('{name}', name);
  file = file.replace('{profession}', profession);
  response.writeHead(200, {
        'Content-Lenght': Buffer.byteLength(file),
        'Content-Type': 'text/html'
    });
    response.end(file);
});

app.get('/log', (request, response) =>{
  var file = fs.readFileSync("./log.txt", 'utf-8');
  response.writeHead(200, {
    'Content-Lenght': Buffer.byteLength(file),
    'Content-Type': 'text/plain'
  });
  response.end(file);
});



app.get('/log.txt', (request, response) =>{ 
  response.download('./log.txt', function(err){
    if(err != undefined){
      response.status(404);
      response.end("Ocorreu um erro ao ler o ficheiro" + err.message)
    }
    else{
      //Encontrou o ficheiro com sucesso
    }
  })
});

app.get('/clear', (request, response) =>{

  fs.unlink('./log.txt', function name(err){
    if(err){
      response.status(404);
      response.end("Ocorreu um erro ao apagar o ficheiro" + err.message)
    }
    else{
        response.send("file deleted")
    }
  });

  //fs.unlinkSync('./log.txt');
  //response.send("File Deleted");
});


//metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  fs.open('log.txt', 'a', function (err, fd) {
    console.log('File was created' + fd);
  });
});