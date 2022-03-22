module.exports = (sequelize, DataTypes) => {

    let post =  sequelize.define(
        'Post',
        {
            id :{
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            texto:{
                type: DataTypes.STRING(100),
                allowNull: false
            },
            img:{
                type: DataTypes.STRING(100)
            },
            usuarios_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            n_likes:{
                type: DataTypes.INTEGER
            }
        },
        {
            tableName : 'posts',
            timestamps : false
        }
    )

    post.associate = (models)=>{
        post.hasMany(models.comentario,{foreignKey:'posts_id', as:'comentarios'}),
        post.belongsTo(models.usuario,{foreignKey:'usuarios_id', as:'usuario'})
    }

    return post;
}