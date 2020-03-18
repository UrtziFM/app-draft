const passport = require('passport')

const register = (req, res, next) => {
  passport.authenticate('Register', (err, user) => {
    if (err || !user) {
      const error = new Error(err ? err.message : 'There was an error creating the user')
      return next(error)
    }

    login(req, res, next)
  })(req, res, next)
}


const login = (req, res, next) => {
  passport.authenticate('Login', (err, token) => {
    if (err || !token) {
      const error = new Error('There was an error login in')
      return next(error)
    }

    res.status(200).json({ token: `Bearer ${token}` })
  })(req, res, next)
}

const isLoggedIn = (req, res, next) => {
  res.status(200).json('User is logged in')
}

module.exports = {
  register,
  login,
  isLoggedIn
}
