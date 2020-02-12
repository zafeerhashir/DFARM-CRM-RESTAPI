const modules = require('express').Router();



modules.use('/animals',require('./animal/index'));
modules.use('/feed',require('./feed/index'));




module.exports = modules;
