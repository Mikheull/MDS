const express = require('express');
const router = express.Router();


const indexRouter = require('./index');
router.use('/', indexRouter);

const blogRouter = require('./blog');
router.use('/blog', blogRouter);

const apiRouter = require('./api');
router.use('/api', apiRouter);

module.exports = router;