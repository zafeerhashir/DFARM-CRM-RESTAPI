const animal = require('express').Router();



animal.get('/',require('./getanimal'));
animal.post('/',require('./addanimal'));





module.exports = animal;
