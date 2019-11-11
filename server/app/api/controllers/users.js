const userModel = require('../models/users');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
module.exports = {
 create: function(req, res, next) {
  //To create new users, this function has model query too create new user into database.
  userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "User added successfully!!!", data: null});
      
    });
 },

 //In this function we search for user in database by email id and compare plain password passed through login form with database hashed password, if password match we generate jwt token by passing user id and secret key, and have set 1hr validity of the token.
authenticate: function(req, res, next) {
  userModel.findOne({email:req.body.email}, function(err, userInfo){
     if (err) {
      next(err);
     } 
     else {

if(bcrypt.compareSync(req.body.password, userInfo.password)) {
    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
    res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
}
else{
    res.json({status:"error", message: "Invalid email/password!!!", data:null});
}
        }
    });
 },
}