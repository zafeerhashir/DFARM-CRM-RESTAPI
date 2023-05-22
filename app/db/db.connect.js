const express = require("express");
const mongoose = require("mongoose");
const uri = ``;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
