const mongoose = require("mongoose");

// Set up schema for mongo database
let WebsiteSchema = mongoose.Schema({
  userID: {
    type: Number,
    required: true
  },
  config: {
    type: Object,
    category: {
      type: String
    },
    information: {
      type: Object,
      title: {
        type: String,
        required: true
      }
    }
  }
});

// Export Website model
let Website = (module.exports = mongoose.model("website", WebsiteSchema));

// Return all websites
module.exports.get = function(callback, limit) {
  Website.find(callback).limit(limit);
};
