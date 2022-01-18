import {Sequelize} from "sequelize";

const db = new Sequelize('goormy_first_database','admin','groomy1!',{
    host: "goormy-database-1.ce7mkzss15bi.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql"
});

export default db;
