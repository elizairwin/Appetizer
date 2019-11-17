var dbRestaurant = require("../../models/restaurants");

// Routes
// =============================================================
module.exports = function(app) {

 app.get("/customrestaurantdata/:username", (req, res) => {
   console.log("Inside route");
   console.log(req.params.username);
   dbRestaurant.find({username: req.params.username})
     .then(dbRestaurant => {
       res.json(dbRestaurant);
     })
     .catch(err => {
       res.json(err);
     });
 });

 // app.post("/customizeRestaurant/:userid", ({ body }, res) => {
 // app.post("/customizeRestaurant/:userid", (req, res) => {
 app.post("/customizeRestaurantName/:userid", (req, res) => {
     // console.log("test3");
     // console.log(req.body);
     // console.log(req.params.userid);
     dbRestaurant.updateOne(
       {"username": req.params.userid,
        "restaurantname": req.body.restaurantname
       })
       .then(dbRestaurant => {
         console.log("Done");
         console.log(dbRestaurant);
         res.redirect("../../index.html");
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.post("/customizeRestaurantTagline/:userid", (req, res) => {
     // console.log("test3");
     // console.log(req.body);
     // console.log(req.params.userid);
     dbRestaurant.updateOne(
       {"username": req.params.userid,
        "restauranttagline": req.body.restauranttagline
       })
       .then(dbRestaurant => {
         console.log("Done");
         console.log(dbRestaurant);
         res.redirect("../../index.html");
       })
       .catch(err => {
         res.json(err);
       });
   });

   app.post("/customizeRestaurantAboutText/:userid", (req, res) => {
     // console.log("test3");
     // console.log(req.body);
     // console.log(req.params.userid);
     dbRestaurant.updateOne(
       {"username": req.params.userid,
        "restaurantabouttext": req.body.restaurantabouttext
       })
       .then(dbRestaurant => {
         console.log("Done");
         console.log(dbRestaurant);
         res.redirect("../../index.html");
       })
       .catch(err => {
         res.json(err);
       });
   });
}