const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  role: { type: Schema.Types.ObjectId, ref: 'role' },
  userName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,

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
    required: false,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email address" });
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
    default: null
  }
});

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


module.exports = mongoose.model("user", userSchema,);
