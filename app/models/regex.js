alphanumericRegex = /^[a-z0-9]+$/i;
floatRegex = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
alphabetRegex = /^[A-Za-z]+$/;
dateRegex =
  /^(19[5-9][0-9]|20[0-4][0-9]|2050)[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])$/;

module.exports = { alphanumericRegex, floatRegex, alphabetRegex, dateRegex };
