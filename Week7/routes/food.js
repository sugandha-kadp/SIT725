const express = require('express');
const router = express.Router();
const Controllers = require('../controllers');

// Route to get all food items
router.get('/', Controllers.foodController.getAllFood);

module.exports = router;
