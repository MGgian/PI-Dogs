const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js'); // IMPORTO LAS RUTAS DEL INDEX QUE ESTA EN /ROUTES
const dogRouter = require('./routes/DogRoutes.js');

require('./db.js');

const server = express(); // quiero que el index lo ponga a escuchar 

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev')); //middleware
server.use((req, res, next) => {
  console.log ("Hola, estoy pasando por el middleware");
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next(); //El next se usa para avisar que siga leyendose el codigo. 
});
server.use(dogRouter);

server.use('/', routes); // esta importando index.js (routes)

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// server.get("/", (req, res) => {
//   res.status(200).send("OK");
// });                                   //DONDE VA ESTO?(LINEA 36 A 38) IRIA DENTRO DE LA LINEA 29?
                                         //duda resuelta, esto va en el archivo index de /routes. BORRAR ESTE MENSAJE

module.exports = server;


//este modulo tiene la responsabilidad de crear la aplicacion 
