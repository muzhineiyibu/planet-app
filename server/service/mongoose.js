const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://todo-api:bin19941023@todotest.szfgf.mongodb.net/todoTest?retryWrites=true&w=majority'


mongoose.connection.on('connected', () => {
    console.log('mongodb连接成功');
});

mongoose.connection.on("error", function () {
    console.error("数据库连接失败");
});

mongoose.connection.on("disconnected", function () {
    console.log("MongoDB connected disconnected.");
});
 
const mongoConnect = async () => {
    try {
       await mongoose.connect(MONGO_URL).catch(() => {
           console.log('gggg')
       });
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
  mongoConnect
} ;