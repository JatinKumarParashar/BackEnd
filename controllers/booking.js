const { json } = require('body-parser');
const { where } = require('sequelize');
const User = require('../models/booking');

exports.postUser=async (req,res,next)=>{
  console.log('123',req.query.username);
   const username=req.body.username;
   const number=req.body.number;
   const email=req.body.email;
   console.log('123',username,number,email);
  const data= await User.create({
        username:username,
        number:number,
        email:email
      })

      res.status(201).json(data);
}


exports.getUser=(req,res,next)=>{
  User.findAll().then(row=>{
      res.json(row);
  })
  }


  exports.deleteUser=(req,res,next)=>{
    const id=req.params.id;
    User.findByPk(id).then((user) => {
        return user.destroy(user);
    
      })
      .then(result => {
        console.log('user has been deleted');
      })
      .catch((err) => {
        console.log(err);
      })
    }
  