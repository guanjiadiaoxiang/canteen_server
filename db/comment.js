var mongoose = require('mongoose')
var commentSchema = mongoose.Schema({
    username: String,
    food_name: String,
    shop_name: String,
    comment: String,
    date: Date
})

var CommentModel = mongoose.model('comments', commentSchema)

var saveComment = (comment) => {
    var comment = new CommentModel(comment)
    return comment.save()
}
var findComments = (username) => {
    return CommentModel.find({username})
}
module.exports = {
    saveComment,
    findComments
}