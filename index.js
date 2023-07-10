const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static('public_html'))

const server = app.listen(3007, () => { console.log("server running at http://localhost:3007..."); })

const sio = socket(server)

sio.on('connection', (visitor) => {
    console.log(`we have new visitor ${visitor.id}`);
    visitor.on("message", function (data) {
        console.log(data.message);
        sio.sockets.emit("new-msg", data)
    })
})
