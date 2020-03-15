require('dotenv').config();
require('./config/db');

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const hbs = require('hbs');
const cors = require('cors');

const indexRouter = require('./routes/index.route');
const formsRouter = require('./routes/forms.route');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// To handle passing data as arguments in hbs functions, we need to stringify them as JSON.
// This function creates a helper to use as {{ json value }}
hbs.registerHelper('json', context => {
  return JSON.stringify(context)
})

const config = {
  application: {
      cors: {
          server: [
              {
                  origin: "localhost:4200/Forms", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                  credentials: true
              }
          ]
      }
  }}

app.use(cors(config.application.cors.server));
app.use(logger('dev'));// Logs in the terminal about how the server runs
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// IMPORTANT: Use SassMiddleware always before express.static to parse the CSS before rendering the page.
app.use(
  sassMiddleware({
    src: path.join(__dirname, './public'), // Source folder with SCSS files
    dest: path.join(__dirname, './public'), // Destination folder to save the CSS files we will use
    debug: true,
    outputStyle: 'compressed' // Compress the produced CSS.
  })
)


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/forms', formsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
