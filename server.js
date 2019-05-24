const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const db = require('./config/db')

const app = express()
const port = 8000

app.use(bodyParser.urlencoded({ extended: true }))

// Connect DB
const uri = "mongodb+srv://cjhill02:<password>@cluster0-oi6y6.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

// Routes
require('./app/routes')(app, {})

app.listen(port, () => {
    console.log('Listening')
})
