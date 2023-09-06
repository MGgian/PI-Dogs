const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const { 
    getDogRouterHandler,
    getDogsRouterHandler,
    postDogCreateRouterHandler,
 } = require("../handlers/dogHandler");


 const dogRouter = Router();

dogRouter.get('/dog', getDogsRouterHandler); // cuidado con la S en dogs!

dogRouter.get("/:id", getDogRouterHandler); // el 'id' crea dentro del objeto params(es el que le pertenece a req)
                                            // que es un objeto y le va a crear un propiedad id con el valor que yo envie 
                                            // en la req.

dogRouter.post("/", postDogCreateRouterHandler);




module.exports = dogRouter;