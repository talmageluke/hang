var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcryptjs")

const User = require('../models/User')

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, (req, username, password, done) => {
    // Match User
    User.findOne({ username: username })
        .then((user, err) => {
            if (err) { return done(err); }
            //if the user doesnt exist
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            else {
                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "Wrong password" });
                    }
                });
            }
        })
        .catch(err => {
            return done(null, false, { message: err });
        });
})
);

passport.use(
    'signup',
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },

        async (req, email, password, done) => {
            try {
                const checkEmail = await User.checkExistingField('email', email);

                if (checkEmail) {
                    return done(null, false, {
                        statusCode: 409,
                        message: 'Email already registered, log in instead',
                    });
                }

                const checkUserName = await User.checkExistingField('username', req.body.username);
                if (checkUserName) {
                    return done(null, false, {
                        statusCode: 409,
                        message: 'Username exists, please try another',
                    });
                }
                // Create new user
                const newUser = new User({ firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, password, username: req.body.username });
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                return done(null, user);
                            })
                            .catch(err => {
                                return done(null, false, { message: err });
                            });
                    });
                });
            } catch (err) {
                return done(null, false, { statusCode: 400, message: err.message });
            }
        }),
);



module.exports = passport