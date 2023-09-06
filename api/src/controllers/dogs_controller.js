const axios = require ('axios');

const { Dog } = require("../models");



const getAllDogs = async () => {
    const newdog = await axios.get("https://api.thedogapi.com/v1/breeds")
    return newdog.data

}

module.exports = {getAllDogs};