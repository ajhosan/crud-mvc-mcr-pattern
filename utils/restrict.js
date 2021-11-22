const passport = require('../middlewares/passport');

module.exports = passport.authenticate('jwt', { session: false });
