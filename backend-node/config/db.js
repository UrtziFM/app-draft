const debug = require('debug')('backend-node:db')
const mongoose = require('mongoose')

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/formdb'

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    debug(`Connected to the database: ${DB_URI}`)
  })
  .catch(() => {
    debug('There was an error connecting to the database!')
  })

mongoose.set('useCreateIndex', true)
