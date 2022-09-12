const express = require('express');
const routers = express.Router();

routers.get('/', (req, res, next) => {
    res.send('<h1>This is hello from express.js</h1>');
});

module.exports = routers;