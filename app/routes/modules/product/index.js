const product = require('express').Router()


product.get('/',require('./getProducts'))
product.post('/',require('./addProducts'))



module.exports = product