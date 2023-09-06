const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const temperamentsRouter = Router();

const {postDogTemperament} = require("../handlers/temperamentsHandler")



temperamentsRouter.get("/", postDogTemperament);


module.exports = temperamentsRouter;