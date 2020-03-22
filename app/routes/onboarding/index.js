const onboarding = require('express').Router();



onboarding.post('/login',require('./login'))
onboarding.post('/adduser',require('./adduser'))
onboarding.post('/forgotpassword',require('./forgotpassword'))
onboarding.post('/createrole',require('./createrole'))



module.exports = onboarding
