
const report = require('express').Router();

report.get('/', require('./getReport'));

module.exports = report;