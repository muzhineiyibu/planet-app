const app = require('./app.js');
const http = require('node:http');
const https = require('https');

https.createServer({})
const { mongoConnect } = require('./service/mongoose');
// const { initTodo } = require('./model/todo.model.js');
const PORT = process.env.PORT || 8000;


const server = http.createServer(app);
async function startServer() {
    await mongoConnect();
    // await initTodo();
    server.listen(PORT, () => {
        console.log(`listen on ${PORT}`)
    })
}

startServer();

