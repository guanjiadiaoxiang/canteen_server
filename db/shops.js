var mongoose = require('mongoose')
var shopSchema = mongoose.Schema({
    shop_name: String,
    img_url: String,
})

var ShopModel = mongoose.model('Shops', shopSchema)

var findShops = () => {
    return ShopModel.find()
}

var findShop = (name) => {
    return ShopModel.findOne({'shop_name': name})
}
module.exports = {
    findShops,
    findShop
}


