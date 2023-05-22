const feeddate = require('express').Router();



feeddate.get('/', require('./getfeeddate'));
feeddate.post('/', require('./addfeeddate'))
feeddate.patch('/:id', require('./editfeeddate'))
feeddate.delete('/:id', require('./deletefeeddate'))


module.exports = feeddate;
