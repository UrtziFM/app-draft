require('dotenv').config();


const express = require('express'),
      path = require('path'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      createError = require('http-errors'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      dbConfig = require('./database/db');

const passport = require('passport');
require('./config/passport');


// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up port with express js
const authRouter = require('./routes/auth.routes')
const formRoute = require('./routes/forms.route')
const indexRouter = require('./routes/index.routes')

const app = express();


app.use(cors()); 
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())

app.use('/', indexRouter)
app.use('/forms', formRoute)
app.use('/auth', authRouter)

// Create port
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler

// error handler
//app.use(function (err, req, res, next) {
//   console.error(err.message); // Log error message in our server's console
//   if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
//   res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
// });

app.use((err, req, res, next) => {
   // render the error page
   res.status(err.status || 500).json(err.message)
 })
 
 module.exports = app
 