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
        // main restaurant info
        username: "user001", 
        userRestaurantName: "Your Restaurant Name Goes Here",
        userRestaurantTagline: "Your Tag Line Goes Here",
        userRestaurantAboutText: "Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit Lorem ipsum dolor sit amet sale referrentur Aliquid abhorreant cu vim, veri cetero e mel sea ne nostro communet veri eripuit",
        
        // menu info
        userAppetizerHeader: "Appetizers"
        // userSaladsHeader: "Soup & Salads",
        // userMainsHeader: "Mains",
        // userDessertsHeader: "Desserts",

        // userAppetizerOneName: "Appetizer 1",
        // userAppetizerOneDescription: "Use this space to describe the dish, including ingredients.",
        // userAppetizerOnePrice: "$9.95",
        // userAppetizerTwoName: "Appetizer 2",
        // userAppetizerTwoDescription: "Use this space to describe the dish, including ingredients.",
        // userAppetizerTwoPrice: "$10.95",
        // userAppetizerThreeName: "Appetizer 3",
        // userAppetizerThreeDescription: "Use this space to describe the dish, including ingredients.",
        // userAppetizerThreePrice: "$11.95",
        // userAppetizerFourName: "Appetizer 4",
        // userAppetizerFourDescription: "Use this space to describe the dish, including ingredients.",
        // userAppetizerFourPrice: "$12.95",

        // userSoupOneName: "Soup 1",
        // userSoupOneDescription: "Use this space to describe the dish, including ingredients.",
        // userSoupOnePrice: "$9.95",
        // userSoupTwoName: "Soup 2",
        // userSoupTwoDescription: "Use this space to describe the dish, including ingredients.",
        // userSoupTwoPrice: "$9.95",

        // userSaladOneName: "Salad 1",
        // userSaladOneDescription: "Use this space to describe the dish, including ingredients.",
        // userSaladOnePrice: "$14.95",
        // userSaladTwoName: "Salad 2",
        // userSaladTwoDescription: "Use this space to describe the dish, including ingredients.",
        // userSaladTwoPrice: "$14.95",
        // userSaladThreeName: "Salad 3",
        // userSaladThreeDescription: "Use this space to describe the dish, including ingredients.",
        // userSaladThreePrice: "$16.95",

        // userMainOneName: "Main Dish 1",
        // userMainOneDescription: "Use this space to describe the dish, including ingredients.",
        // userMainOnePrice: "$19.95",
        // userMainTwoName: "Main Dish 2",
        // userMainTwoDescription: "Use this space to describe the dish, including ingredients.",
        // userMainTwoPrice: "$19.95",
        // userMainThreeName: "Main Dish 3",
        // userMainThreeDescription: "Use this space to describe the dish, including ingredients.",
        // userMainThreePrice: "$19.95",
        // userMainFourName: "Main Dish 4",
        // userMainFourDescription: "Use this space to describe the dish, including ingredients.",
        // userMainFourPrice: "$19.95",
        // userMainFiveName: "Main Dish 5",
        // userMainFiveDescription: "Use this space to describe the dish, including ingredients.",
        // userMainFivePrice: "$19.95",
        // userMainSixName: "Main Dish 6",
        // userMainSixDescription: "Use this space to describe the dish, including ingredients.",
        // userMainSixPrice: "$19.95",

        // userDessertOneName: "Dessert 1",
        // userDessertOneDescription: "Use this space to describe the dish, including ingredients.",
        // userDessertOnePrice: "$9.95",
        // userDessertTwoName: "Dessert 2",
        // userDessertTwoDescription: "Use this space to describe the dish, including ingredients.",
        // userDessertTwoPrice: "$9.95",
        // userDessertThreeName: "Dessert 1",
        // userDessertThreeDescription: "Use this space to describe the dish, including ingredients.",
        // userDessertThreePrice: "$9.95",

        // // hours
        // userHoursWeekday: "5pm-10pm",
        // userHoursWeekend: "4pm-11pm",

        // // contact
        // userRestaurantAddress: "Your Restaurant Address",
        // userNumber: "+00 000 000000",
        // userEmail: "info@myrestaurant.com",

        // // socials
        // userRestaurantFacebook: " ",
        // userRestaurantInstagram: " ",
        // userRestaurantYelp: " ",

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
        "userRestaurantName": req.body.userRestaurantName
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
        "userRestaurantTagline": req.body.userRestaurantTagline
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
        "userRestaurantAboutText": req.body.userRestaurantAboutText
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
   app.post("/customizeAppetizerHeader/:userid", (req, res) => {
    console.log("inside update appetizer route");
     dbRestaurant.updateOne(
       {"username": req.params.userid,
        "userAppetizerHeader": req.body.userAppetizerHeader
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