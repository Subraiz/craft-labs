const mongoose = require("mongoose");

let UserSessionSchema = mongoose.Schema({
  userID: {
    type: String,
    default: "",
    required: true
  },
  timeStamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

let UserSession = (module.exports = mongoose.model(
  "userSession",
  UserSessionSchema
));

// Return all user sessions
module.exports.get = function(callback, limit) {
  UserSession.find(callback).limit(limit);
};
