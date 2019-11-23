const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
username: {
 type: String,
 trim: true,
 required: true,
 },
userRestaurantName: {
 type: String,
 trim: true,
 required: true,
},
userRestaurantTagline: {
 type: String,
 trim: true,
 required: true,
},
userRestaurantAboutText: {
 type: String,
 trim: true,
 required: true,
},
userAppetizerHeader: {
    type: String,
    trim: true,
    required: true,
   }
});  
module.exports = mongoose.model('Restaurant', RestaurantSchema)