const { getAllDogs } = require("../controllers/dogs_controller");
const Dog = require("../models/Dog");

// const getDogRouterHandler = (req, res) => {
//     const {id} = req.params;
//     res.send(`ESTA RUTA VA A ENVIAR EL DETALLE DEL USUARIO DEL ID ${id}`)
//     // dogRouter.get("/:idRaza", (req, res) => {
//     //     res.send("esta ruta trae la info de un usuario determinado por ID");
//     // });

// };
const getDogRouterHandler = async (req, res) => {
    const {id} = req.params;
    if(isNaN(id)) {
        console.log("Tendria que buscar en la BDD");
    } else{
        console.log("Tendria que buscar en la api")
    }

    try {
        const user = await getDogRouterHandler(id);
        res.status(200).json("OK");
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// const getDogsRouterHandler = async (req, res) => {
//     const {raza} = req.query; //o por query?
//     if (raza) { 
//         res.send  (`quiero buscar todos los que sean ${raza}`);
//     }else{
//         try {
//             const dogs = await getAllDogs()  
//             res.status(200).send(dogs) 
            
//         } catch (error) {
//             console.log(error)
//             res.status(400).send(error)
            
//         }
//         };

//     // dogRouter.get("/", (req, res) => {
//     //     res.send("Esta ruta trae la info de todos los usuarios");
    
//     // });
// };





const postDogCreateRouterHandler =  async (req, res) => {
    res.send("NIY: ESTA RUTA CREA UN NUEVO USUARIO")
    try {
        const { name, email, phone } = req.body;
        const newUser = await  createUser (name, email, phone);
        res.status(201).json(newUser);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};



module.exports = {
    getDogRouterHandler,
    getDogsRouterHandler,
    postDogCreateRouterHandler,

};