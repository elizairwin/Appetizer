var dbRestaurant = require("../../models/restaurants");

// Routes
// =============================================================
module.exports = function(app) {

// Routes
app.post("/customizeRestaurant", ({ body }, res) => {
 console.log(body);
 dbRestaurant.create(body)
   .then(dbRestaurant => {
     console.log("Done");
     // res.redirect("../exerciseall.html");
   })
   .catch(err => {
     res.json(err);
   });
});
}