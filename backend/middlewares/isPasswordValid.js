const isPasswordValid = (req, res, next) => {
    const { password } = req.body
    const PASSWORD_REGEXP = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/
  
    if (!PASSWORD_REGEXP.test(password)) {
      const err = new Error('Password needs lowercase, uppercase, number and 8 digits')
      return next(err)
    }
  
    next()
  }
  
  module.exports = {
    isPasswordValid
  }
  