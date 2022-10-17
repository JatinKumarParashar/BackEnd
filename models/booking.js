const Sequelize = require('sequelize');

const sequelize = require('../util/database');


const booking = sequelize.define('booking', {
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

module.exports = booking;