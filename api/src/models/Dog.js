// const { DataTypes } = require('sequelize');
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.
// module.exports = (sequelize) => {
//   // defino el modelo
//   sequelize.define('dog', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });
// };

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Dog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo según tus necesidades
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Otras propiedades que pueda tener el modelo Dog
    // ...
  });
};
