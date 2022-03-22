const { sequelize, Post } = require('../models');

Post.findAll({include:['comentarios','usuario']}).then(
    dados => {
        console.log(dados[0].toJSON());
        sequelize.close();
    }
)