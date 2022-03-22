const { sequelize, comentario } = require('../models');

comentario.findAll({include:['post','usuario']}).then(
    dados => {
        console.log(dados.map( c => c.toJSON()));
        sequelize.close();
    }
)