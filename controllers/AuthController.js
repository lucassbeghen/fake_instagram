const { usuario } = require('../models');

const AuthController = {
    
    showLogin: (req,res) => {
        res.render('auth/login');
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: (req,res) => {
        res.render('index');
    },

    validacaoRegistro: async (req,res) => {
        //capturando nome, email e senha da requisição
        let {nome, email, senha} = req.body;

        // adicionar um novo usuário no banco de dados
        let Usuario = await usuario.create(
            {nome, email, senha}
        )

        //Direcionar o usuário para a rota /home
        res.redirect('/home');
    }


}

module.exports = AuthController;