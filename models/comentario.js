module.exports = (sequelize, dataTypes) => {

    return sequelize.define(
        'comentario',
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            texto: {
                type: dataTypes.STRING,
                allowNull: false
            },
            usuarios_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            posts_id: {
                type: dataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "comentarios",
            timestamps: false
        }

    )

}