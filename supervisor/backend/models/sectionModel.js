const mongoose = require("mongoose");

let SectionSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  }
});

// Export Theme model
let Section = (module.exports = mongoose.model("section", SectionSchema));

// Return all themes
module.exports.get = function(callback, limit) {
  Section.find(callback).limit(limit);
};
