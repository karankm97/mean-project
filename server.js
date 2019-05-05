var express = require('express')
var app = express()
var mongoose = require('mongoose')
var morgan = require('morgan')
var port = 3000
var bodyParser = require('body-parser')
var router = express.Router()
var appRoutes = require('./app/routes/api')(router)
var path = require('path')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.use('/api', appRoutes)

mongoose.connect('mongodb://localhost:27017/tutorial', function(err){
  if(err){
    console.log('Not connected: ' + err)
  }else {
    console.log('Connected');
  }
})

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
})

app.listen(port, function(){
  console.log("The server is running on:", port)
})
