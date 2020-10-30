const milkPerDay = require('express').Router();

milkPerDay.get('/', require('./getmilkperday'));
milkPerDay.post('/', require('./addmilkperday'))
milkPerDay.patch('/:id', require('./editmilkperday'))
milkPerDay.delete('/:id', require('./deletemilkperday'))

module.exports = milkPerDay;