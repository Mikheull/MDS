const express = require('express');
const router = express.Router();

router.use('/', require('./index'));
router.use('/login', require('./authentification'));

module.exports = router;