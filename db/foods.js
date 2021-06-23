var mongoose = require('mongoose')
var foodSchema = mongoose.Schema({
    food_name: String,
    shop_name: String,
    img_url: String,
    sales: Number,
    price: Number
})

var FoodModel = mongoose.model('foods', foodSchema)

var findFoods = (name) => {
    return FoodModel.find({ 'shop_name': name })
}

var bestFoods = () => {
    return FoodModel.find().sort({ 'sales': -1 })
}

var foods = () => {
    return FoodModel.find()
}

var updateFood = (food_name, sales) => {
    return FoodModel.updateMany({ 'food_name': food_name }, { $set: { sales } }).then(() => {
        return true
    }).catch(() => {
        return false
    })
}

var findFoodCount = (food_name) => {
    return FoodModel.find({ 'food_name': food_name })
}
module.exports = {
    findFoods,
    bestFoods,
    foods,
    updateFood,
    findFoodCount

}