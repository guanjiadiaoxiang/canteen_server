var ShopModel = require('../db/shops.js')
var FoodModel = require('../db/foods.js')
const { param } = require('../routes/index.js')

var getShops = async (req, res) => {
    var result = await ShopModel.findShops()
    res.send(result)
}

var getShopDetail = async (req, res) => {
    var myUrl = new URL('http://localhost:3000' + req.url)
    var shopName = myUrl.searchParams.get('name')
    var shop = await ShopModel.findShop(shopName)
    var foods = await FoodModel.findFoods(shopName)
    res.send({
        msg: 'ok',
        shop: shop,
        foods: foods
    })
}
var getBestFoods = async (req, res) => {
    var foods = await FoodModel.bestFoods()
    res.send({
        msg: 'ok',
        foods: foods
    })
}

var getSearchFoods = async (req, res) => {
    var foods = await FoodModel.foods()
    let url = new URL('http://localhost:3000' + req.url)
    var searchStr = url.searchParams.get('search')
    let arr = searchStr.split('')
    let searchFoods = []
    foods.forEach((food) => {
        let item = arr.find((item) => {
            return food.food_name.indexOf(item) !== -1
        })
        if (item !== undefined) {
            searchFoods.push(food)
        }
    })
    res.send(searchFoods)
}
module.exports = {
    getShops,
    getShopDetail,
    getBestFoods,
    getSearchFoods
}