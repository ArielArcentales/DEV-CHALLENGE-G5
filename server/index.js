// Backend con Express
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./database/db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ hora: result.rows[0].now });
  } catch (err) {
    console.error('Error al conectar con la base de datos:', err.message);
    res.status(500).json({ error: 'Error en la conexión a la base de datos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});