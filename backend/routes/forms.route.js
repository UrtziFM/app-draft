const express = require('express');
const app = express();
const formRoute = express.Router();

// Form model
let Form = require('../models/forms');

// Add Form
formRoute.route('/create').post((req, res, next) => {
  Form.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Forms
formRoute.route('/').get((req, res) => {
  Form.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Form
formRoute.route('/read/:id').get((req, res) => {
  Form.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Form (in case it has been repeated by user)
formRoute.route('/update/:id').put((req, res, next) => {
  Form.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Form
formRoute.route('/delete/:id').delete((req, res, next) => {
  Form.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = formRoute;
