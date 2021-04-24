const express = require('express')
const mongoose = require('mongoose')
const { removeAllListeners } = require('nodemon')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

// Creating Mongoose Connection
mongoose.connect(url)
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected')
})

app.use(express.json())

// Creating my Router
const alienRouter = require('./routes/aliens')
// Adding my middleware
app.use('/aliens', alienRouter)

// Server Listening Port
app.listen(9000, () => {
    console.log('Server Started')
})