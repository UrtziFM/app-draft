const passport = require('passport')

const isAuthenticated = (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    if (err || !user) {
      return res.status(401).json('Unauthorized user')
    }

    next()
  })(req, res, next)
}

module.exports = {
  isAuthenticated
}
