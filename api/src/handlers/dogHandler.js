const { getAllDogs } = require("../controllers/dogs_controller");
const Dog = require("../models/Dog");

const getDogRouterHandler = (req, res) => {
    const {id} = req.params;
    res.send(`ESTA RUTA VA A ENVIAR EL DETALLE DEL USUARIO DEL ID ${id}`)
    // dogRouter.get("/:idRaza", (req, res) => {
    //     res.send("esta ruta trae la info de un usuario determinado por ID");
    // });

};


const getDogsRouterHandler = async (req, res) => {
    const {raza} = req.query; //o por query?
    if (raza) { 
        res.send  (`quiero buscar todos los que sean ${raza}`);
    }else{
        try {
            const dogs = await getAllDogs()  
            res.status(200).send(dogs) 
            
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
            
        }
        };

    // dogRouter.get("/", (req, res) => {
    //     res.send("Esta ruta trae la info de todos los usuarios");
    
    // });
};





const postDogCreateRouterHandler = (req, res) => {
    res.send("NIY: ESTA RUTA CREA UN NUEVO USUARIO")
    // dogRouter.post("/dogs", (req, res) => {
    //     res.send("Esta ruta crea un nuevon usuario");
    // });

    

    
}



module.exports = {
    getDogRouterHandler,
    getDogsRouterHandler,
    postDogCreateRouterHandler,

};