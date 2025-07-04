// Rutas para usuarios
const express = require('express');
const router = express.Router();
const {
  registrarUsuario,
  obtenerUsuarios,
} = require('../controllers/usuariosController');

router.post('/', registrarUsuario);
router.get('/', obtenerUsuarios);

module.exports = router;