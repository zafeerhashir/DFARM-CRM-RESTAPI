const onboarding = require('express').Router();



onboarding.post('/login',require('./login'))
onboarding.post('/adduser/:roleId',require('./adduser'))
onboarding.post('/forgotpassword',require('./forgotpassword'))



module.exports = onboarding
