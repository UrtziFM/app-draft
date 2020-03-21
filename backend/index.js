require('dotenv').config();


const express = require('express'),
      path = require('path'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      createError = require('http-errors'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      dbConfig = require('./database/db');



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
const formRoute = require('./routes/forms.route')

const app = express();


app.use(cors()); 
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.use('/forms', formRoute)

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


app.use((err, req, res, next) => {
   // render the error page
   res.status(err.status || 500).json(err.message)
 })
 
 module.exports = app
 