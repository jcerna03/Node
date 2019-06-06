
var http = require('http')
var express = require('express')
var socketio = require('socket.io')
var bodyParser = require('body-parser')

var filtro = require('./Aplicacion')

var port = 8082
var app = express()
var Server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/aplication',filtro)
app.use(express.static('public'))


var io = socketio(Server)

Server.listen(port, function () {
    console.log('My app is ready to run on port: '+port)
})
