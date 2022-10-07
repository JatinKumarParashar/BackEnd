const Sequelize=require('sequelize');
 const sequelize=require('../util/database');

 const Customer=sequelize.define('customers',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
 })


 module.exports=Customer;