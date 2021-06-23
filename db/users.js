var mongoose = require('mongoose');
var userSchema =mongoose.Schema({
    username: {type: String},
    password: {type: String},
})

var UserModel = mongoose.model('user', userSchema);
UserModel.createIndexes();

var save = (data) => {
    var user = new UserModel(data);
    return user.save()
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        })
}

var findLogin = (data) => {
    return UserModel.findOne(data);
}

module.exports = {
    save,
    findLogin
}