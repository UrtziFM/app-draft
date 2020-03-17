const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const User = require('../models/User')

const jwtSecret = process.env.JWT_SECRET || 'development-secret'


passport.use(
  'register',
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password', session: false },
    (email, password, done) => {
      User.findOne({ email })
        .then(user => {
          if (user) {
            const err = new Error('There is already an account registered with this email')
            return done(err, null)
          }

          bcrypt.genSalt(12, (err, salts) => {
            if (err) {
              return done(err, null)
            }

            bcrypt.hash(password, salts, (hashError, encryptedPass) => {
              if (hashError) {
                return done(hashError, null)
              }

              const newUser = new User({
                email,
                password: encryptedPass
              })

              newUser
                .save()
                .then(user => done(null, user))
                .catch(err => done(err, null))
            })
          })
        })
        .catch(err => done(err, null))
    }
  )
)

passport.use(
  'login',
  new LocalStrategy(
    { usernameField: 'email', passwordField: 'password', session: false },
    (email, password, done) => {
      User.findOne({ email })
        .then(user => {
          if (!user) {
            const err = new Error('No user found with this email')
            return done(err, null)
          }

          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
              const matchError = new Error('Incorrect email or password')
              return done(matchError, null)
            }

            jwt.sign({ id: user._id }, jwtSecret, { expiresIn: 36000 }, (jwtErr, token) => {
              if (jwtErr || !token) {
                const error = new Error('There was an unexpected error, try again later')
                return done(error, null)
              }

              done(null, token)
            })
          })
        })
        .catch(err => done(err, null))
    }
  )
)

passport.use(
  'jwt',
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret
    },
    (payload, done) => {
      const { id } = payload

      User.findById(id)
        .then(user => done(null, user))
        .catch(err => done(err, null))
    }
  )
)
