const express = require('express');
const router = express.Router();
const restaurantController = require('../../app/api/controllers/restaurants');

router.get('/restaurants', restaurantController.getAll);
router.post('/restaurants/create', restaurantController.create);
router.put('/restaurants/:restaurantId', restaurantController.updateById);
router.delete('/restaurants/:restaurantId', restaurantController.deleteById);
module.exports = router;