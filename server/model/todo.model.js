const todoModel = require('./todo.mongo');

async function getTodoListModel() {
    const res = await todoModel.find({});
    return res;
}

async function updateTodoItemModel(_id, values) {
    const res = await todoModel.findOneAndUpdate({
        _id,
    }, values);
    return res;
}


async function deleteTodoItemModel(_id, values) {
    const res = await todoModel.findOneAndDelete({
        _id,
    });
    return res;
}
// async function initTodo() {
//     try {
//         await todoModel.updateOne({
//             _id: null,
//             // content: 'testNew'
//         }, {
//             content: 'createTest2'
//         }, {
//             upsert: true
//         }).then(res => {
//             console.log(res, 'res')
//         })
//     } catch (error) {
//         console.log(error, 'createError')
//     }
// }


module.exports = { 
    getTodoListModel,
    updateTodoItemModel,
    deleteTodoItemModel,
    // initTodo
}