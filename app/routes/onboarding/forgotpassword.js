const userModel = require('../../models/user')
var mailer = require('express-mailer');


module.exports = async(req, res) => {

    app.mailer.send('email', {
            to: req.body.email, // REQUIRED. This can be a comma delimited string just like a normal email to field. 
            subject: 'Change Password', // REQUIRED.
            otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
          }, function (err) {
            if (err) {
              // handle error
              res.send('There was an error sending the email');
              return;
            }
            res.send('Email Sent');
          });

    }
