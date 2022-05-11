const mongoose = require('mongoose');

const TodoSChema = new mongoose.Schema({
    isFinish: {
        type: Boolean,
        default: false,
        required: true,
    },
    content: {
        type: String,
        default: '',
        required: true,
    }

})
const todoModel = mongoose.model('todoList', TodoSChema);

module.exports = todoModel