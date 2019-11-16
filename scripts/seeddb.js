const mongoose = require("mongoose");
var dbRestaurant = require("../models/restaurants");

// This file empties the Books collection and inserts the books below

mongoose.connect(
 process.env.MONGODB_URI ||
 "mongodb://localhost/customizeRestaurant"
);

const restaurantSeed = [
 {
   username: "user001",
   restaurantname: "Your Restaurant Name Goes Here",
   restauranttagline: "Your Tag Line Goes Here",
   restaurantabouttext: "Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit"
 }
];

dbRestaurant
 .remove({})
 .then(() => dbRestaurant.collection.insertMany(restaurantSeed))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });