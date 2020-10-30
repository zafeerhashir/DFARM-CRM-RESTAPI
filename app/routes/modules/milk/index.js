const milk = require('express').Router();

milk.get('/', require('./getmilk'));
milk.post('/', require('./addmilk'))
milk.patch('/:id', require('./editmilk'))
milk.delete('/:id', require('./deletemilk'))

module.exports = milk;