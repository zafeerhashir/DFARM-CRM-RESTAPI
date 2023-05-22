const user = require('express').Router();



user.get('/', require('./getuser'));
user.get('/logout/:userId', require('./logout'))
user.get('/role/', require('./getrole'))
// user.get('/blockuser/',require('./blockuser'))
// user.get('/unblockuser/',require('./unblockuser'))
// user.patch('/:userId',require('./edituser'))
user.delete('/:userId', require('./deleteuser'))
user.post('/createrole', require('./createrole'))



module.exports = user;
