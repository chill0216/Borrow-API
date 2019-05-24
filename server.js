const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const db = require('./config/db')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({ extended: true }))

// Connect DB
mongoose.connect(db.database.url, { useNewUrlParser: true })

const database = mongoose.connection

// Routes
require('./app/routes')(app, database)

app.listen(port, () => {
    console.log('Listening')
})
