var express = require('express');
var router = express.Router()
var shopsController = require('../controllers/shops.js')

/* GET home page. */
router.get('/shops', shopsController.getShops)
router.get('/detail', shopsController.getShopDetail)
router.get('/best',  shopsController.getBestFoods)
router.get('/search', shopsController.getSearchFoods)

module.exports = router;
