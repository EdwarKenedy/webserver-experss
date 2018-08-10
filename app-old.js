const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'aplication/json' });
    let salida = {
      nombre: 'Edward',
      edad: 21,
      url: req.url
    };
    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();
  })
  .listen(8080);
console.log('Escuchando el puerto 8080');
