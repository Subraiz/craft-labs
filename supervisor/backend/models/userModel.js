const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Set up user schema for mongo database
let UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// Encrypt the user password
UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Validate user password
UserSchema.methods.validPassword = function(password) {
  // this.password is user stored password
  return bcrypt.compareSync(password, this.password);
};

// Export User model
let User = (module.exports = mongoose.model("user", UserSchema));

// Return all users
module.exports.get = function(callback, limit) {
  User.find(callback).limit(limit);
};
