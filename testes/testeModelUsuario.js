const { sequelize, usuario } = require('../models');

usuario.findAll({include:'amigos'}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)

/*usuario.create(
    {
        nome:"Lucas",
        email:"lucas@ibm.com",
        senha:"aleatória"
    }
)
*/