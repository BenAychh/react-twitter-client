var passport = require('passport');
var knex = require('../../../db/knex');
var helpers = require('./helpers');





// *** configure passport *** //
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  knex('users').where('id', id)
    .then(function(data) {
      return done(null, data[0]);
    }).catch(function(err) {
      return done(err, null);
    });
});

module.exports = passport;
