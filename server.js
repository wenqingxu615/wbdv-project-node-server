const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('dotenv').config('./env')
const uri = process.env.MONGODB_URI
const header = process.env.REACT_HEADER

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))

const mongoose = require('mongoose');
mongoose.connect(
    uri, // change it to your local mongodb url or heroku url
    {useNewUrlParser: true, useUnifiedTopology: true});

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', header);
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});



require('./controllers/users-controller')(app)
require('./controllers/books-controller')(app)
require('./controllers/offers-controller')(app)

app.listen(process.env.PORT || 4000)