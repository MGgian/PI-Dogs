const axios = require ('axios');

const { Dog } = require("../models/Dog");



const getAllDogs = async () => {
    const newdog = await axios.get("https://api.thedogapi.com/v1/breeds")
    return newdog.data

}

const getDogsByName = async (name) => {
    const allDogs = await getAllDogs();

    const breedsByName = await allDogs.filter((breed)=>{
        return breed.name.toLowerCase().incluides(name.toLowerCase());
    });

    if (!breedsByName.length) throw new Error (` The ${name} breed does not exist`);

    return breedsByName;

};








// const breedsFilteredByTemp = async (temperament) => {
//     let dogs = await getAllDogs();
//     console.log(temperament);
//     console.log(dogs);
//     return dogs.filter((dog) =>
//       dog.temperament.some((temp) => temperament.includes(temp))
//     );
//   };

// const getAllDogs = async (name, email, phone) => {
//     await 
// }

module.exports = {getAllDogs, getDogsByName, getDogsByName};