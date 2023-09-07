const axios = require ('axios');

const { Dog } = require("../db");



const getAllDogs = async () => {
    const newdog = await axios.get("https://api.thedogapi.com/v1/breeds")
    return newdog.data

}

const getDogsByName = async (name) => {
    const allDogs = await getAllDogs();

    const breedsByName = allDogs.filter ( breed=> 
      breed.name.toLowerCase().includes(name.toLowerCase()));
        // return breed.name.toLowerCase() === name.toLowerCase();
    

    if (!breedsByName.length) throw new Error (` The ${name} breed does not exist`);

    return breedsByName;

};

const createDog = async (image, name, heigth, weigth, life_span) => {
 const newDog = await Dog.create({image, name, heigth, weigth, life_span})
 return newDog;
}










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

module.exports = {getAllDogs, getDogsByName, getDogsByName, createDog};