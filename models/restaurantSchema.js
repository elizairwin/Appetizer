const mongoose = require("mongoose");
//Define a schema
const Schema = mongoose.Schema;
const RestaurantSchema = new Schema({
  userRestaurantName: {
    type: String,
    trim: true,
    default: "Your Restaurant Name Goes Here"
  },
  userRestaurantTagline: {
    type: String,
    trim: true,
    default: "Your Tag Line Goes Here"
  },
  userRestaurantAboutText: {
    type: String,
    trim: true,
    default: "Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit"
  },
  userAppetizerHeader: {
    type: String,
    trim: true,
    default: "Appetizers"
  },
  userAppetizerOneName: {
    type: String,
    trim: true,
    default: "Appetizer 1"
  },
  userAppetizerOneDescription: {
    type: String,
    trim: true,
    default: "Use this space to describe the dish, including ingredients."
  },
  userAppetizerOnePrice: {
    type: String,
    trim: true,
    default: "$9.95"
  },
  userHoursWeekday: {
    type: String,
    trim: true,
    default: "5pm-10pm"
  },
  userHoursWeekend: {
    type: String,
    trim: true,
    default: "4pm-11pm"
  },
  userRestaurantAddress: {
    type: String,
    trim: true,
    default: "Your Restaurant Address",
  },
  userNumber: {
    type: String,
    trim: true,
    default: "+00 000 000000",
  }
});

module.exports = RestaurantSchema;