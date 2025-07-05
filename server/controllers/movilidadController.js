const pool = require('../database/db');

const registrarMovilidad = async (req, res) => {
  const { nombre, tipo, punto_salida, destino, horario, cupos } = req.body;

  try {
    await pool.query(
      'SELECT registrar_movimiento($1, $2, $3, $4, $5, $6)',
      [nombre, tipo, punto_salida, destino, horario, cupos]
    );

    res.status(201).json({ mensaje: 'Movilidad registrada correctamente' });
  } catch (error) {
    console.error('Error al registrar movilidad:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerMovilidades = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movilidad ORDER BY creado_en DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener movilidades:', error.message);
    res.status(500).json({ error: 'Error al obtener movilidades' });
  }
};

module.exports = {
  registrarMovilidad,
  obtenerMovilidades,
};