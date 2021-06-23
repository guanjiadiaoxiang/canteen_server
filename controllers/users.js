var UserModel = require('../db/users.js')
var OrderModel = require('../db/order.js')
var CommentModel = require('../db/comment.js')
var FoodModel = require('../db/foods.js')

var register = async (req, res, next) => {
    var { username, password } = req.body;
    var result = await UserModel.save({
        username,
        password
    });
    if (result) {
        res.send({
            msg: '注册成功',
            status: 0
        })
    } else {
        res.send({
            msg: '注册失败',
            status: -2
        })
    }
}

var login = async (req, res, next) => {
    var { username, password } = req.body;
    var result = await UserModel.findLogin({ username, password });
    if (result) {
        req.session.username = username;
        res.send({
            msg: '登录成功',
            status: 0
        })
    } else {
        res.send({
            msg: '登录失败',
            status: -1
        });
    }
}

var getUser = async (req, res, next) => {
    if (req.session.username) {
        res.send({
            msg: '身份验证成功',
            status: 0,
            data: {
                username: req.session.username
            }
        });
    } else {
        res.send({
            msg: '身份验证失败',
            status: -1
        });
    }
}

var logout = async (req, res, next) => {
    req.session.username = '';
    res.send({
        msg: '退出成功',
        status: 0
    })
}
var saveOrder = (req, res) => {
    var order = req.body
    OrderModel.saveOrder(order)
    // res.send('123')
}
var getOrders = async (req, res) => {
    var url = new URL('http://localhost:3000' + req.url)
    var username = url.searchParams.get('username')
    var orders = await OrderModel.findOrders(username)
    res.send(orders)
}
var saveComment = (req, res) => {
    var comment = req.body
    CommentModel.saveComment(comment)
    // res.send('456')
}
var getComments = async (req, res) => {
    var url = new URL('http://localhost:3000' + req.url)
    var username = url.searchParams.get('username')
    var comments = await CommentModel.findComments(username)
    res.send(comments)
}
var updateFood = async (req, res) => {
    var url = new URL('http://localhost:3000' + req.url)
    var food_name = url.searchParams.get('food_name')
    var count = url.searchParams.get('count')
    count = parseInt(count)
    var foods = await FoodModel.findFoodCount(food_name)
    // var arr = []
    var old_sales = foods[0].sales
    var new_sales = old_sales+count
    // var new_sales = 0
    FoodModel.updateFood(food_name, new_sales)
    res.send({
        new_sales
    })
}
module.exports = {
    register,
    login,
    getUser,
    logout,
    saveOrder,
    getOrders,
    saveComment,
    getComments,
    updateFood
}