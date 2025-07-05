const express = require('express');
const router = express.Router();
const {
  registrarReporte,
  obtenerReportes,
} = require('../controllers/reportesController');


router.post('/', registrarReporte);
router.get('/', obtenerReportes);

module.exports = router;