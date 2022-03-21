const { sequelize, comentario } = require('../models');

comentario.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)