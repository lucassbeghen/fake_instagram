module.exports = (sequelize, dataTypes) => {

    let comentario = sequelize.define(
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

    comentario.associate = (models)=>{
        comentario.belongsTo(models.Post,{foreignKey:'posts_id', as:'post'}),
        comentario.belongsTo(models.usuario,{foreignKey:'usuarios_id', as: 'usuario'})
    }

        return comentario;
}