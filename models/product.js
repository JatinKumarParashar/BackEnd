const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: Sequelize.STRING,  
    image: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports = Product;