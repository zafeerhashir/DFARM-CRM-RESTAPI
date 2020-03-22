const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema;





const userSchema = mongoose.Schema({
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'role'
    },
    firstName: {
        type: String,
        required: false,
        trim: true
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    token: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false,
    },
})

userSchema.pre('save', function(next) {
   
    if(this.isModified())
    {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(this.password, salt, function(err, hash) {
                this.password = hash
                next();
            });
        })
    }
   
  });



module.exports = mongoose.model('user', userSchema);