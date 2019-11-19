var dbRestaurant = require("../../models/restaurants");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/customrestaurantdata/:username", (req, res) => {
    console.log("Inside get route");
    console.log(req.params.username);
    dbRestaurant.find({username: req.params.username})
      .then(dbRestaurant => {
        console.log(dbRestaurant);
        res.json(dbRestaurant);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/seedinsert", (req, res) => {
    console.log("inside seed route");
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
      res.redirect("../../index.html");
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  });

   app.post("/customizeRestaurantName/:userid", (req, res) => {
    console.log("inside update name route");
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
    console.log("inside update tag line route");
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
    console.log("inside update about text route");
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