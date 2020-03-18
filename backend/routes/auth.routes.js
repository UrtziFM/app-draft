const express = require('express')

const authController = require('../controllers/auth.controller')
const { isAuthenticated } = require('../middlewares/isAuthenticated')
const { isPasswordValid } = require('../middlewares/isPasswordValid')

const router = express.Router()

router.get('/is-logged', [isAuthenticated], authController.isLoggedIn)

router.post('/Register', [isPasswordValid], authController.register)
router.post('/Login', [isPasswordValid], authController.login)

module.exports = router
