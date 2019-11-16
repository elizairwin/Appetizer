const express = require('express');
const router = express.Router();
const restaurantController = require('../app/api/controllers/restaurants');

router.get('/', restaurantController.getAll);
router.post('/', restaurantController.create);
router.get('/:restaurantId', restaurantController.getById);
router.put('/:restaurantId', restaurantController.updateById);
router.delete('/:restaurantId', restaurantController.deleteById);
module.exports = router;