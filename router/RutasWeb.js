//RutasWeb.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {titulo: 'Estas en el inicio'});
});
  
router.get('/servicios', (req, res) => {
    res.render('servicios', {tituloServicios: 'Pagina Servicios'})
});
module.exports = router;