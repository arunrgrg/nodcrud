const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/user'

const app = express()


mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', function() {
    console.log("connected to data base")
})

app.use(express.json())

const userrouter = require('./routers/user')
app.use('/user', userrouter)

app.listen(9000, () => {
    console.log("server started")
})