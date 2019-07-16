const mongoose = require("mongoose");

/******** Following schemas are used to plug into website schema ********/
let FeatureSchema = mongoose.Schema({
  name: String,
  enabled: {
    type: Boolean,
    default: false
  }
});

let SectionSchmea = mongoose.Schema({
  name: String,
  content: {
    type: Object,
    default: {}
  }
});

let PageSchema = mongoose.Schema({
  name: String,
  sections: [SectionSchmea]
});

let VisitorSchema = mongoose.Schema({
  ip: String,
  timeStamp: {
    type: Date,
    default: Date.now()
  }
});

/* ******************************************************************** */

// Set up schema for mongo database
let WebsiteSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  type: {
    type: String, // Check what type of website we are working with
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  },
  features: [FeatureSchema],
  pages: [PageSchema],
  domain: String,
  planType: {
    type: String,
    default: "Standard"
  },
  visitors: [VisitorSchema]
});

// Export Website model
let Website = (module.exports = mongoose.model("website", WebsiteSchema));

// Return all websites
module.exports.get = function(callback, limit) {
  Website.find(callback).limit(limit);
};
