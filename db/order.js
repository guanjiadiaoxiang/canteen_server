var mongoose = require('mongoose')
var orderSchema = mongoose.Schema({
    username: String,
    pay: Number,
    foods: Array,
    food_name: String,
    img_url: String,
    shop_name: String,
    price: Number,
    date: Date
})

var OrderModel = mongoose.model('orders', orderSchema)

var saveOrder = (order) => {
    var order = new OrderModel(order)
    return order.save()
}
var findOrders = (username) => {
    return OrderModel.find({username})
}
var findAdminOrders= (shop_name) => {
    return OrderModel.find({shop_name})
}
module.exports = {
    saveOrder,
    findOrders,
    findAdminOrders
}