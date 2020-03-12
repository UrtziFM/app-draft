var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Endpoint to check the server availability
router.get('/ping', (req, res, next) => {
  res.status(200).send('Server alive!')
})


module.exports = router;
