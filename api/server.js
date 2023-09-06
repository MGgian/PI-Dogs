const express = require('express');
const app = express();
const { sequelize } = require('./db'); // Importa la instancia de Sequelize

// Configura el puerto
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Rutas
// Configura tus rutas aquí

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
