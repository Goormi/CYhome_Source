const {Sequelize} = require('sequelize');

const db = new Sequelize(process.env.rds_database, process.env.rds_user, process.env.rds_password,{
    host: process.env.rds_host,
    dialect: "mysql"
});

module.exports = db;
