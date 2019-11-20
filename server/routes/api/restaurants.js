const express = require('express');
const router = express.Router();
const restaurantController = require('../../app/api/controllers/restaurants');

router.post('/restaurants', restaurantController.getAll);
router.post('/restaurants/create', restaurantController.create);
router.post('/restaurants/:restaurantId', restaurantController.getById);
router.put('/restaurants/:restaurantId', restaurantController.updateById);
router.delete('/restaurants/:restaurantId', restaurantController.deleteById);
module.exports = router;