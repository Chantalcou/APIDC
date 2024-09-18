// api/index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para analizar JSON
app.use(express.json());

// Importar rutas
// Ejemplo: app.use('/api/usuarios', require('./routes/usuarios'));

// Ruta raíz para verificar si el servidor funciona
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
