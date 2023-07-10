var socket = io.connect('http://192.168.100.61:3007/')
var username = document.getElementById("username")
var message = document.getElementById("message")
var send = document.getElementById("send")
var chat = document.getElementById("chat")

send.addEventListener("click", function () {
    socket.emit("message", {
        username: username.value,
        message: message.value
    })
})

socket.on("new-msg", function (data) {
    console.log(data);
    chat.innerHTML += '<div class="container">' + '<strong>' + data.username + ': </strong>' + data.message + '</div>';
})