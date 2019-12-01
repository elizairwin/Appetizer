const userModel = require('../../../../models/users');
const restaurantModel = require("../../../../models/restaurants");
const bcrypt = require('bcryptjs'); 
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
    const token = jwt.sign({id: userInfo._id, username: userInfo.name}, req.app.get('secretKey'), { expiresIn: '1h' });
    res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
}
else{
    res.json({status:"error", message: "Invalid email/password!!!", data:null});
}
        }
    });
 },

 getRestaurantAndPermissions: function(req, res, next) {
    userModel.findOne({name:req.params.username}, function(err, userInfo){
        res.json({restaurant: userInfo.restaurant, id: userInfo._id})
    })
 },
 
 customizeRestaurant: function(req, res, next) {
    console.log("inside update name route");
    console.log(req.body, req.params.userid);
    
      userModel.findByIdAndUpdate(req.params.userid, {restaurant: req.body}, {
        runValidators: true
      })
      .then(dbRestaurant => {
        console.log("Done");
        console.log(dbRestaurant);
        res.json(dbRestaurant);
      })
      .catch(err => {
        res.json(err);
      });
 }
}