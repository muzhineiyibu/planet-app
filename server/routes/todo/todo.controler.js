const { getTodoListModel, updateTodoItemModel, deleteTodoItemModel } = require("../../model/todo.model")

const getTodoList = async(req, res) => {
    const dataList = await getTodoListModel()
    res.send(dataList)
}


const createTodoItem = (req, res) => {
    res.send([])
}


const updateTodoItem = async (req, res) => {
    const { id } = req.params;
    const result = await updateTodoItemModel(id, req.body);
    res.send(result)
}


const deleteTodoItems = async(req, res) => {
    const { id } = req.params;
    const result = await deleteTodoItemModel(id);
    console.log(result, 'result-->')
    res.send(result)
}

module.exports = {
    getTodoList,
    createTodoItem,
    updateTodoItem,
    deleteTodoItems,
}
