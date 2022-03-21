const Sequelize = require("sequelize");
const dbConfig = require("../database/config/config");
const dbConn = new Sequelize(dbConfig);

dbConn.query("select * from usuarios", Sequelize.QueryTypes.SELECT)
.then(
    data => {
        console.log(data);
        dbConn.close();
    }
);