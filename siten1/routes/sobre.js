const express = require('express');
const router = express.Router();

// Adicionando um log para depuração
router.get('/', function(req, res) {
  console.log("Chegou na rota '/sobre'!"); // Esse log vai aparecer no terminal
  res.render('sobre', { title: 'Sobre' });
});

module.exports = router;
