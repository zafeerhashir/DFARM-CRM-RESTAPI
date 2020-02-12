const animals = require('express').Router();



animals.get('/',require('./getanimals'));




module.exports = animals;
