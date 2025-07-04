const pool = require('../database/database');

const registrarUsuario = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;

  try {
    const result = await pool.query(
      'SELECT registrar_usuario($1, $2, $3) AS mensaje',
      [nombre, correo, contrasena]
    );

    const mensaje = result.rows[0].mensaje;

    if (mensaje === 'Usuario registrado correctamente') {
      res.status(201).json({ mensaje });
    } else {
      res.status(400).json({ mensaje });
    }
  } catch (error) {
    console.error('Error al registrar usuario:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerUsuarios = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener usuarios:', error.message);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
};