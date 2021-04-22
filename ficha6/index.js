//importar o express
const express = require('express');
const fs = require('fs');

//instanciar o express
const app = express();
//definiar  a porta do servidor http
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//default get endpoint
app.get('/', (request, response) => {
    //var body = "<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>"
    var file = fs.readFileSync("./index.html", 'utf-8')

    var date = new Date();

    file = file.replace('{date}', date.toLocaleDateString());

    response.writeHead(200, {
          'Content-Lenght': Buffer.byteLength(file),
          'Content-Type': 'text/html'
      });
      response.end(file);
});

//metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  fs.open('log.txt', 'a', function (err, fd) {
    console.log('File was created' + fd);
  });
});