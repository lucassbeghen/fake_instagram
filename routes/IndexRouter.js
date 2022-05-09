var express = require('express');
var router = express.Router();

const AuthController = require("../controllers/AuthController");

router.get('/', AuthController.showLogin);
router.get('/registro',AuthController.showRegistro);
router.get('/home', AuthController.showHome);
router.post('/registro', AuthController.validacaoRegistro);

module.exports = router;
