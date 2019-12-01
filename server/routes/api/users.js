const express = require("express");
const router = express.Router();
const userController = require("../../app/api/controllers/users");

router.route("/register").post(userController.create);

router.route("/authenticate").post(userController.authenticate);

router.get("/restaurant/:username", userController.getRestaurantAndPermissions);

router.put("/customizeRestaurant/:userid", userController.customizeRestaurant)

module.exports = router;
