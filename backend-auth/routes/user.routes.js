const express = require('express')

const userController = require('../controllers/user.controller')

const router = express.Router()

router.put('/edit', userController.updateUser)
router.post('/', userController.getUserInfo)

module.exports = router
