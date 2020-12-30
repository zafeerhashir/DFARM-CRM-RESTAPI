
const express = require('express');
const mongoose = require('mongoose');
// const db = 'dairyfarmSTAGING'
const db = 'dairyfarmPROD'

// const uri = `mongodb+srv://test:test@cluster0-jwiv8.mongodb.net/${db}?retryWrites=true&w=majority;`
const uri = `mongodb+srv://test:test@cluster0.jwiv8.mongodb.net/${db}?retryWrites=true&w=majority`
mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

