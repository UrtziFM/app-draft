const createError = require('http-errors')

const Form = require('../models/forms')

const getForms = (req, res, next) => {
  Form.find()
    .then(forms => {
      //res.status(200).render('forms', { forms: forms })
      res.status(200).json({forms})
    })
    .catch(err => {
      next(err)
    })
}

// We will receive the form id in req.params.id
const getFormById = (req, res, next) => {
  const id = req.params.id

  Form.findById(id)
    .then(form => {
      //res.status(200).render('form', { form: form })
      res.status(200).json({form})
    })
    .catch(() => {
      next(createError(404))
    })
}

const createForm = (req, res, next) => {
  const newForm = new Form({
    name: req.body.name,
    email: req.body.email,
    check: req.body.check,
    recruiter: req.body.recruiter,
    progress: req.body.progress,
    subject: req.body.subject
  })

  newForm
    .save()
    .then(() => {
      res.redirect('/forms')
    })
    .catch(err => {
      next(err)
    })
}

const editForm = (req, res, next) => {
  const id = req.body.id
  const name = req.body.name
  const email = req.body.email
  const check = req.body.check
  const recruiter = req.body.recruiter
  const progress = req.body.progress
  const subject = req.body.subject

  Book.findByIdAndUpdate(id, { name, email, check, recruiter, progress, subject })
    .then(() => {
      res.redirect('/forms')
    })
    .catch(err => {
      next(err)
    })
}

const deleteForm = (req, res, next) => {
  const id = req.params.id

  Book.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json('Deleted Form!')
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  getForms,
  getFormById,
  createForm,
  editForm,
  deleteForm,
}
