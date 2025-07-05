// Rutas para acompañamientos
const express = require('express');
const router = express.Router();
const {
  registrarMovilidad,
  obtenerMovilidades,
} = require('../controllers/movilidadController');


router.post('/', registrarMovilidad);
router.get('/', obtenerMovilidades);

module.exports = router;