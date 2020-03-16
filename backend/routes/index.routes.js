const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/ping', (req, res, next) => {
  res.status(200).json('Server alive!')
})

module.exports = router
