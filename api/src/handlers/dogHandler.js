const { getAllDogs, getDogsByName, createDog } = require("../controllers/dogs_controller");
const Dog = require("../models/Dog");



const getDogs = async (req, res) => {
 try {
    const {name} = req.query;
    if (name) {
       const dogsName = await getDogsByName(name);
       res.status(200).json(dogsName);
    } else {
       const allDogs = await getAllDogs();
       res.status(200).json(allDogs);
    }
 }catch (error) {
    res.status(404).json({ error: error.message })
//    let status;
//    if(error.message.startsWith("There")) {
//         status = 404;
//         res.status(status).json({error: error.message});
//     } else {
//        status = 500
//        res.status(status).json({error: "ERROR"});
//     }
}
};

const getDogsById = async (req, res) => {
    try {
        const id = req.params.id;
        if(id) {
            const dog = await getAllDogs.getDogsById(id);
            if (!dog.length)
            return res.status(404).json({ error: `ID dog not found, ID = ${id}`});
            return res.status(200).json(dog);

        }else {
            return res.status(400).json({error:"missing id"});
        }
    }catch (error) {
        res.status(500).json({ error: error.message});
    
    }
};
// const getBreedsFilteredByTemp = async (req, res) => {
//     try {
//         const {temperament} = req.query
//         const dogs = await getAllDogs.getBreedsFilteredByTemp(temperament);
//         res.status(200).json(dogs);
//     }catch(error) {
//         res.status(500).json({error: error.message});


//     }
// }


const postDogs =  async (req, res) => {
    try {
        const { image, name, heigth, weigth, life_span } = req.body;
        const newDog = await  createDog (image, name, heigth, weigth, life_span);
        res.status(201).json(newDog);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};



module.exports = {
    getDogs,
    getDogsById,
    // getBreedsFilteredByTemp,
    postDogs,
    
    

}; 