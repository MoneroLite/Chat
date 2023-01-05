const express = require('express');
const http = require('http');
const { Server } = require('socket.io')
const cors = require('cors');
const route = require('./route')

const port = 5000;
const app = express();

app.use(cors({ origin: '*' }))
app.use(route)

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
        method: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    socket.on('join', ({name, room}) => {
        socket.join(room)

        socket.emit('message', {
 
        })
    })
    io.on('disconnect', () =>{
        console.log('Disconnect io');
    })
 })

server.listen(port, () => {
    console.log(`server is running, port ${port}`);
})