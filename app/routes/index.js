const routes = require('express');
const bodyParser = require('body-parser');




routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());
routes.use('/modules',require('./modules/index'));
// routes.use('/modules',require('../middleware/authorizaton'),require('./modules/index'));
// routes.use('/onboarding',require('./onboarding/index'));




// routes.use((req, res, next) => {
//   // do logging
//   console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
//   next(); // make sure we go to the next routes and don't stop here
// });

// routes.get('/', (req, res) => {
//   res.status(200).json({ success: true, message: 'Hello world!' });
// });



module.exports = routes;

