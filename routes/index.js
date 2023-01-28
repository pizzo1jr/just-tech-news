const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router; 

// this file collects the packaged group of API endpoints and prefixes them with the path '/api'.
// 2nd use of router.use() if for if we make request to endpoint that doesn't exist, will recieve 404 error.