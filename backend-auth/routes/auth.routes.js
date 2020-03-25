const express = require('express')

const authController = require('../controllers/auth.controller')
const { isAuthenticated } = require('../middlewares/isAuthenticated')
const { isPasswordValid } = require('../middlewares/isPasswordValid')

const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('register', { title: 'Express' })
})

//views register 


//router.get('/signin', function(req, res, next) {
//    res.render('login', { title: 'Express' })
//})

//views login

router.get('/is-logged', [isAuthenticated], authController.isLoggedIn)

router.post('/register', [isPasswordValid], authController.register)
router.post('/login', [isPasswordValid], authController.login)

module.exports = router

