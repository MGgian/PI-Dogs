const { default: axios } = require("axios")

const chargeTemperamentsToBD = async () => {
    let dogsAPI = await axios.get(URL);

    dogsAPI.data.forEach((dog)=> {
        if (dog.temperament) {
            const temps = dog.temperament.split(", ");
            temps.forEach((temp)=>
             Temperament.findOrCreate({
                where: {
                    name: temp,
                }
             }))
        };
    });
};

const getAllTemperaments = async () => {
    return await Temperament.findAll();
};

module.exports = {
    chargeTemperamentsToBD,
    getAllTemperaments,
};