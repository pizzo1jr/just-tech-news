const router = require('express').Router();

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;

// used to collect API endpoints and give them their prefixed name.
// user-routes.js did not use the word users in any routes, BC we take those and impliment themto another router. and give them /users now