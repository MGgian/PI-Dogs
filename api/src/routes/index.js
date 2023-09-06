const { Router } = require('express');
const dogRouter = require('./DogRoutes');
const temperamentsRouter = require('./TemperametsRoutes');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router(); // ESTE ENRRUTADOR ES QEL QUE VA A TENER LA RESPONSABILIDAD DE DEFINIR LAS RUTAS 





// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dog', dogRouter ); //cualquier peticion a /dog, que vaya dogRouter
router.use('/temperaments', temperamentsRouter ); // cualquier peticion a /temperaments, que vaya a temperamentsRouter



module.exports = router;

//ESTE MODULO SE ENCARGARA DE IMPORTA LAS RUTAS 
