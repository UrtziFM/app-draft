const debug = require('debug')('backend-auth:db')
const mongoose = require('mongoose')

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/userdb'

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => debug(`Connected to DB ${DB_URI}`))
  .catch(() => debug(`Could not connect to DB ${DB_URI}`))