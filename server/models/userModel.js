const  { Sequelize } = require('sequelize');
const  db = require('../config/userDatabase.js');

const { DataTypes } = Sequelize;

const Users = db.define('test',{
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
    }
},{
    freezeTableName:true
});

module.exports = Users;
