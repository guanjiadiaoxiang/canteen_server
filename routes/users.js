var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.get('/getUser', usersController.getUser);
router.get('/logout', usersController.logout);
router.post('/write', usersController.saveComment)
router.get('/comments', usersController.getComments)
router.post('/saveOrder', usersController.saveOrder)
router.get('/orders', usersController.getOrders)
router.get('/sales', usersController.updateFood)

module.exports = router;
