const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
username: {
 type: String,
 trim: true,
 required: true,
    },
restaurantname: {
 type: String,
 trim: true,
 required: true,
},
restauranttagline: {
 type: String,
 trim: true,
 required: true,
},
restaurantabouttext: {
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