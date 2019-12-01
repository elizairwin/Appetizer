const RestaurantSchema = require("./restaurantSchema");
const mongoose = require("mongoose");
module.exports = mongoose.model("Restaurant", RestaurantSchema);
