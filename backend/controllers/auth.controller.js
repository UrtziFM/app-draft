const passport = require('passport')

const login = (req, res, next) => {
  passport.authenticate('login', (err, token) => {
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
  login,
  isLoggedIn
}
