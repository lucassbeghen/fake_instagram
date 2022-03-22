const { sequelize, comentario } = require('../models');

comentario.findAll({include:['usuarios','post']}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)