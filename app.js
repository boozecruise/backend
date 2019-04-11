// app.js

const express = require('express');
const bodyParser = require('body-parser');

const bar = require('./routes/bar.route'); //Imports routes for the bars
//initialize our express app
const app = express();

// set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://user1:testtest@boozecluster1-3uc06.gcp.mongodb.net/test?retryWrites=true'
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//set up bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/bars', bar);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});


