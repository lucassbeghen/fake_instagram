const { sequelize, Post, comentario } = require('../models');

Post.findAll({include:[{model: comentario, as:'comentarios', include:'usuario'},'usuario']}).then(
    dados => {
        console.log(JSON.stringify(dados[0].toJSON()));
        sequelize.close();
    }
)