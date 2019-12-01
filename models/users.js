const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10; // With "salt round" they actually mean the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash. The higher the cost factor, the more hashing rounds are done. Increasing the cost factor by 1 doubles the necessary time. The more time is necessary, the more difficult is brute-forcing.
const RestaurantSchema = require("./restaurantSchema");
const RestaurantModel = require("./restaurants");
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 email: {
  type: String,
  trim: true,
  required: true
 },
 password: {
  type: String,
  trim: true,
  required: true
 },
 restaurant: RestaurantSchema
},{validateBeforeSave: false});

// hash user password before saving into database
UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    RestaurantModel.create({})
    .then(data => {
        this.restaurant = data;
        next();
    })
    .catch(err => {
        console.log(err);
        this.invalidate("restaurant","Something went wrong when trying to create your Restaurant");
        next();
    })
});
module.exports = mongoose.model('User', UserSchema);
