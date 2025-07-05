const pool = require('../database/db');

const registrarReporte = async (req, res) => {
  const { descripcion, ubicacion, hora_riesgo } = req.body;

  try {
    await pool.query(
      'SELECT registrar_reporte($1, $2, $3)',
      [descripcion, ubicacion, hora_riesgo]
    );

    res.status(201).json({ mensaje: 'Reporte registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar reporte:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerReportes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reportes ORDER BY creado_en DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener reportes:', error.message);
    res.status(500).json({ error: 'Error al obtener reportes' });
  }
};

module.exports = {
  registrarReporte,
  obtenerReportes,
};