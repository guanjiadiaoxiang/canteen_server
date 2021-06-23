var OrderModel = require('../db/order.js')

// var getOrders = async (req, res) => {
//     var url = new URL('http://localhost:3000' + req.url)
//     var shop_name = url.searchParams.get('shop_name')
//     var orders = await OrderModel.findAdminOrders()
//     var adminOrders = orders.map((item) => {
//         var admin_foods = item.foods.map((item) => {
//             if (item.shop_name === shop_name) {
//                 return item
//             }
//         })
//         return admin_foods
//     })

//     res.send(adminOrders)
// }

var getOrders = async (req, res) => {
    var url = new URL('http://localhost:3000' + req.url)
    var shop_name = url.searchParams.get('shop_name')
    var orders = await OrderModel.findAdminOrders(shop_name)
    
    res.send(orders)
}
module.exports = {
    getOrders
}