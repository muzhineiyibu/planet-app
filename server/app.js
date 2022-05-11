const express = require('express');
const app = express();
const planetRouter = require('./routes/planets/planet.route');
const todoRouter = require('./routes/todo/todo.route');


// middleware
app.use(express.json());
app.use(planetRouter)
app.use('/todo', todoRouter)

module.exports = app;