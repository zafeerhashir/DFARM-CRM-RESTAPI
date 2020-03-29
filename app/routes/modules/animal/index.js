const animal = require('express').Router();



// animal.get('/',require('./getanimal'));
animal.post('/',require('./addanimal'))
animal.patch('/:id',require('./editanimal'))
animal.delete('/:id',require('./deleteanimal'))


module.exports = animal;
