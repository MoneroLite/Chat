const express = require('express');
const http = require('http');
const { Server } = require('socket.io')
const cors = require('cors');
const route = require('./route');
const { addUser, findUser, getRoomUsers, removeUser } = require('./users');

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
        
        const {user} = addUser({name, room})

        socket.emit('message', {
            data: {user: {name: 'Admin'}, message: `Welcome ${user.name}`}
        })

        socket.broadcast.to(user.room).emit('message', {
            data: {user: {name: 'Admin'}, message: `${user.name} has joined`}
        })

        io.to(user.room).emit('joinRoom', {data: { users: getRoomUsers(user.room)}})
    })

    socket.on('sendMessage', ({message, params}) => {
        const user = findUser(params)

        if (user) {
            io.to(user.room).emit('message', {data: {user, message}})
        }
    })

    socket.on('leftRoom', ({ params}) => {
        const user = removeUser(params)

        if (user) {
            const {room, name} = user
            io.to(room).emit('message', {data: {user: {name: 'Admin'}, message: `${name} has left`}})
            io.to(room).emit('joinRoom', {data: { users: getRoomUsers(room)}})
        }
    })

    io.on('disconnect', () =>{
        console.log('Disconnect io');
    })
 })

server.listen(port, () => {
    console.log(`server is running, port ${port}`);
})