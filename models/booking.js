const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    number: {
        type: Sequelize.TEXT,
        allowNull: false,
        

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        
    }

})

module.exports = User;