const feed = require('express').Router();



feed.get('/',require('./getfeed'));
feed.post('/',require('./addfeed'))


module.exports = feed;
