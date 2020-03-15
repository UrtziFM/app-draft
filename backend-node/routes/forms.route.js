const express = require('express');

const formsController = require('../controllers/forms.controller');

const router = express.Router();


router.get('/', formsController.getForms)
// This route will assign the value in /:id to a variable name.

router.get('/:id', formsController.getFormById)

router.post('/create', formsController.createForm)
router.post('/edit', formsController.editForm)

router.delete('/:id', formsController.deleteForm)

module.exports = router;