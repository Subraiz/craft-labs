const mongoose = require("mongoose");

let TemplateSchema = mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  themes: [
    {
      type: String,
      required: true
    }
  ],
  sections: [
    {
      type: String,
      required: true
    }
  ]
});

// Export Theme model
let Template = (module.exports = mongoose.model("template", TemplateSchema));

// Return all themes
module.exports.get = function(callback, limit) {
  Template.find(callback).limit(limit);
};
