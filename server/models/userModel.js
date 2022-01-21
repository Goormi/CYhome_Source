const  { Sequelize } = require('sequelize');
const  db = require('../config/userDatabase.js');

const { DataTypes } = Sequelize;

const Users = db.define('test',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    period_nohome:{
        type: DataTypes.INTEGER
    },
    num_dependents:{
        type: DataTypes.INTEGER
    },
    period_subscription:{
        type: DataTypes.INTEGER
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

module.exports = Users;
