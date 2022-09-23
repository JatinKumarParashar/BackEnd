const express = require('express');
const path = require('path');
const router = express.Router();
const getContact = require('../controllers/contact');

router.get('/contactus', getContact.contact);

module.exports = router;