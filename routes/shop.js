const express = require('express');
const path=require('path');
const rootdir=require('../util/path');
const routers = express.Router();

routers.get('/', (req, res, next) => {
    res.sendFile(path.join(rootdir,'views','shop.html'));
});

module.exports = routers;