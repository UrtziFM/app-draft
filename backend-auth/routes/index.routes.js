const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/ping', (req, res, next) => {
  res.status(200).json('Server alive!')
})

module.exports = router

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }) // This can send variables to the view
  // res.status(200).json({ title: 'Express' })
})
