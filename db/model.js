const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/canteen')
const canteen = mongoose.connection
canteen.on('connected', function () {
    console.log('数据库连接成功')
})