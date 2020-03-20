require('dotenv').config()
require('./config/db')

const createError = require('http-errors')
const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const hbs = require('hbs')

const passport = require('passport')
require('./config/passport')

const indexRouter = require('./routes/index.routes')
const authRouter = require('./routes/auth.routes')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

hbs.registerHelper('json', context => {
  return JSON.stringify(context)
})


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize())

app.use('/', indexRouter);
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500).json(err.message)
})


module.exports = app;
