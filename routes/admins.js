var express = require('express');
var router = express.Router()
var adminsController = require('../controllers/admins.js')

router.get('/orders', adminsController.getOrders)

module.exports = router;