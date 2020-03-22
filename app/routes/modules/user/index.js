const user = require('express').Router();



user.get('/',require('./getuser'));
user.get('/logout/:userId',require('./logout'))
user.patch('/:userId',require('./edituser'))
user.delete('/:userId',require('./deleteuser'))



module.exports = user;
