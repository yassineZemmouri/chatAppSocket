var socket = io.connect('http://192.168.100.61:3007/')
var username = document.getElementById("username")
var message = document.getElementById("message")
var send = document.getElementById("send")
var chat = document.getElementById("chat")
var typing = document.getElementById("typing")

send.addEventListener("click", function () {
    socket.emit("message", {
        username: username.value,
        message: message.value
    })
})

message.addEventListener("keypress", function () {
    socket.emit("broad", {
        username: username.value,
    })
})

socket.on("new-msg", function (data) {
    var writer = data.username || 'anonymous'
    typing.innerHTML = ''
    message.value = ''
    console.log(data);
    chat.innerHTML += '<div class="container">' + '<strong>' + writer + ': </strong>' + data.message + '</div>';
})

socket.on("new-broad", function (data) {
    var writer = data.username || 'anonymous'
    console.log(data);
    typing.innerHTML = '<label>' + writer + ' typing</label><img src="./typing-loading.gif" style="width: 20px; height: 16px;" />'
})