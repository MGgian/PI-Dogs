const axios = require ('axios');

const { Dog } = require("../db");



// const getAllDogs = async () => {
//     const newdog = await axios.get("https://api.thedogapi.com/v1/breeds")
//     return newdog.data;

const getAllDogs = async () => {
  let apiData = await axios.get(URL + "?api_key=" + API_KEY);

    const dogsAPI = apiData.data.map((dog) => ({
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      minHeight: parseInt(dog.height.metric.split("-")[0]),
      maxHeight: parseInt(dog.height.metric.split("-")[1]),
      minWeight: parseInt(dog.weight.metric.split("-")[0]),
      maxWeight: parseInt(dog.weight.metric.split("-")[1]),
      minLifeSpan: parseInt(dog.life_span.split("-")[0]),
      maxLifeSpan: parseInt(dog.life_span.split("-")[1]),
      Temperaments: dog.temperament?.split(", "),
      breed_group: dog.breed_group,
      db: false,
    }));
  
    let dbData = await Dog.findAll({
      include: {
        model: Temperament,
        through: { attributes: [] },
        attributes: ["name"],
      },
    });
    
    dbData = dbData?.map((dog) => {
      let mappedDog = {
        ...dog.dataValues,
        Temperaments: dog.dataValues.temperaments.map((t) => t.name), // Crear una nueva propiedad "temperament" y asignarle los temperamentos unidos en una cadena
      };
      delete mappedDog.temperaments; // es para eliminar la prop temperaments con t mninuscila par aque no tenga dos veces el misma dato y conserve el que tiene el formato que ami me interesa
      return mappedDog;
    });
    const allDogs = [...dogsAPI, ...dbData];
  
    return allDogs;
  };



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