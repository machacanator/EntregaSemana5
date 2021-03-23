const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('./models/User');

const saltRounds = 10;

passport.use(
  'register',
  new LocalStrategy(
    {
      usernameField: 'mail',
      passwordField: 'password',
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const previousUser = await User.findOne({ mail: email });

        if (previousUser) {
          const error = new Error('The user is already registered!');
          return done(error);
        }

        const hash = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
          mail: email,
          password: hash,
          cart:[],
        });

        const savedUser = await newUser.save();
        
        done(null, savedUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);