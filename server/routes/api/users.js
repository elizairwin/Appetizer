const express = require('express');
const router = express.Router();
const userController = require('../../app/api/controllers/users');


router.route('/register')
    .post(userController.create);

router.route('/authenticate')
    .post(userController.authenticate);


  module.exports = router;


