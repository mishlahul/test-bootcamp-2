const passport =require("passport")
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
})

passport.deserializeUser(function(user, done) {
        done(null, user);
})

passport.use(new GoogleStrategy({
        clientID:"145713070872-g6tmr37gfk7i5d2f17gkfbl6iadn4sp6.apps.googleusercontent.com",
        clientSecret:"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",
        callbackURL: "http://localhost:5000/callback",
        passReqToCallback   : true
    },
    function(request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
    }
))