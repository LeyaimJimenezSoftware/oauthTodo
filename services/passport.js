const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(User => {
    done(null, User)
  })
})
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
    // console.log('AccesToken: ',accessToken);
    // console.log('RefreshTonek: ',refreshToken);
    // console.log('porfile:' ,profile);

      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          console.log('existe')
          done(null, existingUser)
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(User => done(null, User))
          console.log('Nuevo user')
        }
      })
    })
)
