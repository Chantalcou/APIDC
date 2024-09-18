// api/db.js
const { Pool } = require("pg");
const dotenv = require("dotenv");

// Cargar variables de entorno
dotenv.config();

// Crear una instancia de Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Método para realizar consultas a la base de datos
const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = {
  query,
};
