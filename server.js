require('dotenv').config();

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// Import the required mongoose module
const mongoose = require('mongoose');
//const connectDb = require('mongoose-connect-db');
const db = mongoose.connect(process.env.DATABASE_URL);

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('wwwroot'));

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
