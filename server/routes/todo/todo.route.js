const express =require('express');
const { getTodoList, createTodoItem, updateTodoItem, deleteTodoItems } = require('./todo.controler')
const app = express();
const todoRouter = express.Router();

todoRouter.get('/', getTodoList);

todoRouter.post('/addItem', createTodoItem);

todoRouter.put('/:id', updateTodoItem);

todoRouter.delete('/:id', deleteTodoItems)

module.exports = todoRouter;